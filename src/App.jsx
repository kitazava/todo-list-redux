import React from "react"
import {BrowserRouter,Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Reminder from "./pages/Reminder";
import Task from "./pages/Task";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/reminder" element={<Reminder />}/>
        <Route path="/task" element={<Task />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
