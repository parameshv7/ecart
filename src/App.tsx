import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import { Input } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
