class BookService{

    constructor(){
        this.URI = "http://localhost:3000/api/books";
    }

    async getBooks(){
        const response = await fetch(this.URI);
        const books = await response.json();
        return books;
    }

    async postBook(book){
       const response = await fetch(this.URI,{
            method: 'POST',
            body: book
        });
        const data = await response.json();
    }

    async deleteBook(bookID){
        const response = await fetch(`${this.URI}/${bookID}`,{
            headers:{
                'Content-Type':'application/json'
            },
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
    }
}

export default BookService;