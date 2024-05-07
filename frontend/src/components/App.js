import React, {Fragment} from "react";
import "../scss/style.scss";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";


export const App = () => {
    return (
        <Fragment>
            <Header />

            <Body />

            <Footer />
        </Fragment>
    )
}
