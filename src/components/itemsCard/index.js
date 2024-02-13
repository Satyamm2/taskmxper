import React from "react";

export function ItemCard({rate, itemName, itemBody}) {
    return (
        <>
            <div className="flex flex-col px-6 py-10 items-center gap-4 bg-white">
                <div className="text-orange-400 font-semibold text-2xl">
                    <span>{rate}</span>
                </div>
                <div className="text-2xl font-normal">
                    <span>{itemName}</span>
                </div>
                <div className="text-gray-500 text-center tracking-wider content-center">
                    <p>{itemBody}</p>
                </div>
            </div>
        </>
    );
};