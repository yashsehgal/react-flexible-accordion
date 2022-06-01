import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

export default function AccordionItem({ children, title, w, textColor, bgColor }) {
    const [accordionContentRef, setAccordionContent] = useState('none');
    return (
        <React.Fragment>
            <div className="accordion-item-wrapper grid grid-cols-1 h-fit w-[560px] gap-1 transition-all">
                <button 
                    onClick={() => {
                        if (accordionContentRef.toLowerCase() === 'none') setAccordionContent('block');
                        else setAccordionContent('none');
                    }}
                    className="accordion-title-wrapper h-auto w-auto py-1 px-3 rounded-md font-semibold bg-gray-600 hover:brightness-110 text-white
                        flex flex-row items-center justify-between
                    "
                >
                    { title }
                    <div className="accordion-open-state-arrow-icon-wrapper font-semibold w-fit h-fit flex flex-row items-center justify-center">
                        { accordionContentRef.toLowerCase() === 'none' ? <FaArrowDown /> : <FaArrowUp /> }
                    </div>
                </button>
                <div className="accordion-content-wrapper font-normal h-fit w-auto py-1 px-3 rounded-md bg-gray-500 text-white"
                    style={{
                        display: (accordionContentRef.toLowerCase() === 'none' ? 'none' : 'block')                    
                    }}
                >
                    { children }
                </div>
            </div>
        </React.Fragment>
    )
}