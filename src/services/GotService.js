export default class GotService {
    constructor(){
        this._apiBase = "https://www.anapioficeandfire.com/api"
    }

    async GetResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`)

        if(!res.ok) {
            console.log("You have troubles")
        }

        return await res.json();
    }

    GetAllCharacters() {
        return this.GetResourse('/characters?page=5&pageSize=10')
    }
    GetCharacter(id){
        return this.GetResourse(`/characters/${id}`)
    }
    // GetAllBooks() {
    //     return this.GetResourse('/books/')
    // }
    // GetBook(id) {
    //     return this.GetResourse(`/books/${id}`)
    // }
    // GetAllHouses() {
    //     return this.GetResourse('/houses/')
    // }
    // GetAllCharacters(id) {
    //     return this.GetResourse(`/houses/${id}`)
    // }
    // _transformCharacterData(char) {
    //     return {
    //         name: char.name,
    //         gender: char.gender,
    //         born: char.born,
    //         died: char.died,
    //         culture: char.culture
    //     }
    // }
    // _transformHouseData(house) {
    //     return {
    //         name: house.name,
    //         region: house.region,
    //         words: house.words,
    //         titles: house.titles,
    //         overlord: house.overlord,
    //         ancestralWeapons: house.ancestralWeapons
    //     }
    // }
    // _transformBookData(book) {
    //     return {
    //         name: book.name,
    //         numberOfPages: book.numberOfPages,
    //         publisher: book.publisher,
    //         released: book.released
    //     }
    // }
}
