import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import routeNames from './RouteNames';

const AppRouting = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}> 
                <Route path={routeNames.HOME.path} element={<Home />} /> 
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouting