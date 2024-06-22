

export const SignUp = (props)=>{

    const Submit = async(event)=>{
        event.preventDefault();
        props.modal(true);
        const form = event.target;
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
                props.modal(false);
            }
            else{
                alert(res.err.key + ': ' + res.err.val + ' is already registred, plase choose another one');
                props.modal(false);
            }
        }else{
            alert('The passwords do not match');
            props.modal(true);
        }
    }

    return(<>
    <form onSubmit={Submit}>
        <h3>Sign Up</h3>
        <table>
            <tr>
                <td><input required placeholder='Name' type="text" name="name" /></td>
                <td><label>Name: </label></td>
            </tr>
            <tr>
                <td><input required placeholder='Password' type="password" name="password" /></td>
                <td><label>Password: </label></td>
            </tr>
            <tr>
                <td><input required placeholder='Password' type="password" name="password2" /></td>
                <td><label>Cofirm password: </label></td>
            </tr>
            <tr>
                <td><input placeholder='Optional' type="email" name="email" /></td>
                <td><label>E-mail: </label></td>
            </tr>
            <tr>
                <td><input type="checkbox" name="public" /></td>
                <td><label>Make public: </label></td>
            </tr>
            <tr>
                <td><button className='btn' >Sign Up</button></td>
            </tr>
        </table>
    </form>
</>);}

export const LogIn = (props)=>{

    const Submit = async(event)=>{
        event.preventDefault();
        props.modal(true);
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
            if(!res.err)
                alert(JSON.stringify(res));
            else
                alert('Error: ' + res.err);
        }catch(e){
            console.log(e);
        }
        props.modal(false);
    }

    return(
        <form onSubmit={Submit}>
            <h3>Log In</h3>
                <table>
                <tr>
                    <td><input required placeholder='Name' type="text" /></td>
                    <td><label>Name: </label></td>
                </tr>
                <tr>
                    <td><input required placeholder='Password' type="password" /></td>
                    <td><label>Password: </label></td>
                </tr>
                <tr>
                    <td><button className='btn' >Log In</button></td>
                </tr>
            </table>
        </form>
    );
}