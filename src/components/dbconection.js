import { useState, useEffect, useRef } from "react";

const SignUp = ({setLoggedIn, setWaitModal})=>{

    const Submit = async(event)=>{
        event.preventDefault();
        setWaitModal(true);
        const form = event.target;
        if(form[1].value.length > 5){
            if(form[1].value === form[2].value){

                var cargaUtil = {
                    'name' : form[0].value,
                    'password': form[1].value,
                    'email': form[3].value,
                    'public': form[4].checked
                };
                const url= 'https://devpage-ojxi.onrender.com/signUp';
    
                const respuesta = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify(cargaUtil)
                });
                const res = await respuesta.json();
                if(!res.err){
                    alert('Success!');
                    setLoggedIn(true);
                }
                else{
                    alert(res.key + ': ' + res.val + ' is already registred, plase choose another one');
                }
            }else{
                alert('The passwords do not match');
            }
        }else{
            alert('Password must be at least 6 characters');
        }

        setWaitModal(false);
    }

    return(
        <form onSubmit={Submit}>
            <h3>Sign Up</h3>
            <table>
                <tr>
                    <td><label>Name: </label></td>
                    <td><input required placeholder='Name' type="text" name="name" /></td>
                </tr>
                <tr>
                    <td><label>Password: </label></td>
                    <td><input required placeholder='Password' type="password" name="password" /></td>
                </tr>
                <tr>
                    <td><label>Cofirm password: </label></td>
                    <td><input required placeholder='Password' type="password" name="password2" /></td>
                </tr>
                <tr>
                    <td><label>E-mail: </label></td>
                    <td><input placeholder='Optional' type="email" name="email" /></td>
                </tr>
                <tr>
                    <td><label>Make public: </label></td>
                    <td><input type="checkbox" name="public" /></td>
                </tr>
                <tr><td></td>
                    <td><button className='btn' >Sign Up</button></td>
                </tr>
            </table>
        </form>
    )
;}

const LogIn = ({setLoggedIn, setWaitModal})=>{

    const Submit = async(event)=>{
        event.preventDefault();
        setWaitModal(true);
        const form = event.target;
        var cargaUtil = {
            'name' : form[0].value,
            'password': form[1].value
        }
        try{
            const url= 'https://devpage-ojxi.onrender.com/logIn';
            const respuesta = await fetch(url, {
                method: "POST",
                body: JSON.stringify(cargaUtil)
            });
            const res = await respuesta.json();
            if(!res.err && res.suc){
                sessionStorage.setItem('uname', form[0].value);
                sessionStorage.setItem('password', form[1].value);
                setLoggedIn(true);
            }
            else
                alert('Error: ' + res.err);
        }catch(e){
            console.log(e);
        }
        setWaitModal(false);
    }

    return(
        <form onSubmit={Submit}>
            <h3>Log In</h3>
                <table>
                <tr>
                    <td><label>Name: </label></td>
                    <td><input required placeholder='Name' type="text" /></td>
                </tr>
                <tr>
                    <td><label>Password: </label></td>
                    <td><input required placeholder='Password' type="password" /></td>
                </tr>
                <tr>
                    <td></td><td><button className='btn' >Log In</button></td>
                </tr>
            </table>
        </form>
    );
}

