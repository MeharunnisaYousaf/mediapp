import React from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'




function Home() {
  return (
   <>
   <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
    <div className="add-videos">
      <Add/>
    </div>

    <Link to={'/whatchistrory'} style={{textDecotarion:'none',color:'white',fontSize:'20px'}}>Whatc History</Link>
   </div>
   <div className="container-fluid mt-5 mb-5 d-flex justify-content-between align-items-center">
    <div className="all-videos col-lg-9">
      <h3 style={{color:'white'}}>All Videos</h3>
      <View/>
    </div>
    <div className="category col-lg-3">
      <Category/>
    </div>
   </div>
   </>
  )
}

export default Home