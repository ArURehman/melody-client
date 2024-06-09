import Input from "../global/Input"
import { useState } from "react"
import { auth } from "../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

const Login = ({ setShowLogin }) => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
        toast.error(
            'Please fill in all fields',
            {
                duration: 4000,
                position: 'bottom-right',
                className: 'bg-red-500 text-white font-sans font-semibold border border-red-600 rounded-md p-2 shadow-lg',
            }
        );
        return;
    }
    const loading = toast.loading('Logging in...', {
        duration: 0,
        position: 'bottom-right',
        className: 'bg-gray-500 text-white font-sans font-semibold border border-gray-600 rounded-md p-2 shadow-lg',
    });
    toast.promise(
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            toast.dismiss(loading);
            const user = userCredential.user;
            const token = user.accessToken;
            localStorage.setItem('token', token);
            toast.success(
                `Welcome back ${user.displayName}!`,
                {
                    duration: 4000,
                    position: 'bottom-right',
                    className: 'bg-gray-500 text-white font-sans font-semibold border border-gray-600 rounded-md p-2 shadow-lg',
                }
            );
        })
        .catch((error) => {
            toast.dismiss(loading);
            toast.error(
                error.message.replace('Firebase: ', ''),
                {
                    duration: 4000,
                    position: 'bottom-right',
                    className: 'bg-red-500 text-white font-sans font-semibold border border-red-600 rounded-md p-2 shadow-lg',
                }
            );
        })
    );
  }

  return (
    <>
    <form>
        <div className="mb-4">
            <Input label="email" text="Email" type="email" placeholder="Email" state={email} setState={setEmail}/>
        </div>
        <div className="mb-8">
            <Input label="password" text="Password" type="password" placeholder="******************" state={password} setState={setPassword}/>
        </div>
        <div className="flex items-center justify-center">
            <button
            onClick={handleLogin}
            className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full border border-primary-700 bg-neutral-700 hover:bg-neutral-800 focus:shadow-outline transition"
            type="button"
            >
            Login
            </button>
        </div>
    </form>
    <div className="text-center mt-4">
        <button
        className="inline-block align-baseline font-bold text-sm text-primary-500 hover:text-primary-800 hover:opacity-75 transition"
        onClick={() => setShowLogin(false)}
        >
        {`Don't have an account? Sign Up`}
        </button>
    </div>
    </>
  )
}

export default Login