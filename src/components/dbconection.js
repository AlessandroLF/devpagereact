export const SignUp = ()=>{

    const Submit = async(event)=>{
        event.preventDefault();
        const form = event.target;
        if(form[1].value === form[2].value){
            var cargaUtil = {
                "name" : form[0],
                "password": form[1],
                'email': form[3],
                'public': form[4]
            }

            const url= 'https://devpage-ojxi.onrender.com/signUp';

            const respuesta = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cargaUtil)
            });
            let res = await respuesta.json();
            if(res){
                alert(JSON.stringify(res));
            }
            else{
                alert("Error");
            }
        }else
            alert('The passwords do not coincide');
    }

    return(
    <form onSubmit={Submit}>
        <h3>Sign Up</h3>
        <tr>
            <input required placeholder='Name' type="text" id="nombre" name="name" />
            <label>Name: </label>
        </tr>
        <tr>
            <input required placeholder='Password' type="password" id="pass" name="password" />
            <label>Password: </label>
        </tr>
        <tr>
            <input required placeholder='Password' type="password" id="pass2" name="password2" />
            <label>Cofirm password: </label>
        </tr>
        <tr>
            <input placeholder='Optional' type="email" name="email" />
            <label>E-mail: </label>
        </tr>
        <tr>
            <input type="checkbox" name="public" />
            <label>Make public: </label>
        </tr>
        <tr>
            <button className='btn' >Sign Up</button>
        </tr>
    </form>
);}

export const LogIn = ()=>{

    const Submit = async(event)=>{
        event.preventDefault();
        const form = event.target;
        var cargaUtil = {
            "name" : form[0],
            "password": form[1]
        }

        const url= 'https://devpage-ojxi.onrender.com/logIn';
        const respuesta = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cargaUtil)
        });
        let res = await respuesta.json();
        alert(JSON.stringify(res));
    }

    return(
        <form onSubmit={Submit}>
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
                <button className='btn' >Log In</button>
            </tr>
        </form>
    );
}