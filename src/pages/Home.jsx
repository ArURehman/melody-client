import ListItem from "../components/global/ListItem"
import PageContent from "../components/global/PageContent";
import { getSongs } from "../services/addSong";
import { useState } from "react";

export const revalidate = 0;

const Home = () => {

  const [songs, setSongs] = useState([])
  getSongs().then(res => {
    setSongs(res)
  })

  return (
    <>
      <div className="mb-2">
        <h1 className="text-white text-3xl font-semibold">Welcome Back!</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
          <ListItem image="/liked.jpg" name="Liked Songs" href='liked'/>
        </div>
      </div>
      <div className="mt-4 mb-7">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest Songs</h1>
        </div>
        <div>
          <PageContent songs={songs} />
        </div>
      </div>
    </>
  )
}

export default Home