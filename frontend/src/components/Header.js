// Header
import React, { useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Navbar";

import AddTodo from "./Add-todo";
import TodosList from "./Todos-list";
import Login from "./Login";
import Signup from "./Signup";

import TodoDataService from '../services/todos';



const Header = () => {
    const [user, setUser] = React.useState(null);
    const [token, setToken] = React.useState(null);
    const [error, setError] = React.useState("");

    async function login(user = null){ // default user to null
        TodoDataService.login(user)
        .then(response =>{        
            setToken(response.data.token);     
            setUser(user.username);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', user.username);
            setError('');
        })
        .catch( e =>{
            console.log('login', e);
            setError(e.toString());
        });
    }
    
    async function logout() {
        setToken('');
        setUser('');
        localStorage.setItem('token', '');
        localStorage.setItem('user', '');
    }
    
    async function signup(user = null){ // default user to null
        TodoDataService.signup(user)
        .then(response =>{
            setToken(response.data.token);
            setUser(user.username);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', user.username);
        })
        .catch( e =>{
            console.log(e);
            setError(e.toString());
        })
    }

    // Установка пользователя для проверки
    // React.useEffect(() => {
    //     login("exampleUser");
    // }, []);

    return (
        <div className="Header">
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Navbar.Brand>TodosApp</Navbar.Brand>
                    <Nav className="me-auto">
                        <Container>
                        <Link className="nav-link" to={"/todos"}>Задачи</Link>
                        { user ? (
                            <Link className="nav-link" onClick={logout}>Выйти ({user})</Link>
                        ) : (
                            <>
                            <Link className="nav-link" to={"/login"}>Вход</Link>
                            <Link className="nav-link" to={"/signup"}>Регистрация</Link>
                            </>
                        )}
                        </Container>
                    </Nav>
                </div>
            </Navbar>

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
        </div>
    );
};

export default Header;