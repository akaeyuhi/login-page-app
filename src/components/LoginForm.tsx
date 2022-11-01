import React, { useCallback, useRef } from 'react';
import { useAppDispatch } from '../store';
import { loginUser } from '../features/actions/authActions';
import { AuthDto } from '../features/slices/authSlice';

export default function LoginForm() {
  const form = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();

  const submitHandler = useCallback(async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const formData = new FormData(form.current!);
    const arg: AuthDto = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      rememberMe: formData.get('remember') as string,
    };
    dispatch(loginUser(arg));
  }, []);

  return (
    <form className="main__login" ref={form} onSubmit={submitHandler}>
      <h2 className='main__welcome'>Welcome</h2>
      <input type='text' id="email" name="email" placeholder="Email" className="main__input"/>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        className="main__input"
      />
      <div className="main__checkbox-container control-group">
        <label className="control control-checkbox">
          Remember me
          <input type="checkbox" name="remember"/>
          <div className='control_indicator'/>
        </label>
      </div>
      <input type='submit' value='Login' className='main__submit' />
    </form>
  );
}
