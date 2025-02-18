import React from "react";
import logo from "../assets/Untitled design.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} className="mx-2 w-20" alt = "logo"/>
            </div>
            <div className="m-8 flex items-center justify-center gap-4">
                <FaLinkedin/>
                <FaInstagram/>
                <FaGithub/>
                <FaSquareXTwitter/>
            </div>
        </nav>
    )
};

export default Navbar;