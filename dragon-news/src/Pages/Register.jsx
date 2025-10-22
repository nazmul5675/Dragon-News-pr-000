import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser, notify } = use(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const bool = e.target.bool.checked;
        // console.log(name, photoUrl, email, password, bool);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photoUrl })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoUrl })
                    })
                    .catch((error) => {
                        // console.log(error);
                        setUser(user)
                    });
                notify('New User Created Successfully')

            })
            .catch(er => {
                const errorCode = er.code;
                const errorMessage = er.message;
                notify(errorMessage, errorCode)
            })
    }
    return (
        <div>
            <title>Dragon News | Registration</title>
            <div className="hero bg-base-200 h-[800px]">
                <div className="hero-content flex-col ">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h2 className='font-bold text-3xl py-3 text-center'>Register Your Account</h2>
                            <div className='border border-black/10 my-5'></div>
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset">
                                    <label className="label">Your Name</label>
                                    <input name="name" type="text" className="input" placeholder="Enter Your Name" />
                                    <label className="label">Photo Url</label>
                                    <input name="photoUrl" type="text" className="input" placeholder="Enter Your Photo Url" />
                                    <label className="label">Email</label>
                                    <input name="email" type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input name="password" type="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover text-black/50"> <input name="bool" type="checkbox" defaultChecked className="checkbox checkbox-xs mr-3" />Accept <span className='font-bold'>Terms & Condition</span></a></div>
                                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                            </form>
                            <p className='text-center font-semibold'>Already Have An Account ? <Link to="/auth/login" className='text-red-500'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;