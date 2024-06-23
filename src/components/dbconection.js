import { useState, useEffect } from "react";

const SignUp = ({setLoggedIn})=>{
        
    const [waitModal, setWaitModal] = useState(false);

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
            {waitModal && <div className='modal wait' />}
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

const LogIn = ({setLoggedIn})=>{

    const [waitModal, setWaitModal] = useState(false);

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
            if(!res.err && res.suc)
                setLoggedIn(true);
            else
                alert('Error: ' + res.err);
        }catch(e){
            console.log(e);
        }
        setWaitModal(false);
    }

    return(
        <form onSubmit={Submit}>
            {waitModal && <div className='modal wait' />}
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

const Upload = ()=>{
    return(
        <div className='card w' >

        </div>
    );
}

export const SessionPanel = ()=>{

    const [loggedIn, setLoggedIn] = useState(false);

    return(<>
        {loggedIn ? <Upload /> : <>
            <div className='card' >
                <LogIn setLoggedIn={setLoggedIn} />
            </div>
            <div className='card' >
                <SignUp setLoggedIn={setLoggedIn} />
            </div>
        </>}
    </>)
}

export const QuerryPanel = ()=>{

    const [rows, setRows] = useState([]);
    const [cols, setCols] = useState(['id','name', 'email'])

    const querry = async()=>{
        const cargaUtil = {
            cols: cols
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
    }
    
    useEffect(()=>{
        querry();
    }, [])

    return(<div className='db' >
        <table>
            <thead>
            <tr>
                {cols.map((col)=>(
                    <td>{col}</td>
                ))}
            </tr>
            </thead>
            <tbody>
                {rows.map((row)=>(
                    <tr>
                        {cols.map((col)=>(
                            <td>{row[col]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>);
}