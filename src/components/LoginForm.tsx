import React from 'react';

export default function LoginForm() {
  return (
    <form className="main__login">
      <h2 className='main__welcome'>Welcome</h2>
      <input type='text' id="email" name="email" />
      <input type='text' id="password" name="password" />
      <input type='checkbox' id="remember" name="remember">
        <label className='main__label'>Remember me</label>
      </input>
      <input type='submit' value='Login' className='main__submit' />
    </form>
  );
}
