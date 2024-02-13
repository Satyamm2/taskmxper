import React from "react";
import itemimg from "./item.jpg";
import { ItemCard } from "../../../components/itemsCard";

function LandingItems() {
    return (
        <>
            <div className="grid grid-cols-3 px-32 bg-black">
                {/* <div className="flex flex-col px-6 py-10 items-center gap-4 bg-white">
                    <div className="text-orange-400 font-semibold text-2xl">
                        <span>$26.95</span>
                    </div>
                    <div className="text-2xl font-normal">
                        <span>Grilled Fillet</span>
                    </div>
                    <div className="text-gray-500 text-center tracking-wider content-center">
                        <p>Welcome to Orchard Fresh, where nature's bounty meets your plate! Our online store is brimming with the juiciest selection of farm-fresh fruits straight from the orchard to your doorstep.</p>
                    </div>
                </div> */}
                <ItemCard 
                    rate={"$26.95"}
                    itemName={"Grilled Fillet"}
                    itemBody={"Welcome to Orchard Fresh, where nature's bounty meets your plate! Our online store is brimming with the juiciest selection of farm-fresh fruits straight from the orchard to your doorstep."}
                />
                <div>
                    <img src={itemimg} />
                </div>
                <ItemCard 
                    rate={"$53.3"}
                    itemName={"Chicken Breast"}
                    itemBody={"Welcome to Orchard Fresh, where nature's bounty meets your plate! Our online store is brimming with the juiciest selection of farm-fresh fruits straight from the orchard to your doorstep."}
                />
                <div>
                    <img src={itemimg} />
                </div>
                <ItemCard 
                    rate={"$26.95"}
                    itemName={"Grilled Fillet"}
                    itemBody={"Welcome to Orchard Fresh, where nature's bounty meets your plate! Our online store is brimming with the juiciest selection of farm-fresh fruits straight from the orchard to your doorstep."}
                />
                <div>
                    <img src={itemimg} />
                </div>
                <ItemCard 
                    rate={"$26.95"}
                    itemName={"Grilled Fillet"}
                    itemBody={"Welcome to Orchard Fresh, where nature's bounty meets your plate! Our online store is brimming with the juiciest selection of farm-fresh fruits straight from the orchard to your doorstep."}
                />
                <div>
                    <img src={itemimg} />
                </div>
                <ItemCard 
                    rate={"$53.3"}
                    itemName={"Chicken Breast"}
                    itemBody={"Welcome to Orchard Fresh, where nature's bounty meets your plate! Our online store is brimming with the juiciest selection of farm-fresh fruits straight from the orchard to your doorstep."}
                />
                <div>
                    <img src={itemimg} />
                </div>
                <ItemCard 
                    rate={"$26.95"}
                    itemName={"Grilled Fillet"}
                    itemBody={"Welcome to Orchard Fresh, where nature's bounty meets your plate! Our online store is brimming with the juiciest selection of farm-fresh fruits straight from the orchard to your doorstep."}
                />
                <div>
                    <img src={itemimg} />
                </div>
            </div>
        </>
    );
};

export default LandingItems;