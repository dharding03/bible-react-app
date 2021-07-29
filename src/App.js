import React from "react";
import BookSelectionPage from "./BookSelection/BookSelectionPage";

import {BrowserRouter as Router, Route, Switch, Redirect, Link} from "react-router-dom";
import Home from "./Pages/Home";


function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <Link to= "/bookselection">Book Selection</Link> <br />
                    <Link to="/home">Home</Link>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home"></Redirect>
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/bookselection">
                        <BookSelectionPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
