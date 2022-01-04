import React,{useState,useEffect} from 'react'
// import contacts from '../data/mock-data.json'
import axios from 'axios'

function ApplicantList() {  

    const [applicantdata,setApplicantdata] = useState(null)

    const useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((result)=>{
          console.log(result.data)    
        })
      }, [])
    
    return (
        <div className='app-container'>

            <table class="table">
                <thead>              
                    <tr>
                        <th scope="col">Serial ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>

                <tbody>
                    {applicantdata.map((contact)=>(
                        <tr>
                           <td>{contact.id}</td>
                           <td>{contact.name}</td>
                           <td>{contact.username}</td>
                           <td>{contact.email}</td>
                           <td>{contact.phone}</td>
                           <td>{contact.website}</td>
                       </tr>
                    ))
                    }
                
                </tbody>
            </table>

            <h2>Add Details</h2>
            <form>
                <input type="text" name="name" required='required' placeholder="Enter name"/>
                <input type="text" name="name" required='required' placeholder="Enter username"/>
                <input type="text" name="name" required='required' placeholder="Enter email"/>
                <input type="text" name="name" required='required' placeholder="Enter phone no"/>
                <input type="text" name="name" required='required' placeholder="Enter websitelink"/>
            </form>

            <button type="submit">Submit</button>

        </div>
    )
}

export default ApplicantList
