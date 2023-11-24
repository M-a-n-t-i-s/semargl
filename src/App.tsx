import React from "react";
import { Routes, Route } from "react-router-dom";
import s from "./App.module.css";
import ThirdApplication from "./components/ThirdApplication/ThirdApplication";
import SecondApplication from "./components/SecondApplication/SecondApplication";
import FirstApplication from "./components/FirstApplication/FirstApplication";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <div className={s.app}>
                <Routes>
                    <Route path="/first" element={<FirstApplication />} />
                    <Route path="/second" element={<SecondApplication />} />
                    <Route path="/third/:value2?" element={<ThirdApplication />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
