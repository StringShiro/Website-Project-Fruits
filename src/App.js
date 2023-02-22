import './App.css'
import Navbar from './components/navbar/navbar';
import Content from './components/pages/content';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Content/>}></Route>
        </Routes>
      </div>
    
    </>
  )
}

export default App;
