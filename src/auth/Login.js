import React from 'react'

const Login = (props) => {
    const {email,setemail,password,setpassword,hasaccount,handleLogin,handleSignUp,sethasaccount,emailerror,passworderror} = props
    return (
        <div>
            <div className='loginContainer'>
                <label>Username</label>
                <input type="text" autoFocus required 
                value={email} 
                onChange={(e)=>setemail(e.target.value)}/>
                <p className="errorMsg">{emailerror}</p>
                <label>Password</label>
                <input type="password"  required 
                value={password} 
                onChange={(e)=>setpassword(e.target.value)}/>
                <p className="errorMsg">{passworderror}</p>
                <div className="btnContainer">
                    {hasaccount?(
                        <>
                        <button style={{backgroundColor:'green', borderRadius:'20%'}} onClick={handleLogin}>Sign in</button>
                        <p>Don't have an account?<span style={{color:'cyan'}} onClick={()=>sethasaccount(!hasaccount)}> Sign up</span></p>
                        </>
                    ):(
                        <>
                        <button style={{backgroundColor:'green', borderRadius:'20%'}} onClick={handleSignUp}>Sign up</button>
                        <p>Already have an account ?<span style={{color:'cyan'}} onClick={()=>sethasaccount(!hasaccount)}> Sign in</span></p>
                        </>

                    )}
                </div>
            </div>
        </div>
    )
}

export default Login
