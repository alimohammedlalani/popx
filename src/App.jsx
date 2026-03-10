import {BrowserRouter, Routes, Route } from "react-router-dom"
import WelcomePage from "./pages/WelcomePage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import AccountSettings from "./pages/AccountSettings"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex justify-center bg-white">
        <div className="w-85 min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/accountsettings" element={<AccountSettings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App