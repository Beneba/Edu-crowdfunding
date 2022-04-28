import React from 'react'
import Header from '../component/Header'
import Layout from '../component/Layout'

function DonatePage() {
  return (
      <div>
      <Header />
        <div className='container-donation center'>
            <h3>Giving Level</h3>
            <p>All donations big or small will make a difference</p>
            <div className="button-options center">
            <button type="button" class="btn btn-outline-info">20 Ghc</button>
            <button type="button" class="btn btn-outline-info">50 Ghc</button> <br />
            <button type="button" class="btn btn-outline-info">100 Ghc</button>
            <button type="button" class="btn btn-outline-info">200 Ghc</button><br />
            <button type="button" class="btn btn-outline-info">500 Ghc</button>
            <button type="button" class="btn btn-outline-info">700 Ghc</button><br />
            
            <input type="text" className="input-option" placeholder ="Own Amount"></input>


            </div>
            <button type="button" className="btn btn-outline-success btn-lg btn-block donate-btn">Donate Now</button>
        </div>
    
    </div>
  )
}

export default DonatePage