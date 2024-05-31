'use client'
export default function UserLoginModal() {

    function openModal() {
        document.getElementById('userLoginModal').showModal()
    }

    return (
    <div>
        <button className="btn btn-block btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={openModal}>
            <h3 className="text-primary-content">MyIEP Login</h3>
        </button>
        <dialog id="userLoginModal" className="modal">
        <div className="modal-box flex flex-col items-center w-1/2 h-1/2">
            <p className="font-bold text-black">Enter your phone number & password to sign in</p>
            <label className="input input-bordered flex items-center gap-2 w-2/3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                <input type="text" className="grow" placeholder="Username" />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-2/3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input type="password" className="grow" placeholder="Password" />
            </label>
            <p className="font-semibold text-grey">Don&apos;t have an account? Click here to create an account</p>
            <button className="btn btn-wide btn-primary btn-xs sm:btn-xs md:btn-sm lg:btn-md" onClick={openModal}>
                <h3 className="text-primary-content">Sign In</h3>
            </button>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
        </dialog>
    </div>)
}