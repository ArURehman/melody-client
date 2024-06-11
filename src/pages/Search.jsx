import { useSearchParams } from "react-router-dom";
import SearchInput from "../components/global/SearchInput";
import { getSongByTitle } from "../services/addSong"
import { useState } from "react"
import SearchContent from "../components/global/SearchContent";

const Search = () => {

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [songs, setSongs] = useState([]);

  getSongByTitle(searchParams.get('title')).then((data) => {
    console.log(data);
    setSongs(data);
  });

  return (
    <>
        <div className="mb-2 flex flex-col gap-y-6">
            <h1 className="text-white font-semibold text-3xl">Search</h1>
            <SearchInput />
        </div>
        <SearchContent songs={songs} />
    </>
  )
}

export default Search