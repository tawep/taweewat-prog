import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Thai Joke API
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/jokes/list" className="nav-link">
                                List Joke
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/jokes/create" className="nav-link">
                                Create Joke
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links