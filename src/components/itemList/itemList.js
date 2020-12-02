import React, {Component} from 'react';

import styled from 'styled-components';

const ListItem = styled.li`
    cursor: pointer;
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem; 
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
`


export default class ItemList extends Component {

    render() {
        return (
            <ul className="item-list list-group">
                <ListItem>
                    John Snow
                </ListItem>
                <ListItem>
                    Brandon Stark
                </ListItem>
                <ListItem>
                    Geremy
                </ListItem>
            </ul>
        );
    }
}