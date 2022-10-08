import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Posts from './component/Posts';
import Nav from './component/Nav';

import {BrowserRouter as AllRoutes , Routes , Route , Link} from 'react-router-dom';
function App() {
  return (
    <>
     
     <AllRoutes>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/posts' element={<Posts />} />
        <Route />
      </Routes>



     </AllRoutes>
     
     
    </>
  );
}

export default App;
