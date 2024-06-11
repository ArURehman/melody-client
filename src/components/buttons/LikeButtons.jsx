import useUserContext from '../../hooks/useUserContext';
import useAuthModal from '../../hooks/useAuthModal';
import { useEffect, useState } from "react";
import { checkLikedSongs, addLikedSong, removeLikedSong } from "../../services/likedSong";
import toast from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const LikeButtons = ({ songID }) => {

  const { user } = useUserContext();
  const authModal = useAuthModal();

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!user?.uid) {
        return;
    }
    try {
        checkLikedSongs(user.uid, songID).then((data) => {
            if (data && !data.empty) {
                setIsLiked(true);
            }
        });
    } catch (error) {
        toast.error('An error occured',{
            duration: 4000,
            position: 'bottom-right',
            className: 'bg-red-500 text-white px-6 py-4 border-0 rounded relative mb-4'
        });
    }
  }, [songID, user?.uid])

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  const handleLike = () => {
    if (!user || !user?.uid) {
        authModal.open();
        return;
    }
    if (isLiked) {
        removeLikedSong(user.uid, songID).then(() => {
            setIsLiked(false)
            toast.success('Song removed from liked songs',{
                duration: 4000,
                position: 'bottom-right',
                className: 'bg-green-500 text-white px-6 py-4 border-0 rounded relative mb-4'
            });
        });
    } else {
        addLikedSong(user.uid, songID).then(() => {
            setIsLiked(true)
            toast.success('Song added to liked songs',{
                duration: 4000,
                position: 'bottom-right',
                className: 'bg-green-500 text-white px-6 py-4 border-0 rounded relative mb-4'
            });
        });
    }
  }

  return (
    <button className="hover:opacity-75 transition" onClick={handleLike}>
        <Icon color={isLiked ? '#22c55e' : 'white'} size={25}/>
    </button>
  )
}

export default LikeButtons