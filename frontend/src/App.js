import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import ListScreen from "./screens/ListScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import RootScreen from "./screens/RootScreen";
import { useSelector } from "react-redux";

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/list/:listId" element={<ListScreen />} />
            {userInfo ? (
              <Route path="/home" element={<HomeScreen />} />
            ) : (
              <Route path="/login" element={<LoginScreen />} />
            )}
            {!userInfo && <Route path="/" element={<RootScreen />} />}
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
