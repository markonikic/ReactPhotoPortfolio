import React from 'react';
import UploadForm from '../comps/UploadForm';
import Title from '../comps/Title';
import LoginTitle from '../comps/LoginTitle';


const Login = (props) => {

    return (
        <section className="login">
            <LoginTitle />
            <UploadForm />
        </section>
    )
}

export default Login;