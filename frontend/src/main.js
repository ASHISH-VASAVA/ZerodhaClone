import { createRoot} from "react-dom/client";
import index from "./index";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";

createRoot (document.getElementById("root")).render(
    <BrowserRouter>
    <index/>
    </BrowserRouter>
)