import React from "react";
import stroyimg from "./storyimg.jpg";

function OurStory() {
    return (
        <>
            <div className="grid grid-cols-2 justify-between p-32">
                <div className="flex flex-col gap-5 p-10">
                    <div className="flex text-gray-400 font-bold tracking-widest">
                        <h1 className="border-b-4 border-orange-300 ">OUR STORY</h1>
                    </div>
                    <div className="text-5xl">
                        <span>Welcome To Royal</span>
                    </div>
                    <div className="flex flex-col text-gray-500 text-lg font-semibold tracking-wide gap-6">
                        <span>
                            Welcome to Orchard Fresh, where nature's bounty meets your plate! Our online store is brimming with the juiciest selection of farm-fresh fruits straight from the orchard to your doorstep. Indulge in the sweetness of ripe strawberries, the tanginess of crisp apples, and the succulence of plump grapes. We take pride in delivering quality produce bursting with flavor and nutrients. Explore our vibrant array of fruits today and let nature's goodness inspire your every bite!
                        </span>
                        <span>
                            Welcome to Orchard Fresh, where nature's bounty meets your plate! Our online store is brimming with the juiciest selection of farm-fresh fruits straight from the orchard to your doorstep. Indulge in the sweetness of.
                        </span>
                    </div>
                </div>
                <div className="flex justify-end">
                    <img className="w-10/12" src={stroyimg} />
                </div>
            </div>
        </>
    );
};

export default OurStory;