import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    // useTitle('Register');
    const { createUser, updateUserProfile } = useAuth();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const id = form.id.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(id,name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user);
                updateUserProfile(name)
                    .then(() => {
                        const newUser = { name: name, email: email, varsityId: id, role: "user"}
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers:{
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                form.reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/login');
                            }
                        })
                        navigate('/login');
                    })
                    .catch(error => {
                        console.log(error.message);
                        setError(error.message);
                    })
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Student ID</span>
                                </label>
                                <input type="text" name="id" placeholder="enter your id here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name="name" placeholder="enter your full name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Varsity email</span>
                                </label>
                                <input type="email" name="email" placeholder="enter varsity mail" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-blue-600 hover:bg-blue-700">Register</button>
                            </div>
                            <label className="">Already registered?
                                <Link to={'/login'} href="#" className="label-text-alt link link-hover text-success" > Login now</Link>
                            </label>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;