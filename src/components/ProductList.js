import React,{useState} from 'react'
import products from '../data/product-data.json'

function ProductList() {
    
    return (
        <div className='app-container'>

            <table class="table">
                <thead>              
                    <tr>
                        <th scope="col">Serial ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product)=>(
                        <tr>
                           <td>{product.id}</td>
                           <td>{product.title}</td>
                           <td>{product.body}</td>
                        
                       </tr>
                    ))
                    }
                
                </tbody>
            </table>

        </div>
    )
}

export default ProductList
