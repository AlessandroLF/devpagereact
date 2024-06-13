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
            text: "Skilled web developer proficient in HTML, CSS, and JavaScript, with experience in building responsive web applications. Intuitive and dynamic user interfaces using React and robust backend solutions with Node.js. Efficient full-stack solutions.",
            texto: "Hábil desarrollador web, diestro en HTML, CSS y JavaScript, con experiencia creando aplicaciones web responsivas. Interfaces de usuario intuitivas y dinámicas usando React y soluciones robustas para el backend con Node.js. Soluciones full-stack eficientes."
        },
        {
            icons: [
                {src:"https://cdn-icons-png.flaticon.com/512/4785/4785958.png", alt:"c++"},
                {src:"https://cdn-icons-png.flaticon.com/512/5968/5968350.png", alt:"python"},
                {src:"https://cdn-icons-png.flaticon.com/512/226/226777.png", alt:"java"},
                {src:"https://cdn-icons-png.flaticon.com/512/1088/1088504.png", alt:"assembler"}
            ],
            text: "Experimented in C++, Java, kotlin, python, and Assembly, strong foundations in algorithm optimization, data structures, and object-oriented design principles. Experienced in developing efficient, high-performance software solutions. Skilled in low-level programming languages and committed to continuous learning and innovation",
            texto: "Experimentado en C++, Java, Kotlin, Pyton y Ensamblador, fuertes bases para la optimización de algoritmos, estructuras de datos y programación orientada a objetos. Experimentado en desarrollar soluciones de software eficientes y de alto rendimiento. hábil con lenguajes de niel bajo y comprometido con el continuo aprendizaje e innovación."
        },
        {
            icons: [
                {src:"https://cdn-icons-png.flaticon.com/512/10057/10057584.png", alt:"db"},
                {src:"https://cdn-icons-png.flaticon.com/512/2772/2772128.png", alt:"sql"},
                {src:"https://cdn-icons-png.flaticon.com/512/5968/5968342.png", alt:"postgres"},
                {src:"https://cdn-icons-png.flaticon.com/512/14199/14199414.png", alt:"mongodb"}
            ],
            text: "Experienced in SQL, NoSQL and relational database management systems such as MySQL, PostgreSQL, and MongoDB. Proficient in designing and optimizing database schemas, querying data effectively, and ensuring data integrity and security. Skilled in database performance tuning, replication, and scalability strategies.",
            texto: "Experiencia en SQL, NoSQL y systemas de manejo de bases de datos relacionales como MySQL, PostgreSQL, y MongoDB. Hábil para diseñar y optimizar esquemas, realizando consultas de manera efectiva y asegurando la seguridad e integridad de los datos. Especializado en optimización de rendimiento, replicación, y estrategias de escalabilidad."
        }
    ]

    const iconGroupClick = (event)=>{
        event.stopPropagation();
        event.target.parentElement.classList.toggle('off');
    }

    return (
    <div className='panel' >
        {
            cards.map(card =>(
                <div className="card off" >
                    <div className="iconGroup" onClick={iconGroupClick} >
                        {
                            card.icons.map(icon =>(
                                <img src={icon.src} alt={icon.alt} onClick={(e)=>{e.stopPropagation();e.target.parentElement.click();}} />
                            ))
                        }
                    </div>
                    <p >{card.text}</p>
                </div>
            ))
        }
    </div>)
};

export const Git = ()=>(
    <div className='panel v' >
        <a href="https://github.com/AlessandroLF">https://github.com/AlessandroLF</a>
    </div>
);

export const Animations = ()=>(
    <div className='panel' >Pretty</div>
);

export const Info = ()=>(
    <div className='panel' >Hey</div>
);