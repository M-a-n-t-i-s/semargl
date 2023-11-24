import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
    const navigate = useNavigate();
    return <div className={s.navbar}>
        <button onClick={() => navigate("/first")}>Раздел 1</button>
        <button onClick={() => navigate("/second")}>Раздел 2</button>
        <button onClick={() => navigate("/third")}>Раздел 3</button>
    </div>;
};

export default Navbar;