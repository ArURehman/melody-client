import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Liked from '../pages/Liked';
import routes from './Routes';
import useUserContext from '../hooks/useUserContext';

const AppRouting = () => {
  const { user } = useUserContext();

  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}> 
                <Route path={routes.HOME} element={<Home />} /> 
                <Route path={routes.SEARCH} element={<Search />} />
                <Route path={routes.LIKED} element={user ? <Outlet /> : <Navigate to={routes.HOME} />} >
                  <Route path={routes.LIKED} element={<Liked />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouting