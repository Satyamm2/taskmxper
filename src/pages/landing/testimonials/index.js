import React, { useState } from "react";

function Testimonial(){
    const [rating, setRating] = useState(0);

    const handleRatingClick = (value) => {
        setRating(value);
    };
    return(
        <>
        <div className="flex flex-col justify-center items-center p-32 bg-white gap-10">
                <div className="flex flex-col justify-center items-center text-gray-400 font-bold tracking-widest gap-2">
                    <h1>TESTIMONIALS</h1>
                    <div className="w-1/2 border-t-4 border-orange-300"></div>
                </div>
                <div className="text-5xl">
                    <span>What People are Saying</span>
                </div>
                <div className="grid grid-cols-4 gap-5 justify-center">
                    <div className="flex flex-col gap-5">
                        <div className="text-xl font-base">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <span 
                                    key={value}
                                    className={value <= rating ? 'text-yellow-500 cursor-pointer' : 'text-gray-400 cursor-pointer'}
                                    onClick={() => handleRatingClick(value)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <div className="text-xl font-base">
                            <span>"A Great Find"</span>
                        </div>
                        <div className="flex justify-center items-center content-center text-lg font-medium tracking-wider text-gray-500">
                            <p>"Exceptional flavors, delightful aromas, and impeccable presentation define the culinary experience here."</p>
                        </div>
                        <div>
                            <span>Divi</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="text-xl font-base">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <span 
                                    key={value}
                                    className={value <= rating ? 'text-yellow-500 cursor-pointer' : 'text-gray-400 cursor-pointer'}
                                    onClick={() => handleRatingClick(value)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <div className="text-xl font-base">
                            <span>"A Great Find"</span>
                        </div>
                        <div className="flex justify-center items-center content-center text-lg font-medium tracking-wider text-gray-500">
                            <p>"Exceptional flavors, delightful aromas, and impeccable presentation define the culinary experience here."</p>
                        </div>
                        <div>
                            <span>Divi</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="text-xl font-base">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <span 
                                    key={value}
                                    className={value <= rating ? 'text-yellow-500 cursor-pointer' : 'text-gray-400 cursor-pointer'}
                                    onClick={() => handleRatingClick(value)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <div className="text-xl font-base">
                            <span>"A Great Find"</span>
                        </div>
                        <div className="flex justify-center items-center content-center text-lg font-medium tracking-wider text-gray-500">
                            <p>"Exceptional flavors, delightful aromas, and impeccable presentation define the culinary experience here."</p>
                        </div>
                        <div>
                            <span>Divi</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="text-xl font-base">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <span 
                                    key={value}
                                    className={value <= rating ? 'text-yellow-500 cursor-pointer' : 'text-gray-400 cursor-pointer'}
                                    onClick={() => handleRatingClick(value)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <div className="text-xl font-base">
                            <span>"A Great Find"</span>
                        </div>
                        <div className="flex justify-center items-center content-center text-lg font-medium tracking-wider text-gray-500">
                            <p>"Exceptional flavors, delightful aromas, and impeccable presentation define the culinary experience here."</p>
                        </div>
                        <div>
                            <span>Divi</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;