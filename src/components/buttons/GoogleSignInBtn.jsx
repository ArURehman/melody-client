import { Button } from "@mui/material"
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../config/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import addUser from '../../services/addUser';

const GoogleSignInBtn = () => {
  
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        addUser(user.uid, user.displayName, user.email).then(() => {
          const token = credential.accessToken;
          localStorage.setItem('token', token);
          toast.success(
            `Welcome ${user.displayName}!`,
            {
                duration: 4000,
                position: 'bottom-right',
                className: 'bg-gray-500 text-white font-sans font-semibold border border-gray-600 rounded-md p-2 shadow-lg',
            }
          );
        })
        .catch((error) => {
          console.log(error);
          toast.error(
            error,
            {
                duration: 4000,
                position: 'bottom-right',
                className: 'bg-red-500 text-white font-sans font-semibold border border-red-600 rounded-md p-2 shadow-lg',
            }
          );
          return;
        });
      })
      .catch((error) => {
        toast.error(
            error.message,
            {
                duration: 4000,
                position: 'bottom-right',
                className: 'bg-red-500 text-white font-sans font-semibold border border-red-600 rounded-md p-2 shadow-lg',
            }
        );
      });  
  }

  return (
    <Button variant="contained" sx={{
        mb: 2,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',  
        backgroundColor: '#333333', 
        border: '1px solid #c0c1c2', 
        color: '#FFFFFF',  
        borderRadius: '50px',   
        transition: 'background-color 0.2s ease-in-out',   
        '&:hover': {
        backgroundColor: '#222222',  
        },
    }} 
    onClick={handleGoogleSignIn} className="flex items-center justify-center gap-x-4">
        <FcGoogle />
        <span className="normal-case ml-1">Continue with Google</span>
    </Button>
  )
}

export default GoogleSignInBtn