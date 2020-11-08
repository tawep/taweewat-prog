import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { JokesList, JokesInsert, JokesUpdate } from '../pages'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/joke/list" exact component={JokesList} />
                <Route path="/jokes/create" exact component={JokesInsert} />
                <Route
                    path="/jokes/update/:id"
                    exact
                    component={JokesUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App