import Navbar from './Components/Navbar';
/* PAGES*/
import Acceuil from './pages/Acceuil';
import Login from './pages/Login';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cours from './pages/Cours';
import Signup from './pages/Signup';
import { useAuthContext } from './context/hooks/useAuthContext';
import Leson from './pages/Leson';




function App() {
  const { user } = useAuthContext()
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route path='/' element={<Acceuil/>}></Route>
            <Route path='/cours' element={user ? <Cours/> : <Navigate to='/login'/>}></Route>
            <Route path='/contacter-nous-ici' element={user ? <Contact/> : <Navigate to='/login'/>}></Route>
            <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/'/>}></Route>
            <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}></Route>
            <Route path='/cours/leson' element={<Leson/>}> </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
