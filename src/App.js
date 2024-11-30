import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from './components/Contactus';
import Home from './components/Home';
import Resource from './components/Resource';
import Classes from './components/Classes'
// import ResourcesComputerApplication from './components/ResourcesComputerApplication'
// import ClassSubjects from './components/ClassSubjects';
import Profile from './components/Profile';

import './styles/Resource.css'


function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/Resources' element={<Resource />}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/classes' element={<Classes />}></Route>
          <Route path='/aboutus' element={<Profile />}></Route>



        </Routes>

      </Router>
      {/* <ClassSubjects />  */}
      {/* <ResourcesComputerApplication /> */}
      {/* <Profile /> */}

    </>
  );
}

export default App;
