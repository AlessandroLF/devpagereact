import { useState, useEffect } from 'react';
import glogo from '../Git-Icon-Black.png';

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

export const Bd = ()=>{

    const oncSearchClick = (event)=>{
        event.target.parentElement.classList.toggle('off');
    }

    const secClick = (event)=>{
        event.target.parentElement.click();
    }

    return(
        <div className='panel' >
            <div className='card w off' >
                <div className='header' onClick={oncSearchClick}>
                    <img src="https://cdn-icons-png.flaticon.com/512/6703/6703157.png" alt='Search' onClick={secClick} />
                    <label onClick={secClick} >____</label>
                </div>
                <div className='content'>
                    <h1>DB Querry here</h1>
                </div>
            </div>
            <div className='card'>
                <form>
                    <h3>Log In</h3>
                    <tr>
                        <input required placeholder='Name' type="text" id="nombre" name="name" />
                        <label>Name: </label>
                    </tr>
                    <tr>
                        <input required placeholder='Password' type="password" id="pass" name="pass" />
                        <label>Password: </label>
                    </tr>
                    <tr>
                        <div className='btn' >Log In</div>
                    </tr>
                </form>
            </div>
            <div className='card'>
            <form>
                    <h3>Sign Up</h3>
                    <tr>
                        <input required placeholder='Name' type="text" id="nombre" name="name" />
                        <label>Name: </label>
                    </tr>
                    <tr>
                        <input required placeholder='Password' type="password" id="pass" name="pass" />
                        <label>Password: </label>
                    </tr>
                    <tr>
                        <input required placeholder='Password' type="password" id="pass2" name="pass2" />
                        <label>Cofirm password: </label>
                    </tr>
                    <tr>
                        <input placeholder='Optional' type="email" id="email" name="email" />
                        <label>E-mail: </label>
                    </tr>
                    <tr>
                        <div className='btn' >Sign Up</div>
                    </tr>
                </form>
            </div>
        </div>
    );
}

export const Animations = ()=>(
    <div className='panel' >Pretty</div>
);

export const Info = ()=>{

    const [modal, setModal] = useState(false);

    const onCVClick = ()=>{
        setModal(!modal);
    }

    const onModalClick = ()=>{
        setModal(!modal);
    }

    return (
        <div className='panel v' >
            {modal && <div className='modal' onClick={onModalClick} >
                    <embed src='https://devpage-ojxi.onrender.com/CV_Alessandro_Lombardo_EN.pdf' type='application/pdf' />
                    <div className='btn close'>X</div>
                </div>
            }
            <table>
                <tr>
                    <td><img src='https://cdn-icons-png.flaticon.com/512/2165/2165061.png' alt='E-mail' /></td>
                    <td>lombardoalessandro25@hotmail.com</td>
                </tr>
                <tr>
                    <td><img src={glogo} alt='GitHub' /></td>
                    <td><a href="https://github.com/AlessandroLF" target="_blank" >https://github.com/AlessandroLF</a></td>
                </tr>
                <tr>
                    <td><img src='https://cdn-icons-png.flaticon.com/512/6067/6067468.png' alt='Phone' /></td>
                    <td>+52 5514994341</td>
                </tr>
                <tr>
                    <td><img src='https://cdn-icons-png.flaticon.com/512/3135/3135686.png' alt='Curriculum Vitae' /></td>
                    <td><div className='btn' onClick={onCVClick} >CV_Alessandro_Lombardo</div></td>
                </tr>
            </table>
        </div>
    )
};