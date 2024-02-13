import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="flex p-6 top-0 px-12 sticky justify-between z-50 bg-white">
                <div className="text-gray-700 text-2xl font-bold">
                    <span>Restaurant Landing Page</span>
                </div>
                <div className="flex gap-7 items-center font-semibold">
                <div className="cursor-pointer"><Link to="/">Landing</Link></div>
                <div className="cursor-pointer"><Link to="/home">Home</Link></div>
                    <div className="cursor-pointer">Gallery</div>
                    <div className="cursor-pointer">Shop</div>
                    <div className="cursor-pointer">Blog</div>
                    <div className="cursor-pointer">About</div>
                    <div className="cursor-pointer">Team</div>
                    <div className="cursor-pointer">Contact</div>
                    <div className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;