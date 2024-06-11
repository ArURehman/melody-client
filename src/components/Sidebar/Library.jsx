import { TbPlaylist } from "react-icons/tb"
import { AiOutlinePlusCircle } from "react-icons/ai"
import useAuthModal from '../../hooks/useAuthModal'
import useUserContext from "../../hooks/useUserContext";
import useUploadModal from "../../hooks/useUploadModal";
import MediaItem from "../global/MediaItem";
import useOnPlay from '../../hooks/useOnPlay';

const Library = ({ songs }) => {

  const { open } = useAuthModal();
  const { user } = useUserContext();
  const uploadModal = useUploadModal();

  const onPlay = useOnPlay(songs);

  const handleClick = () => {
    if (!user) {
      open();
    }

    return uploadModal.open();
  }

  return (
    <div className="flex flex-col">
        <div className="flex justify-between items-center px-5 pb-2">
            <div className="inline-flex items-center gap-x-2">
                <TbPlaylist size={26} className="text-neutral-400"/>
                <span className="text-md font-medium text-neutral-400">Your Library</span>
            </div>
            <AiOutlinePlusCircle size={20} className="text-neutral-400 cursor-pointer hover:text-white transition" onClick={handleClick}/>
        </div>
        <div className="flex flex-col gap-y-2 mt-4 px-3">
            {songs.map((song) => (
                <MediaItem key={song.id} data={song} handleClick={(data) => {
                    onPlay(data);
                }}/>
            ))}
        </div>
    </div>
  )
}

export default Library