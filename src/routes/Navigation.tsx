import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
import logo from '../logo.svg';
import { Lix } from './Components/Lix';
import { routes } from './routes';
import { RouteData } from './types/types';

const RS = ({path, Component} : RouteData) =>  (<Route key={path} path={path} element={<Component/>}/>)

export const Navigation = () => {
  // el Suspense es para indicarle a react que debe de esperar, mientras lo haces has otra cosa... (un componete de carga o loading)
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
              {routes.map(ruta => <Lix element={ruta} /> )}
          </ul>
        </nav>

          <Routes>
              {routes.map(ruta => RS(ruta))}
              <Route path="/*" element={<>404 Not Found</>}/>
          </Routes>

      </div>
    </BrowserRouter>
  );
}