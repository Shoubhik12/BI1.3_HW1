import useFetch from "../useFetch";

const BooksByAuthor=({author})=>{
    const {data,loading,error} = useFetch(`http://localhost:3000/books/bookAuthor/${author}`)

    return(
        <div>
            <h1>Books By {author}</h1>
            {data?
            <ul>
                {data.map(dat=><li>{dat.title}</li>)}
            </ul>
            :
            loading && <p>Loading...</p>}
        </div>
    )
}


export default BooksByAuthor