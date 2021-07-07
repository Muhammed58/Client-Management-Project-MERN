import {useForm} from 'react-hook-form';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./style.scss";
import { useHistory } from 'react-router-dom';

const Login = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();
    const [foundUser, setfoundUser] = useState(true)
    const [changePassword, setchangePassword] = useState("")
    const history = useHistory();

    //onSubmit Form
    const onSubmit = async(data) => {
        await axios.post('http://localhost:3000/register', data)
            .then(res => setfoundUser(res.data))
            .catch(err => console.log(err))
    }

    const handleChange = (event) =>{
        console.log(event.target.value);
    }

    const onClick = () => {
       if(!foundUser){
           setTimeout(() => {
               history.push('/')
           }, 100);
       }   
    }

    return (
        <div className="container">
            <div className="login">
            <h1><a href="http://localhost:3000/" rel="noreferrer" className="flip-animate" target="_blank">Ema<span data-hover="Nutrition">Nutrition</span></a></h1>
                {<p><span style={{color:'red'}} role='alert'> {!foundUser? 'This email is already registered!' : ''}</span></p>} 
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__group field">
                        <input {...register('name')} type="text" className="form__field" placeholder="name" name="name" id='name' required />
                        <label className="form__label">Name</label>
                    </div>
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
                    <div className="form__group field">
                        <input id='reEnterpassword' onChange={handleChange} aria-invalid={errors.password ? 'true' : 'false'} type="checkPassword" className="form__field" placeholder="Re-enter Password"  />
                        <label htmlFor="reEnterpassword" className="form__label">Re-enter Password</label>
                    </div>
                {<p><span style={{color:'green'}} role='alert'> {foundUser === 'success'? 'Account Created!' : ''}</span></p>} 
                    <div className="buttons">
                        <button className="blob-btn" onClick={onClick} >
                            REGISTER
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
                <p><a href="http://localhost:3000/login" className='btn btn-success' target="_blank" rel="noreferrer" >LOGIN</a></p>
  
            </div>
        </div>
    )
}

export default Login
