import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import DashBoard from "./Dashboard";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const { data } = await axios.get("https://zerodhaclone-backend.onrender.com/auth/verify", {
          withCredentials: true, //  Send cookies
        });

        if (data.status) {
          setUsername(data.user);
          toast(`Hello ${data.user}`, {
            position: "top-right",
          });
        } else {
          window.location.href = "https://zerodhaclone-frontend.onrender.com/login";
        }
      } catch (err) {
        window.location.href = "https://zerodhaclone-frontend.onrender.com/login";
      }
    };

    verifyToken();
  }, []);

  return (
    <>
      <TopBar />
      <DashBoard />
    </>
  );
};

export default Home;