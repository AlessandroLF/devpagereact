

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
                if (res.rowCount){
                    alert('Success!');
                }
                props.modal(false);
            }
            else{
                const detail = res.err.detail;
                const key = detail.split('(')[1].split(')')[0];
                const val = detail.split('(')[2].split(')')[0];
                alert(key + ': ' + val + ' is already registred, plase choose another one');
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
        props.modal(false);
        alert(JSON.stringify(res));
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