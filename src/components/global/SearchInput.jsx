import { createSearchParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import useDebounce from "../../hooks/useDebounce";
import Input from './Input';
import routes from '../../router/Routes';

const SearchInput = () => {
    
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    navigate({
        pathname: routes.SEARCH,
        search: createSearchParams({
            title: debouncedValue,
        }).toString()
    });
  }, [debouncedValue, navigate])

  return (
    <>
        <Input label="query" placeholder='What do you want to listen to?' type='text' state={value} setState={setValue} styles='border-none bg-neutral-600' />
    </>
  )
}

export default SearchInput