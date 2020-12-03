export default class GotService {
    constructor(){
        this._apiBase = "https://anapioficeandfire.com/api"
    }

    async GetResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`)

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}`)
        }

        return await res.json()
    }

    GetAllCharacters() {
        return this.GetResourse('/characters?page=5&pageSize=10')
    }
    GetCharacter(id){
        return this.GetResourse(`/characters/${id}`)
    }
    GetAllBooks() {
        return this.GetResourse('/books/')
    }
    GetBook(id) {
        return this.GetResourse(`/books/${id}`)
    }
    GetAllHouses() {
        return this.GetResourse('/houses/')
    }
    GetAllCharacters(id) {
        return this.GetResourse(`/houses/${id}`)
    }
}
