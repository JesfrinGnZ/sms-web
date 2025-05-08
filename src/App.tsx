import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import SmsPage from './features/sms/SmsPage'
import LoginPage from './features/auth/LoginPage'
import RegisterPage from './features/auth/RegisterPage'
import PrivateRoute from './routes/PrivateRoute';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/sms" element={<SmsPage />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App
