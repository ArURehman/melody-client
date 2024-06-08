import ListItem from "../components/global/ListItem"

const Home = () => {
  return (
    <>
    <div className="mb-2">
      <h1 className="text-white text-3xl font-semibold">Welcome Back!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
        <ListItem image="../../../public/liked.jpg" name="Liked Songs" href='liked'/>
      </div>
    </div>
    <div className="mt-4 mb-7">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">Newest Songs</h1>
      </div>
      <div>
        List of Songs
      </div>
    </div>
    </>
  )
}

export default Home