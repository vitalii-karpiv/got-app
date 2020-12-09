import React, {Component} from 'react';
import GotService from '../../services/GotService';
import styled from 'styled-components';
// import Spinner from '../spinner';


const CharDetail = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`



export default class CharDetails extends Component {
    GotService = new GotService()

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps) {
        if (this.state.char !== prevProps) {
            this.updateChar();
        }
    }

    updateChar = () => {
        const { selectedChar } = this.props;
        if (!selectedChar) {
            return;
        }

        this.GotService.GetCharacter(selectedChar)
            .then(char => this.setState({
                char
            }))
    }

    render() {
        if(!this.state.char) {
            return <span className="list-group-item">Please select character!</span>
        }

        const { name, gender, born, died, culture } = this.state.char;

        return (
            <CharDetail className="rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </CharDetail>
        );
    }
}