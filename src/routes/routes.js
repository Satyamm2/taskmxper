import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../pages/landing";
import Home from "../pages/home";

function Public_Routes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
        </Routes>
        </>
    )
}

export default Public_Routes;