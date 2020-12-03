import React, {Component} from 'react';
import GotService from '../../services/GotService'

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
    constructor() {
        super()
        this.updateChar()
    }

    state = {
        name: null,
        gender: null,
        born: null,
        died: null,
        culture: null
    }

    GotService = new GotService()

    onCharLoaded(char) {
        this.setState({
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        })
    }

    updateChar() {
        const id = Math.floor(Math.random()*150+20) // 20 - 150
        this.GotService.GetCharacter(id)
            .then(res => this.onCharLoaded(res))
    }


    render() {

        const { name, gender, born, died, culture } = this.state;

        return (
            <RandomBlock className="rounded">
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
            </RandomBlock>
        );
    }
}
