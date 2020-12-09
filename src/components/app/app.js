import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component {
    constructor() {
        super()

        this.state = {
            randomChar: true,
            selectedChar: null
        }
    }

    toggleRandomChar = () => {
        this.setState({
            randomChar: !this.state.randomChar
        })
    }

    onCharSelected = id => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        const { randomChar, selectedChar } = this.state;

        console.log(selectedChar)

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
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails selectedChar={selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
