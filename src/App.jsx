import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './Pages/Home';
import notFound from './Pages/notFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<notFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
