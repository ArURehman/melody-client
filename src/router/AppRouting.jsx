import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Search from '../pages/Search';
import routes from './Routes';

const AppRouting = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}> 
                <Route path={routes.HOME} element={<Home />} /> 
                <Route path={routes.SEARCH} element={<Search />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouting