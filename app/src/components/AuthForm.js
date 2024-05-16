'use client'
import React, { useState, useTransition } from 'react';
import { login, register, getSessionData } from './API.js';
import {useRouter, usePathname, getURLWithSearchParams} from '@/navigation';
import { useLocale } from 'next-intl';

export default function AuthForm({welcome1, welcome2, welcome3, loginMessage, description1, signUpMessage, description2, usernameText, passwordText, loginText, registerText}) {
  const [accessCode, setAccessCode] = useState('')
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  //const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const currentLocale = useLocale();

  const handleAccess = async (e) => {
    e.preventDefault();
    navigateToWorkspace(accessCode)
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userId = await login(loginUsername, loginPassword);
      console.log(userId)
      navigateToDashboard(userId)
    } catch (error) {
      alert('Username or Password is Incorrect, Please Try Again!');
    }
  };

  function navigateToWorkspace(accessCode) {
    router.replace(getURLWithSearchParams('/workspace', 'accessCode', accessCode), {locale: currentLocale});
  }

  function navigateToDashboard(userId) {
    router.replace(getURLWithSearchParams('/dashboard', 'userId', userId), {locale: currentLocale});
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(registerUsername, registerPassword);
      const userId = await login(registerUsername, registerPassword);
      navigateToDashboard(userId)
    } catch (error) {
      alert('This Username Has Been Registered, Please Login or Switch Usernames!');
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{welcome1}</h1>
            <p className="py-6">{welcome2}</p>
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
              <input type="text" className="grow" onChange={(e) => setAccessCode(e.target.value)}/>
            </label>
            <button className="btn btn-primary" onClick={handleAccess}>{welcome3}</button>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">{loginMessage}</h1>
            <p className="py-6">{description1}</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">{usernameText}</span>
                </label>
                <input type="text" placeholder="username" required className="input input-bordered" onChange={(e) => setLoginUsername(e.target.value)}/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">{passwordText}</span>
                </label>
                <input type="password" placeholder="password" required className="input input-bordered" onChange={(e) => setLoginPassword(e.target.value)} />
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary submit">{loginText}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">{signUpMessage}</h1>
            <p className="py-6">{description2}</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">{usernameText}</span>
                </label>
                <input type="text" placeholder="username" required className="input input-bordered" onChange={(e) => setRegisterUsername(e.target.value)}/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">{passwordText}</span>
                </label>
                <input type="password" placeholder="password" required className="input input-bordered" onChange={(e) => setRegisterPassword(e.target.value)} />
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-secondary submit">{registerText}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
