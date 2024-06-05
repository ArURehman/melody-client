import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import routeNames from './RouteNames';

const AppRouting = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={routeNames.HOME} element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouting