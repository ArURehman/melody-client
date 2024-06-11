import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import LikeButtons from "../buttons/LikeButtons"
import MediaItem from "./MediaItem"
import { BsPauseFill, BsPlayFill } from 'react-icons/bs'
import { HiSpeakerXMark, HiSpeakerWave } from 'react-icons/hi2'
import Slider from "./Slider";
import usePlayer from "../../hooks/usePlayer";
import { useEffect, useState } from "react";
import useSound from 'use-sound'

const PlayerContent = ({ song }) => {

  const player = usePlayer();
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  const onPlayNext = () => {
    if (player.songs.length === 0) {
      return;
    }
    const currentIndex = player.songs.findIndex((s) => s.id === player.activeSong.id);
    const nextIndex = player.songs[currentIndex + 1];
    if (!nextIndex) {
      return player.setActiveSong(player.songs[0]);
    }
    player.setActiveSong(nextIndex);
  }

  const onPlayPrevious = () => {
    if (player.songs.length === 0) {
      return;
    }
    const currentIndex = player.songs.findIndex((s) => s.id === player.activeSong.id);
    const previousSong = player.songs[currentIndex - 1];
    if (!previousSong) {
      return player.setActiveSong(player.songs[player.songs.length - 1]);
    }
    player.setActiveSong(previousSong);
  }

  const [play, {pause, sound}] = useSound(song.song, {
    volume: volume,
    onplay: () => setIsPlaying(true),
    onended: () => {
        setIsPlaying(false);
        onPlayNext();
    },
    onpause: () => setIsPlaying(false),
    format: ['mp3'],
  })

  useEffect(() => {
    sound?.play()
    return sound?.unload();
  }, [sound])

  const handlePlay = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  }

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
        <div className="flex w-full justify-start">
            <div className="flex items-center gap-x-4">
                <MediaItem data={song} />
                <LikeButtons song={song} />
            </div>
        </div>
        <div className="flex md:hidden col-auto w-full justify-end items-center">
            <div className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer bg-white p-1" onClick={handlePlay}>
                <Icon size={30} className="text-black" />
            </div>
        </div>
        <div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6">
            <AiFillStepBackward size={30} className="text-neutral-400 cursor-pointer hover:text-white transition" onClick={onPlayPrevious} />
            <div onClick={handlePlay} className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer">
                <Icon size={30} className="text-black" />
            </div>
            <AiFillStepForward size={30} className="text-neutral-400 cursor-pointer hover:text-white transition" onClick={onPlayNext} />
        </div>
        <div className="hidden md:flex w-full justify-end pr-2">
            <div className="flex items-center gap-x-2 w-[120px]">
                <VolumeIcon size={34} className="text-white cursor-pointer" onClick={toggleMute} />
                <Slider value={volume} onChange={(value) => setVolume(value)} />
            </div>
        </div>
    </div>
  )
}

export default PlayerContent