import React, { useState } from 'react'
import './SignUpLogin.css'

export const Login = () => {
    const [action] = useState("Login");
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
               
                <div className='input'>

                    <input type='email' placeholder='Email' />
                </div>
                <div className='input'> 
                    <input type='password' placeholder='password' />
                </div>            

            </div>
            <div className='forget-password'> Forget password? <span> Click here !</span>

            </div>


            <div className='submit-container'>

                <div className={action === "Login" ? "submit gray" : "submit "}  >Login</div>

                <div className={action === "Sign Up" ? "submit gray" : "submit"}  >Sign Up</div>

            </div>
        </div>
    )
}
