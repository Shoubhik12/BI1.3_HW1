import useFetch from "../useFetch"


const BooksByTitle=({title})=>{
    const {data,loading,error} = useFetch(`http://localhost:3000/books/${title}`)

    return data ? (
        <div>
            <h1>{data.title}</h1>
            <strong>Author: </strong>{data.author} <br /> <br />
            <strong>Release Year: </strong>{data.publishedYear} <br /> <br />
            <strong>Genre: </strong>{data.genre.join(", ")}
        </div>
    ):( loading && <p>Loading...</p> )
}
export default BooksByTitle