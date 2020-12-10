import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage/characterPage';


export default class App extends Component {
    constructor() {
        super()

        this.state = {
            randomChar: true
        }
    }

    toggleRandomChar = () => {
        this.setState({
            randomChar: !this.state.randomChar
        })
    }

    render() {
        const { randomChar } = this.state;

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {randomChar ? <RandomChar /> : null}
                            <button onClick={this.toggleRandomChar}className="btn btn-info" style={{ marginBottom: "40px" }}>Toggle random character</button>
                        </Col>
                    </Row>
                    <CharacterPage />
                </Container>
            </>
        );
    }
};
