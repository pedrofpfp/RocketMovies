import { Routes, Route } from 'react-router-dom';

import { Login } from '../Pages/Login';
import { New } from '../Pages/New';


export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/New" element={<New />} />
    </Routes>
  )
}