import React from 'react'
import { Link } from 'react-router-dom'


function Whatchistrory() {
  return (
    <>
    <div className="container nt-5 mb-5 d-flex justify-content-between">
      <h3>Watch History</h3>
      <Link to={'/home'} style={{textDecoration:'none',fontSize:'20px',color:'blueviolet'}}><i class="fa-solid fa-arrow-right fa-beat-fade"></i>Back to Home</Link>
    </div>

    <table className='table mt-5 mb-5 color-light container '>
      <thead style={{color:"white"}}>
        <th>#</th>
        <th>Name</th>
        <th>URL</th>
        <th>TimeStamp</th>
      </thead>

      <tbody style={{color:"white"}}>
        <td>1</td>
        <td>Video</td>
        <td>img</td>
        <td>Vid</td>
      </tbody>
    </table>
    </>
  )
}

export default Whatchistrory