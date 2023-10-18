import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <div>
        <h3>Product Sell</h3>

       <table>
        
         <thead>
            <tr>
               <th>Product Name</th>
               <th>Stock</th>
               <th>Price</th>
               <th>Total Sales</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>
                    <div className='listName'>
                        <div >
                        <img className="sideImg" src="https://i.pinimg.com/originals/f8/c8/db/f8c8db5ce4f2faa0297bc44e06effc88.jpg" />
                        </div>

                        <div className='content'>
                            <p>Abstract 3D <br/>
                               lorem ipsum to do what
                            </p>
                        </div>
                    </div>
                </td>

                <td>32 in Stock</td>
                <td>$45.99</td>
                <td>20</td>
            </tr>

            <tr>
                <td>
                    <div className='listName'>
                        <div >
                        <img className="sideImg" src="https://i.pinimg.com/originals/f8/c8/db/f8c8db5ce4f2faa0297bc44e06effc88.jpg" />
                        </div>

                        <div className='content'>
                            <p>Abstract 3D <br/>
                               lorem ipsum to do what
                            </p>
                        </div>
                    </div>
                </td>

                <td>32 in Stock</td>
                <td>$45.99</td>
                <td>20</td>
            </tr>
        </tbody>
          

       </table>
    </div>
  )
}

export default Product;