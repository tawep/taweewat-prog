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

class JokesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: '',
            setup: '',
            punchline: '',
        }
    }

    handleChangeInputType = async event => {
        const type = event.target.value
        this.setState({ type })
    }

    handleChangeInputSetup = async event => {
        const setup = event.target.value
        this.setState({ setup })
    }

    handleChangeInputPunchline = async event => {
        const punchline = event.target.value
        this.setState({ punchline })
    }

    handleIncludeJoke = async () => {
        const { type, setup, punchline } = this.state
        const payload = { type, setup, punchline }
        await api.insertJoke(payload).then(res => {
            window.alert('Joke inserted successfully')
            this.setState({
                type: '',
                setup: '',
                punchline: '',
            })
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
                    onChange={this.handleChangeInputType}
                />

                <Label>Setup: </Label>
                <InputText
                    type="text"
                    value={setup}
                    onChange={this.handleChangeInputSetup}
                />

                <Label>Punchline: </Label>
                <InputText
                    type="text"
                    value={punchline}
                    onChange={this.handleChangeInputPunchline}
                />

                <Button onClick={this.handleIncludeJoke}>Add Joke</Button>
                <CancelButton href={'/jokes/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default JokesInsert