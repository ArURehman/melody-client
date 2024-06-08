
import { Button } from "@mui/material"
import { FaGoogle } from "react-icons/fa6";

const GoogleSignInBtn = () => {
  return (
    <Button variant="contained" sx={{
        mb: 2,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',  
        backgroundColor: '#333333', 
        border: '2px solid #1F1F1F', 
        color: '#FFFFFF',  
        borderRadius: '4px',   
        transition: 'background-color 0.2s ease-in-out',   
        '&:hover': {
        backgroundColor: '#222222',  
        },
    }} 
    onClick={() => {}} className="flex items-center justify-center gap-x-4">
        <FaGoogle />
        Sign in with Google
    </Button>
  )
}

export default GoogleSignInBtn