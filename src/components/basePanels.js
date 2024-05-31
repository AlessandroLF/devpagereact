//import { useState, useEffect } from 'react';

export const Experience = ()=>{

    const cards = [
        {
            icons: [
                {src:"https://cdn-icons-png.flaticon.com/512/1199/1199124.png", alt: "js"},
                {src:"https://cdn-icons-png.flaticon.com/512/9797/9797982.png", alt: "html"},
                {src:"https://cdn-icons-png.flaticon.com/512/9540/9540483.png", alt:"css"},
                {src:"https://cdn-icons-png.flaticon.com/512/10259/10259813.png", alt:"css"}
            ],
            text: "Text Here"
        },
        {
            icons: [
                {src:"https://cdn-icons-png.flaticon.com/512/4785/4785958.png", alt:"c++"},
                {src:"https://cdn-icons-png.flaticon.com/512/5968/5968350.png", alt:"python"},
                {src:"https://cdn-icons-png.flaticon.com/512/226/226777.png", alt:"java"},
                {src:"https://cdn-icons-png.flaticon.com/512/1088/1088504.png", alt:"assembler"}
            ],
            text: "Text here"
        },
        {
            icons: [
                {src:"https://cdn-icons-png.flaticon.com/512/10057/10057584.png", alt:"db"},
                {src:"https://cdn-icons-png.flaticon.com/512/2772/2772128.png", alt:"sql"},
                {src:"https://cdn-icons-png.flaticon.com/512/5968/5968342.png", alt:"postgres"},
                {src:"https://cdn-icons-png.flaticon.com/512/14199/14199414.png", alt:"mongodb"}
            ],
            text: "Text here"
        }
    ]

    return (
    <div className='panel' >
        {
            cards.map(card =>(
                <div className="card" >
                    <div className="iconGroup" >
                        {
                            card.icons.map(icon =>(
                                <img src={icon.src} alt={icon.alt} />
                            ))
                        }
                    </div>
                    <div>Text Here</div>
                </div>
            ))
        }
    </div>)
};

export const Git = ()=>(
    <div className='panel' ><a href="https://github.com/AlessandroLF">https://github.com/AlessandroLF</a></div>
);

export const Animations = ()=>(
    <div className='panel' >Pretty</div>
);

export const Info = ()=>(
    <div className='panel' >Hey</div>
);