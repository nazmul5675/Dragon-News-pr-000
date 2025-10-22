import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const LoginPage = () => {
    const { signInExistingUser } = use(AuthContext);
    const handleSignIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInExistingUser(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage)
            });
    }
    return (
        <div>
            <div className="hero bg-base-200 h-[800px]">
                <div className="hero-content flex-col ">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h2 className='font-bold text-3xl py-3 text-center'>Login Your Account</h2>
                            <form onSubmit={handleSignIn}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input name='email' type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input name='password' type="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                            <p className='text-center font-semibold'>Don't Have An Account ? <Link to="/auth/register" className='text-red-500'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;