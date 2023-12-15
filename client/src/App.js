import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.js"
import Home from "./pages/Home/Home.js";
import Blogs from "./pages/Blogs.js";
import Contact from "./pages/Contact.js";
import Styles from "./App.css";
import Introduction from "./pages/Introduction/Introduction.js";
import Register from "./pages/Procedures/Register.js";
import Room from "./pages/Procedures/Room.js";
import Regulation from "./pages/Procedures/Regulation.js";
import Detail from "./pages/Detail/Detail.js";
import Auction from "./pages/Auction/Auction.js";
import ModalAddNew from "./components/ModalAddNew.js";

function App() {
  return (
    <div className={Styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="register" element={<Register />} />
            <Route path="room" element={<Room />} />
            <Route path="regulation" element={<Regulation />} />
            <Route path="detail" element={<Detail />} />
            <Route path="auction" element={<Auction />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
