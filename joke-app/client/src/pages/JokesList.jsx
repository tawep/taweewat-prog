import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateJoke extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/jokes/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteJoke extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                'Do tou want to delete the joke permanently?',
            )
        ) {
            api.deleteJokeById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class JokesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jokes: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllJokes().then(jokes => {
            this.setState({
                jokes: jokes.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { jokes, isLoading } = this.state
        console.log('TCL: JokesList -> render -> jokes', jokes)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Type',
                accessor: 'type',
                filterable: true,
            },
            {
                Header: 'Setup',
                accessor: 'setup',
                filterable: true,
            },
            {
                Header: 'Punchline',
                accessor: 'punchline',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <DeleteJoke id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <UpdateJoke id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!jokes.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={jokes}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default JokesList