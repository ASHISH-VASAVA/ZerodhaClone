import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; // ⬅️ NEW IMPORT

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},  // ⬅️ NEW
  closeSellWindow: () => {},    // ⬅️ NEW
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false); // ⬅️ NEW
  const [selectedSellStockUID, setSelectedSellStockUID] = useState(""); // ⬅️ NEW

  // 🔵 Buy Logic
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // 🔴 Sell Logic
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedSellStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedSellStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,   // ⬅️ Exported
        closeSellWindow: handleCloseSellWindow, // ⬅️ Exported
      }}
    >
      {props.children}

      {/* Buy & Sell Modals */}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedSellStockUID} />} {/* ⬅️ NEW */}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
