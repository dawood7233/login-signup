import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage/>}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
      </BrowserRouter>

  );
}

export default App;
