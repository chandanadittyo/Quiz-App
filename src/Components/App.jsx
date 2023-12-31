import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../Styles/App.css";
import { AuthProvider } from "../context/AuthContext";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
