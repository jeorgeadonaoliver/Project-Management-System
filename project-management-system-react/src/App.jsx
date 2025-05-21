import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout  from './layouts/MainLayout'
import { Home } from './pages/home'
import {TeamList} from './pages/team-list'
import {Users} from './pages/users'
import {Projects} from './pages/projects'
import { Departments }  from './pages/departments'
import {Teams} from './pages/teams'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route path="/team-list" element={<TeamList/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/departments" element={<Departments/>} />
          <Route path="/teams" element={<Teams/>} />
        </Route>  
      </Routes>
    </Router>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App
