// Header.js
import React, { useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Navbar";



const Header = () => {
    const [user, setUser] = React.useState(null);
    const [token, setToken] = React.useState(null);
    const [error, setError] = React.useState("");

    async function login(user = null){
        setUser(user);
    }
    
    async function logout(){
        setUser(null);
    }
    
    async function signup(user = null){
        setUser(user);
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
                        <Link className="nav-link" to={"/todos"}>Todos</Link>
                        { user ? (
                            <Link className="nav-link">Logout ({user})</Link>
                        ) : (
                            <>
                            <Link className="nav-link" to={"/login"}>Login</Link>
                            <Link className="nav-link" to={"/signup"}>Sign Up</Link>
                            </>
                        )}
                        </Container>
                    </Nav>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;