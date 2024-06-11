import PlayerContent from "../components/global/PlayerContent";
import usePlayer from "../hooks/usePlayer"

const PlayerProvider = () => {

  const player = usePlayer();

  if (!player || !player.activeSong) {
    return null;
  }

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
        <PlayerContent key={player.activeSong?.id} song={player.activeSong} />
    </div>
  )
}

export default PlayerProvider