const Upload = ({setLoggedIn})=>{

    const [userQuotes, setUserquotes] = useState([]);
    const [waitModal, setWaitModal] = useState(false);

    const getQuotes = async()=>{
        setWaitModal(true);
        const cargaUtil = {
            'name' : sessionStorage.getItem('uname'),
            'password': sessionStorage.getItem('password')
        }
        try{
            const url= 'https://devpage-ojxi.onrender.com/getQuotes';
            const respuesta = await fetch(url, {
                method: "POST",
                body: JSON.stringify(cargaUtil)
            });
            const res = await respuesta.json();
            if(!res.err){
                console.log(res);
                setUserquotes(res.rows);
            }else
                alert('Error: ' + res.err);
        }catch(e){
            console.log(e);
        }
        setWaitModal(false);
    }

    const onSubmit = async(event)=>{
        event.preventDefault();
        setWaitModal(true);
        const form = event.target;
        if(form[1].value.length > 5){
            if(sessionStorage.getItem('uname')){
                var cargaUtil = {
                    'name' : sessionStorage.getItem('uname'),
                    'password': sessionStorage.getItem('password'),
                    'quote': form[0].value
                };
                const url= 'https://devpage-ojxi.onrender.com/saveQuote';
    
                const respuesta = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify(cargaUtil)
                });
                const res = await respuesta.json();
                if(!res.err){
                    alert('Success!');
                    setUserquotes(res.rows)
                }
                else{
                    alert('Error :' + res.err);
                }
            }
        }else{
            alert('Quote must be at least 6 characters');
        }
        setWaitModal(false);
    }

    const logOff = ()=>{
        setLoggedIn(false);
    }

    return(
        <div className='card w' >
            <div >
                <div>Hello {sessionStorage.getItem('uname')}! </div>
                <div className='btn close' onClick={logOff} >LogOut</div>
            </div>
            My quotes:
            <table>
                {userQuotes.map(quote=>(
                    <tr>
                        <td>{quote}</td>
                    </tr>
                ))}
            </table>
            {waitModal && <div className='modal wait' ><img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="Loading..." /></div>}
            <form onSubmit={onSubmit} >
                <h3>Save a qoute to your profile</h3>
                <table>
                    <tr>
                        <td><label>Quote to save: </label></td>
                        <td><input required placeholder='Quote' type="text" name="quote" ></input></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button className='btn' >Upload</button></td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export const SessionPanel = ()=>{
        
    const [waitModal, setWaitModal] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    return(<>
        {loggedIn ? <Upload setLoggedIn={setLoggedIn} /> : <>
            <div className='card' >
                {waitModal && <div className='modal wait' ><img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="Loading..." /></div>}
                <LogIn setLoggedIn={setLoggedIn} setWaitModal={setWaitModal} />
            </div>
            <div className='card' >
                {waitModal && <div className='modal wait' ><img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="Loading..." /></div>}
                <SignUp setLoggedIn={setLoggedIn} setWaitModal={setWaitModal} />
            </div>
        </>}
    </>)
}

export const QuerryPanel = ()=>{

    const [waitModal, setWaitModal] = useState(true);
    const [dropDownModal, setDropDownModal] = useState(false);
    const [rows, setRows] = useState([]);
    const [colsOn, setColsOn] = useState(['id','name', 'email' ]);
    const [colsOf, setColsOf] = useState(['date', 'quote']);
    const dropDownRef = useRef(null);


    const querry = async()=>{
        setWaitModal(true);
        const cargaUtil = {
            cols: colsOn
        }
        try{
            const url= 'https://devpage-ojxi.onrender.com/get';
            const respuesta = await fetch(url, {
                method: "POST",
                body: JSON.stringify(cargaUtil)
            });
            const res = await respuesta.json();
            if(!res.err){
                console.log(res);
                setRows(res.rows);
            }else
                alert('Error: ' + res.err);
        }catch(e){
            console.log(e);
        }
        setWaitModal(false);
    }

    const listItemClick = (event)=>{
        setDropDownModal(false);
        let selected = event.target.textContent;
        if(colsOn.includes(selected)){
            setColsOn(colsOn.filter(option => option !== selected))
            setColsOf([...colsOf, selected]);
        }else{
            setColsOf(colsOf.filter(option => option !== selected))
            setColsOn([...colsOn, selected]);
        }
    }
    
    useEffect(()=>{
        const outsideClick = (event)=>{
            if(dropDownRef.current && !dropDownRef.current.contains(event.target))
                setDropDownModal(false);
        }

        document.addEventListener('mousedown', outsideClick);

        querry();

        return ()=>{
            document.removeEventListener('mousedown', outsideClick);
        }
    }, [colsOf, colsOn])

    return(<div className='db' >
        <table>
        {waitModal ? <div className='modal wait' ><img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="Loading..." /></div> : <>
            <thead>
            <tr>
                <td>
                    {dropDownModal && <ul class="dropdown modal" ref={dropDownRef} >
                        {colsOf.map(col =>(
                            <li onClick={listItemClick} >
                                {col}
                            </li>
                        ))}
                        {colsOn.map(col =>(
                            <li className="on" onClick={listItemClick} >
                                {col}
                            </li>
                        ))}
                    </ul>}
                        <div className="btn" onClick={()=>{setDropDownModal(true)}} >+</div>
                </td>
                {colsOn.map((col)=>(
                    <td>{col}</td>
                ))}
            </tr>
            </thead>
            <tbody>
                {rows.map((row)=>(
                    <tr>
                        <tr></tr>
                        {colsOn.map((col)=>(
                            <td>{row[col]}</td>
                        ))}
                    </tr>
                ))}
            </tbody></>}
        </table>
    </div>);
}