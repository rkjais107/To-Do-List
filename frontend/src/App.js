import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
