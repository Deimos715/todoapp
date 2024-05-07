import React, {Fragment} from "react";
import "../scss/style.scss";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import TodosList from "./Todos-list";
import AddTodo from "./Add-todo";
import Login from "./Login";
import Signup from "./Signup";


export const App = () => {
    return (
        <Fragment>
            <Header />

            <Body />

            <Footer />
        </Fragment>
    )
}
