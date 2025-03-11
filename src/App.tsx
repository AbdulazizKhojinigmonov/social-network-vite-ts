import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main-page" element={<MainPage />} />
            <Route path="/profile-page" element={<ProfilePage />} />
            <Route path="/registration-page" element={<RegistrationPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
