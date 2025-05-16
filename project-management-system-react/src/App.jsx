import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {MainLayout}  from './layouts/MainLayout'
import {TeamList} from './pages/Team'

function App() {
  return (
    <Router>
      <Routes path="/layout" element={<MainLayout />}>
          <Route path="/layout/team-list" element={<TeamList/>} />
      </Routes>
    </Router>
  )
}

export default App
