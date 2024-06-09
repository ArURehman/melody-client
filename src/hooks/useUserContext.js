import { useContext } from 'react';
import { UserContext } from '../contexts/UserContextProvider'

const useUserContext = () => {
    const { user, setUser } = useContext(UserContext);
    
    return { user, setUser };
}

export default useUserContext;