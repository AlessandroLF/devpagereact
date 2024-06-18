import { useState, useEffect } from "react";

export const SignUp = ()=>{

    const [data, setData] = useState({
        name: '',
        password: '',
        password2: '',
        email: '',
        public: true
    });

    const onChange = (event)=>{
        const {name, value} = event.target;
        setData((prev)=>({
            ...prev,
            [name]: value
        }));
    }

    const Submit = async(event)=>{
        event.preventDefault();
        if(data.password === data.password2){
            var cargaUtil = {
                "name" : data.name,
                "password": data.password,
                'email': data.email,
                'public': data.public
            }

            const respuesta = await fetch('https://devpage-ojxi.onrender.com/signUp', {
                method: "POST",
                body: JSON.stringify(cargaUtil)
            });
            let res = await respuesta.json();
            if(res){
                alert(res);
            }
            else{
                alert("Nombre de usuario o contraseña incorrectos");
            }
        }else
            alert('The passwords do not coincide');
    }

    return(
    <form onSubmit={Submit}>
        <h3>Sign Up</h3>
        <tr>
            <input onChange={onChange} required placeholder='Name' type="text" id="nombre" name="name" />
            <label>Name: </label>
        </tr>
        <tr>
            <input onChange={onChange} required placeholder='Password' type="password" id="pass" name="password" />
            <label>Password: </label>
        </tr>
        <tr>
            <input onChange={onChange} required placeholder='Password' type="password" id="pass2" name="password2" />
            <label>Cofirm password: </label>
        </tr>
        <tr>
            <input onChange={onChange} placeholder='Optional' type="email" name="email" />
            <label>E-mail: </label>
        </tr>
        <tr>
            <input onChange={onChange} type="checkbox" name="public" checked />
            <label>Make public: </label>
        </tr>
        <tr>
            <button className='btn' >Sign Up</button>
        </tr>
    </form>
);}