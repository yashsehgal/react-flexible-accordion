import React from 'react';

export default function Accordion({ children }) {
    return (
        <React.Fragment>
            <div className='w-fit h-fit grid grid-cols-1 gap-2 transition-all'>
                { children }
            </div>
        </React.Fragment>
    )
}