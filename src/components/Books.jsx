import { useState } from "react"
import useFetch from "../useFetch.jsx"

const Books = ()=>{
    const {data,loading,error} = useFetch("https://book-olive-tau.vercel.app/books")
    const [successMessage,setSuccessMessage] = useState("")

    const handleDelete = async (bookId)=>{
        try {
            const response = await fetch(`https://book-olive-tau.vercel.app/books/${bookId}`,{
                method:"DELETE"
            })

            if(!response.ok){
                throw "Book not deleted"
            }
            
            const data = await response.json()

            if(data){
                setSuccessMessage("Message deleted successfully.")
                window.location.reload()
            }
            
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div>
             <h1>All Books</h1>
             <ul>{data?data.map(dat=><li key={dat._id} >{ dat.title   }  
                <button onClick={()=>handleDelete(dat._id)} >  Delete</button>
             </li> ):loading && <p>Loading...</p>}
             </ul>
             <p>{successMessage}</p>
        </div>
    )
}

export default Books