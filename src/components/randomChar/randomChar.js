import React, { Component } from 'react';
import GotService from '../../services/GotService'
import Spinner from '../spinner/'

import styled from 'styled-components'

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`

const Term = styled.span`
    font-weight: bold;
`

export default class RandomChar extends Component {
    GotService = new GotService();

    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar()
        // this.timerId = setInterval(this.updateChar, 1500);
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    onCharLoaded = char => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar() {
        const id = Math.floor(Math.random() * 150 + 20) // 20 - 150
        this.GotService
            .GetCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const { loading, char, error } = this.state;

        const content = loading ? <Spinner />
            : error ?
                <Error />
                : <View char={char} />

        return (
            <RandomBlock className="rounded">
                {content}
            </RandomBlock>
        );
    }
}

const Error = () => {
    return (
        <div className="text-center">Something went wrong!</div>
    )
}

const View = ({ char }) => {
    const { name, gender, born, died, culture } = char;

    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Gender </Term>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Born </Term>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Died </Term>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term>Culture </Term>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}