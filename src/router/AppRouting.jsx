import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Liked from '../pages/Liked';
import routes from './Routes';

const AppRouting = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}> 
                <Route path={routes.HOME} element={<Home />} /> 
                <Route path={routes.SEARCH} element={<Search />} />
                <Route path={routes.LIKED} element={<Liked />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouting