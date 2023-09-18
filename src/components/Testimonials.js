import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

const Testimonials = (props) => {
    let reviews = props.reviews;
    const[index, setIndex] = useState(0);

    function leftShiftHanlder() {
        if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    }
    function rightShiftHanlder() {
        if(index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }
    }
    function surpriseHanlder() {
        let RandomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(RandomIndex); 
    }
    return(
        <div className="w-[85px] md:w-[700px] rounded-md bg-white flex flex-col justify center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl">
            <Card review={reviews[index]}></Card>

            <div className="flex text-3xl mt-9 gap-3 text-violet-400 mx-auto font-bold">
                <button className=" cursor-pointer hover:text-violet-500" onClick={leftShiftHanlder}>
                    <FiChevronLeft/>
                </button>
                <button onClick={rightShiftHanlder} className=" cursor-pointer hover:text-violet-500">
                    <FiChevronRight/>
                </button>
            </div>
            <div className="mt-6">
                <button onClick={surpriseHanlder} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 curson-pointer px-10 py-2 rounded-md font-bold text-white text-l">
                    Surprise Me
                </button>
            </div>
        </div>
    )
}

export default Testimonials; 