import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import ListScreen from "./screens/ListScreen";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/lists/:listId" element={<ListScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
