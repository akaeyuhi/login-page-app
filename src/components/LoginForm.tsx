import React from 'react';

export default function LoginForm() {
  return (
    <form className="main__login">
      <h2 className='main__welcome'>Welcome</h2>
      <input type='text' id="email" name="email" placeholder="Email" className="main__input"/>
      <input
        type="text"
        id="password"
        name="password"
        placeholder="Password"
        className="main__input"
      />
      <div className='main__checkbox-container control-group'>
        <label className='control control-checkbox' htmlFor="remember">Remember me
          <input type="checkbox"/>
          <div className='control_indicator'/>
        </label>
      </div>
      <input type='submit' value='Login' className='main__submit' />
    </form>
  );
}
