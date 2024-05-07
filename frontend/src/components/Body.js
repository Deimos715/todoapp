// Body.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddTodo from "./Add-todo";
import TodosList from "./Todos-list";
import Login from "./Login";
import Signup from "./Signup";

const Body = ({ token, login, signup }) => {
    return (
        <div className="container mt-4 mb-4">
        <Routes>
            <Route path="/" element={<TodosList token={token} />} />
            <Route path="/todos" element={<TodosList token={token} />} />
            <Route path="/todos/create" element={<AddTodo token={token} />} />
            <Route path="/todos/:id" element={<AddTodo token={token} />} />
            <Route path="/login" element={<Login login={login} />} />
            <Route path="/signup" element={<Signup signup={signup} />} />
        </Routes>
    </div>
    );
};

export default Body;