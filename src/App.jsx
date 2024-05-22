import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginPage from './pages/loginPage/loginPage';
import RegisterPage from './pages/registerPage/registerPage';
import AuthGuard from './auth/AuthGuard';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* ToDo:- should wrap the login component by public guard
            Logic:- isAuthenticated user ? Dashboard : Login
          */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* ToDo:- should wrap the dashboard component by auth guard
          Logic:- isSuccessLogin ? chiildren : Login
        */}
          <Route path="*" element={
            <AuthGuard>
              <Dashboard />
            </ AuthGuard>
          }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
