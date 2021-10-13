import React from 'react'

const Login = (props) => {
    const {email,setemail,password,setpassword,hasaccount,handleLogin,handleSignUp,sethasaccount,emailerror,passworderror} = props
    return (
        <div>
            <div className='maincontainer'>
            <div className='loginContainer'>
                <label className='emaillabel' style={{fontFamily:'sans-serif', fontSize:'20px'}}>USERNAME</label>
                <input className='email' type="text" autoFocus required style={{fontFamily:'sans-serif', fontSize:'15px'}}
                value={email} 
                onChange={(e)=>setemail(e.target.value)}/>
                <p className="errorMsg">{emailerror}</p>
                <label className='passwordlabel' style={{fontFamily:'sans-serif', fontSize:'20px'}}>PASSWORD</label>
                <input type="password"  required className='password' 
                value={password} 
                onChange={(e)=>setpassword(e.target.value)}/>
                <p className="errorMsg">{passworderror}</p>
                <div className="btnContainer">
                    {hasaccount?(
                        <>
                        <button style={{backgroundColor:'green', width:'100px',borderRadius:'20%'}} onClick={handleLogin}>Sign in</button>
                        <p className='signup'>Don't have an account?<span style={{color:'cyan'}} onClick={()=>sethasaccount(!hasaccount)}> Sign up</span></p>
                        </>
                    ):(
                        <>
                        <button style={{backgroundColor:'green', borderRadius:'20%', width:'100px'}} onClick={handleSignUp}>Sign up</button>
                        <p className='signup'>Already have an account ?<span style={{color:'cyan'}} onClick={()=>sethasaccount(!hasaccount)}> Sign in</span></p>
                        </>

                    )}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login
