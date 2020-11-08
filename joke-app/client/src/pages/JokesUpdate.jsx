import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class JokesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            type: '',
            setup: '',
            punchline: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeInputTime = async event => {
        const time = event.target.value
        this.setState({ time })
    }

    handleUpdateJoke = async () => {
        const { id, type, setup, punchline } = this.state
        const payload = { type, setup, punchline }

        await api.updateJokeById(id, payload).then(res => {
            window.alert(`Joke updated successfully`)
            this.setState({
                type: '',
                setup: '',
                punchline: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const joke = await api.getJokeById(id)

        this.setState({
            type: joke.data.data.type,
            setup: joke.data.data.setup,
            punchline: joke.data.data.punchline,
        })
    }

    render() {
        const { type, setup, punchline } = this.state
        return (
            <Wrapper>
                <Title>Create Joke</Title>

                <Label>Type: </Label>
                <InputText
                    type="text"
                    value={type}
                    onChange={this.handleChangeInputName}
                />

                <Label>setup: </Label>
                <InputText
                    type="number"
                    value={setup}
                    onChange={this.handleChangeInputRating}
                />

                <Label>Punchline: </Label>
                <InputText
                    type="text"
                    value={punchline}
                    onChange={this.handleChangeInputTime}
                />

                <Button onClick={this.handleUpdateJoke}>Update Joke</Button>
                <CancelButton href={'/jokes/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default JokesUpdate