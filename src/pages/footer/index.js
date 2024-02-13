import React, { useState } from "react";
import footerimg from "./footer.jpg";
import fb from "./facebook-64.png";
import twitter from "./twitter-64.png";
import gplus from "./google-plus-64.png";
import wifi from "./wireless-64.png";

function Footer() {
    const [formData , setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    };
    return (
        <>
            <div className="flex flex-col">
                <div className="relative">
                    <img className="w-full" src={footerimg} />
                    <div className="flex absolute inset-0 bg-gradient-to-bl from-transparent to-black opacity-100 justify-center  p-36">
                        <div className="grid grid-cols-2 justify-around gap-10">
                            <div className="flex flex-col bg-gray-950 w-full text-white py-20 px-16 items-center gap-6">
                                <div className="text-3xl font-semibold mx-2">
                                    <span>Hours of Operation</span>
                                </div>
                                <div className="flex flex-col tracking-wider items-center w-full gap-2">
                                    <span className="font-semibold">MON-FRI</span>
                                    <span>10:00am - 1:00pm</span>
                                    <span>4:00pm - 10:30pm</span>
                                </div>
                                <div className="flex flex-col items-center w-full border-t-2 border-orange-300 border-b-2 py-4 tracking-wider">
                                    <span className="font-semibold">SAT</span>
                                    <span>3:00pm - 10:30pm</span>
                                </div>
                                <div className="flex flex-col items-center tracking-wider">
                                    <span className="font-semibold">SUN</span>
                                    <span>We are closed</span>
                                </div>
                                <div className="flex justify-center">
                                    <div className="flex gap-4 text-white">
                                        <div className="py-2 px-5 text-center font-semibold bg-orange-300 cursor-pointer tracking-widest">MAKE A RESERVATION</div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div className="flex flex-col bg-gray-950 w-full text-white py-20 px-16 items-center gap-6">
                                <div className="flex flex-col justify-center items-center gap-4">
                                    <span className="text-3xl font-semibold mx-2">Drop Us a Line</span>
                                    <span className="text-xl text-center text-gray-300">Don't be shy. Let us know if you have any questions!</span>
                                    <div className="py-2 px-5 text-center font-semibold bg-orange-300 cursor-pointer tracking-widest">CONTACT US</div>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <span className="text-3xl font-semibold mx-2">Our Newsletter</span>
                                    <sapn className="text-xl text-center text-gray-300">Dialogue is an essential part of any script</sapn>

                                </div>
                                <div className="flex flex-col gap-4 w-full">
                                    <form>
                                    <div className="flex flex-col gap-4 w-full">
                                    <input
                                        className="bg-black p-3"
                                        placeholder="First Name"
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        className="bg-black p-3"
                                        placeholder="Last Name"
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required

                                    />
                                    <input
                                        className="bg-black p-3"
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button className="py-2 px-5 text-center font-semibold bg-orange-300 cursor-pointer tracking-widest">CONTACT US</button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between bg-black p-4 px-32">
                <div className="flex text-gray-500 gap-1">
                    <span>Designed by</span>
                    <span className="font-bold">Elegant Themes</span>
                    <span>|</span>
                    <span>Powered by</span>
                    <span className="font-bold">React</span>
                </div>
                <div className="flex gap-5">
                    <spna className="cursor-pointer"><img className="h-6 w-6" src={fb} /></spna>
                    <span className="cursor-pointer"><img className="h-6 w-6" src={twitter} /></span>
                    <span className="cursor-pointer"><img className="h-6 w-6" src={gplus} /></span>
                    <span className="cursor-pointer"><img className="h-6 w-6" src={wifi} /></span>
                </div>
            </div>
        </>
    );
};

export default Footer;