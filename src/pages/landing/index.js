import React from "react";
import landing1 from './woodsandwich.jpg';
import OurStory from "./our-story";
import Onlybest from "./only-the-best";
import LandingItems from "./items";
import Testimonial from "./testimonials";
import DontMiss from "./dontMiss";

function Landing(){
    return(
        <>
        <div className="flex flex-col">
            <div className="relative">
                <img className="w-full" src={landing1} alt="landing imgage"/>
                <div className="flex absolute inset-0 bg-gradient-to-bl from-transparent to-black opacity-100 justify-center  p-36">
                    <div className="flex flex-col gap-20">
                        <div className="flex justify-center text-7xl text-white">
                            <h1 className="">Only Quality Food</h1>
                        </div>
                        <div className="flex text-white justify-center text-center">
                            <div className="w-10/12 content-center text-lg font-semibold text-gray-300">
                                <p>
                                    llore34 dfsdklfj ds fkjsdlf lfsd sdlfjdsl gsdlkf fgjsdklfjisdf slfsd fsdjifsdf
                             lsfjsl fsdiflsfj sdlsdlfdslkfhdsf sl fhls. sdfsdf sdfsdg dslg sdgl sdgl sdgs gsdlf lfsdf  dsklfjsdlf.
                             gsdg sdglsg jssl jdsflsdksklf ldg dslg jsdlgjdslkg sdlfj l . ldsfjsdl fsd.f dslgjdslf.sdf dslfjdslfjsdfksdj fsd.f f. 
                             </p>
                             </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-cols-2 gap-4 text-white">
                                <div className="py-2 px-4 border-2 text-center font-semibold hover:bg-orange-300 cursor-pointer">VIEW MENU</div>
                                <div className="py-2 px-4 border-2 text-center font-semibold hover:bg-orange-300 cursor-pointer">RESERVATION</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OurStory />
            <Onlybest />
            <LandingItems />
            <Testimonial />
            <DontMiss />

        </div>
        </>
    );
};

export default Landing;