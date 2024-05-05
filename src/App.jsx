import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* ToDo:- should wrap the login component by public guard
            Logic:- isAuthenticated user ? Dashboard : Login
          */}
          <Route path="/login" element={<h1>Login</h1>} />
          {/* ToDo:- should wrap the dashboard component by auth guard
          Logic:- isSuccessLogin ? chiildren : Login
        */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
