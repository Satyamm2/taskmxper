import React from "react";

function Onlybest() {
    return (
        <>
            <div className="flex flex-col justify-center items-center p-32 bg-gray-100 gap-10">
                <div className="flex flex-col justify-center items-center text-gray-400 font-bold tracking-widest gap-2">
                    <h1>ONLY THE BEST</h1>
                    <div className="w-1/2 border-t-4 border-orange-300"></div>
                </div>
                <div className="text-5xl">
                    <span>Fresh Ingredient, Tasty Meals</span>
                </div>
                <div className="flex text-white justify-center text-center">
                    <div className="w-10/12 content-center text-lg font-medium tracking-wider text-gray-500">
                        <p>
                            Welcome to Orchard Fresh, where nature's bounty meets your plate! Our online store is brimming with the juiciest selection of farm-fresh fruits straight from the orchard to your doorstep. Indulge in the sweetness of.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex gap-4 text-white">
                        <div className="py-2 px-4 border-2 text-center font-semibold bg-orange-400 cursor-pointer tracking-widest">VIEW ITEMS</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Onlybest;