export default function Books({book}){
    console.log(book);
    return(
        <div className="student">
            <h4>Book's Name:  {book.bookName}</h4>
            <p> Book's Writer:  {book.bookWriter}</p>
        </div>
    )
}