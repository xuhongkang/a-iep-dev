'use client'
import { useState } from "react"
import { Link } from "@/navigation"
import { useRouter } from "@/navigation"
import { login, signup } from "@/api/UserAuthentication"

export default function UserLoginModal() {
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isSignup, setIsSetUp] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const router = useRouter();

    function openModal() {
        document.getElementById('userLoginModal').showModal()
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (isSignup) {
            try {   
                await signup(formData)
                setIsError(false)
                setIsSuccess(true);
                router.push('/portal');
            } catch (error) {
                setIsError(true);
                setFormData({
                    email: '',
                    password: ''
                });
            }
        } else {
            try {   
                await login(formData)
                setIsError(false)
                setIsSuccess(true);
                router.push('/portal');
            } catch (error) {
                setIsError(true);
                setFormData({
                    email: '',
                    password: ''
                });
            }
        }
    }

    return (
        <div>
            <button className="btn btn-block btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={openModal}>
                <h3>MyIEP Login</h3>
            </button>
            <dialog id="userLoginModal" className="modal">
                <div className="modal-box">
                    <p className="font-bold text-black">{isSignup ? "Sign Up with Your Email & Password" : "Enter Your Email & Password Below to Sign In"}</p>
                    {isError && (
                        <div role="alert" className="alert alert-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>
                            {isSignup ? "Account Already Exists, Please Sign In Instead" : "Incorrect Username or Password, Please Try Again"}
                        </span>
                        </div>
                    )}
                    {isSuccess && (
                        <div role="alert" className="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>
                            {isSignup ? "Login Successful! Redirecting to home..." : "Sign Up Successful! Welcome to AIEP..."}
                        </span>
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="flex-col items-center w-full h-full">
                        <label className="input input-bordered flex items-center gap-2 w-2/3 mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" name="email" value={formData.email} className="grow" placeholder="Email" onChange={handleChange} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-2/3 mt-2 mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" name="password" value={formData.password} className="grow" placeholder="Password" onChange={handleChange} />
                        </label>
                        <Link href="#" onClick={() => setIsSetUp(!isSignup)} className="font-semibold text-grey">
                            {isSignup ? "Already have an account? Click here to sign in" : "Don't have an account? Click here to create an account"}
                        </Link>
                        <button type='submit' className="btn btn-wide btn-primary btn-xs sm:btn-xs md:btn-sm lg:btn-md mt-3">
                            <h3 className="text-primary-content">{isSignup ? "Sign Up" : "Sign In"}</h3>
                        </button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}