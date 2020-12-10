import React, {Component} from 'react';
import gotService from '../../services/GotService';
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner';


export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null,
        error: false
    }

    componentDidMount() {
        this.gotService.GetAllCharacters()
            .then((charList) => {
                this.setState({
                    charList,
                    error: false
                });
            })
            .catch(() => {this.onError()});
    }

    componentDidCatch(){
        this.setState({
            charList: null,
            error: true
        })
    }

    onError(status){
        this.setState({
            charList: null,
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {url, name} = item;
            const id = url.slice(49);
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(id)}
                    >
                    {name}
                </li>
            )
        })
    }

    render() {
        const {charList, error} = this.state;

        if(error){
            return <ErrorMessage />
        }

        if(!charList) {
            return <Spinner/>
        }


        console.log(this.state.charList)

        const items = this.renderItems(charList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}