import Input from "../global/Input"
import { useState } from "react"
import { auth } from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import addUser from '../../services/addUser'

const Signup = ({ setShowLogin }) => {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (username === '' || email === '' || password === '') {
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
    const loading = toast.loading('Signing up...', {
        duration: 0,
        position: 'bottom-right',
        className: 'bg-gray-500 text-white font-sans font-semibold border border-gray-600 rounded-md p-2 shadow-lg',
    });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.dismiss(loading);
        updateProfile(auth.currentUser, {
            displayName: username,
        });
        const user = userCredential.user;
        addUser(user.uid, username, email)
        .then(() => {
            const token = user.accessToken;
            localStorage.setItem('token', token);
            toast.success(
                `Welcome ${username}!`,
                {
                    duration: 4000,
                    position: 'bottom-right',
                    className: 'bg-gray-500 text-white font-sans font-semibold border border-gray-600 rounded-md p-2 shadow-lg',
                }
            );
        })
        .catch((error) => {
            toast.error(
                error,
                {
                    duration: 4000,
                    position: 'bottom-right',
                    className: 'bg-red-500 text-white font-sans font-semibold border border-red-600 rounded-md p-2 shadow-lg',
                }
            );
            signOut(auth)
            .then(() => {
                localStorage.removeItem('token');
            })
            return;
        });
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
      });
  }

  return (
    <>
    <form>
        <div className="mb-4">
            <Input label="username" text="Username" type="text" placeholder="Username" state={username} setState={setUsername}/>
        </div>
        <div className="mb-4">
            <Input label="email" text="Email" type="email" placeholder="Email" state={email} setState={setEmail}/>
        </div>
        <div className="mb-8">
            <Input label="password" text="Password" type="password" placeholder="******************" state={password} setState={setPassword}/>
        </div>
        <div className="flex items-center justify-center">
            <button
            onClick={handleSignup}
            className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full border border-primary-700 bg-neutral-700 hover:bg-neutral-800 focus:shadow-outline transition"
            type="button"
            >
            Sign Up
            </button>
        </div>
    </form>
    <div className="text-center mt-4">
        <button
        className="inline-block align-baseline font-bold text-sm text-primary-500 hover:text-primary-800 hover:opacity-75 transition"
        onClick={() => setShowLogin(true)}
        >
        {`Already have an account? Login`}
        </button>
    </div>
    </>
  )
}

export default Signup