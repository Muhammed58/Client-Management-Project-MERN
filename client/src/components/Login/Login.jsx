import {useForm} from 'react-hook-form';
import axios from 'axios';
import React, { useState } from 'react'
import "./style.scss";
import { useHistory } from 'react-router-dom';

const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const [redirect, setRedirect] = useState()
    const history = useHistory();
    const onSubmit = (data) => {
        axios.post('http://localhost:3000/login', data)
            .then(res => {
                if(res.data){
                    setRedirect(true)
                }else if(!res.data){
                    setRedirect(false)
                }
            })
            .catch(err => console.log(err))
    }
    const onClick = async() => {
        if(redirect){
            await history.push('/clients')
        } 
    }
    return (
        <div className="container">
            <div className="login">
            <h1><a href="http://https://dietatian-management-app.herokuapp.com:8080/" rel="noreferrer" className="flip-animate" target="_blank">Ema<span data-hover="Nutrition">Nutrition</span></a></h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__group field">
                        <input {...register('email')} type="email" className="form__field" placeholder="email" name="email" id='email' required />
                        <label className="form__label">Email</label>
                    </div>
                    <div className="form__group field">
                        <input id='password' aria-invalid={errors.password ? 'true' : 'false'}  {...register("password", {required: true, minLength: 8 })} type="password" className="form__field" placeholder="Password"  />
                        {errors.password && errors.password.type === "required" && (<p><span role="alert">This is required!</span></p>)}
                        {errors.password && errors.password.type === "minLength" && (<p><span role="alert">Min length exceeded</span></p>)}
                        <label htmlFor="password" className="form__label">Password</label>
                    </div>
                    {<p><span style={{color:'red'}} role='alert'> {redirect === false ? 'Invalid Password or Email. Try Again!' : ' '}</span></p>}   
                    <div className="buttons">
                        <button className="blob-btn" onClick={onClick}>
                            LOGIN
                            <span className="blob-btn__inner">
                            <span className="blob-btn__blobs">
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                                <span className="blob-btn__blob"></span>
                            </span>
                            </span>
                        </button>
                        <br/>

                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                            </filter>
                        </defs>
                        </svg>
                    </div>
                </form>
                <p><a href="http://localhost:3000/register" className='btn btn-success' target="_blank" rel="noreferrer" >Create Account!</a></p>
            </div>
        </div>
    )
}

export default Login
