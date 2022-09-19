import React from 'react'

import styled from "styled-components"
// import "normalize.css"
import team from "./image/team.jpg";




const Style = styled.button`
width: 1440px;
height: 1024px;
background: #FFFFFF;
border-color: white;
display: flex;

.container {
  width: 613px;
  height: 1024px;
}
.div1 {
  display: flex;
}
.div2 {
  display: flex;
}
.f {
  height: 67px;
width: 59px;
margin-left: 61px;
font-family: Roboto;
font-weight: bold;
font-style: normal;
font-size: 64px;
font-weight: 400;
line-height: 75px;
letter-spacing: -0.015em;
color: #FF9900;
}
.mard {
  width: 463px;
height: 76px;
margin-left: -141px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 75px;
letter-spacing: -0.015em;
color: #000000;
}
.login {
  width: 162px;
height: 84px;
margin-top: 48px;
margin-left: 77px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 42px;
letter-spacing: -0.015em;
color: #000000;
}
.cred {
  width: 508px;
height: 84px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
letter-spacing: -0.015em;
color: #6A6A6A;
margin-left: 110px;
text-align: left;
margin-top: -75px;
}
.email {
  width: 70px;
height: 16px;
font-family: 'Roboto';
font-style: normal;
font-weight: bold;
font-weight: 500;
font-size: 14px;
line-height: 16px;
margin-left: -327px;
margin-bottom: 20px;
letter-spacing: -0.015em;
color: #565656;
}
.pass {
  position: absolute;
width: 61px;
height: 16px;
margin-top: 27px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.015em;
color: #565656;
}
.box {
  width: 451px;
height: 40px;
margin-left: 64px;
margin-bottom: 20px;
margin-top: 10px;
background: #FFFFFF;
text-align: left;
border: 2px solid #DFDFDF;
border-radius: 15px;
}
.b {
  width: 21px;
height: 22px;
background: #FFFFFF;
border: 2px solid #DFDFDF;
border-radius: 5px;
margin-left: 114px;
}
.keep {
  width: 120px;
height: 38px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16px;
letter-spacing: -0.015em;
color: #6A6A6A;
margin-left: 6px;
margin-top: 15px;
}
.button {
  width: 441px;
height: 44px;
background: #FFA834;
border: 2px solid #FFA834;
border-radius: 15px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
align-items: center;
text-align: center;
letter-spacing: -0.015em;
color: #FFFFFF;
}
.dont {
  width: 217px;
height: 38px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 18px;
letter-spacing: -0.015em;
letter-spacing: -0.015em;
margin-left: 200px;
}
.forget {
  width: 130px;
height: 38px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
margin-left: 235px;
letter-spacing: -0.015em;
color: #FF9900;
}
.background {
  width: 727px;
height: 1024px;
background: #FF9900;
}
.img {
  width: 507px;
height: 325px;
margin-top: 140px;
margin-left: 50px;
}
.best {
  height: 117px;
width: 503px;
font-family: Roboto;
font-size: 27px;
font-weight: 500;
line-height: 32px;
letter-spacing: -0.015em;
text-align: left;
color: #FFFFFF;
margin-left: 200px;
}
`
 


const Mard = () => {
  return (
    <Style>
      <div className='container'>
         <div className='div1'>
           <p className='f'>F</p>
           <p className='mard'>MARD</p>
         </div>
         <div>
           <p className='login'>Log in</p>
           <p className='cred'>Log in with your credentials you entered during <br/>
             your registration.</p>
         </div>
         <div>
            <label htmlFor='email' className='email'>Your-email</label><br/>
            <input placeholder='name@domain.com' className='box'/>
          </div>
          <div>
            <label htmlFor='name' className='email'>Password</label><br/>
            <input className='box' placeholder='at least 8 characters'/>
          </div>
          <div className='div2'>
            <p className='b'></p>
            <p className='keep'>Keep me logged in</p>
          </div>
          <button type='submit' className='button'>Log in</button>
        <p className='dont'>Don't have an account? <span>Sign up</span></p>
        <p className='forget'>Forgot password?</p>
      </div>
      <div className='background'>
      <img src={team} alt="A table full of delicious food!" className='img' />
        <p className='best'>The best preparation for tomorrow <br/>
           is doing your best today. <br/>
           Let’s start with vacanxe.</p>
      </div>
    </Style>
  )
}

export default Mard