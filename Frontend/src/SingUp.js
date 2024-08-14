import React, { useState } from 'react'
import './SignUpLogin.css'

export const SingUp = () => {
    const [action] = useState("Sign Up");
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>

                    <input type='text' placeholder='First name' />
                </div>
                <div className='input'>

                    <input type='text' placeholder='Last name' />
                </div>
                <div className='input'>

                    <input type='email' placeholder='Email' />
                </div>
                <div className='input'> <img src='' alt='' />
                    <input type='password' placeholder='password' />
                </div>
                <div className='input'>

                    <input type='password' placeholder='confirm password' />
                </div>
            </div>
            <div className='submit-container'>

                <div className={action === "Login" ? "Submit gray" : "submit"}  >Sign up</div>

            </div>
        </div>
    )
}
