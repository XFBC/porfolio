import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Links from './pages/links'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/link" element={<Links />} />
      </Routes>
    </BrowserRouter>
  )
}
