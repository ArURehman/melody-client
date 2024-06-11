import { useState } from "react";
import useUserContext from "../hooks/useUserContext"
import { getLikedSongs } from "../services/likedSong"
import LikedContent from "../components/global/LikedContent";

const Liked = () => {
  
  const { user } = useUserContext();
  const [songs, setSongs] = useState([]);

  getLikedSongs(user?.uid).then((data) => {
    setSongs(data);
  })

  return (
    <div className="mt-20">
        <div className="flex flex-col items-center md:flex-row gap-x-5">
            <div className="relative h-24 w-24 lg:h-32 lg:w-32">
                <img src="/liked.jpg" alt="Playlist" className="object-cover"/>
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                <p className="text-sm hidden md:block font-semibold">Playlist</p>
                <h1 className="text-white text-2xl sm:text-3xlxl lg:text-4xl font-bold">Liked Songs</h1>
            </div>
        </div>
        <LikedContent songs={songs} />
    </div>
  )
}

export default Liked