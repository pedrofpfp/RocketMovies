import { Routes, Route } from 'react-router-dom'


import { Home } from '../Pages/Home';
import { Perfil } from '../Pages/Perfil';
import { MoviePrev } from '../Pages/MoviePrev';
import { CreateMovie } from '../Pages/CreateMovie';


export function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/MoviePrev" element={<MoviePrev />} />
        <Route path="/CreateMovie" element={<CreateMovie />} />
      </Routes>
    )
  }