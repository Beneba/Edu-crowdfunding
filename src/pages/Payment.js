import React from 'react'
import Header from '../component/Header'

function Payment() {
  return (
    <div>
         <Header />
        <div className='container-donation center'>
            <h3>Select A Paymeny Method</h3>
            
            <div className="button-options center">
            <div className ="item">
            <input type="text" className="form-control  " placeholder="Name"/>
            <input type="text" className="form-control" placeholder="Phone Number"/>
            <input type="text" className="form-control" placeholder="Email"/> <br />
            <input type="text" className="form-control" placeholder="Amount"/>
            </div>
           
            
            <input type="text" className="input-option" placeholder ="Own Amount"></input>


            </div>
            <button type="button" className="btn btn-outline-success btn-lg btn-block donate-btn">Donate Now</button>
    </div>
    </div>
  )
}

export default Payment