import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Landing() {
  return (
    
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}>
        <h1 style={{textAlign:'justify', color:'white'}}>Welcome To <span className='text-info'> Media Player</span></h1>
        <p style={{color:'white'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, culpa, ducimus labore 
          facilis sunt similique cum autem error consectetur sapiente, totam voluptates. Quos porro asperiores sequi doloribus fuga provident error. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem voluptates
          dolor recusandae totam eius blanditiis placeat dignissimos nemo, est eveniet excepturi illo maxime quo aperiam sunt dicta natus? Officia?</p>
          <button className='mt-4 btn ntn-info'>Get Started</button>
      </Col>
      <Col lg={5}>
        <img src="https://i.gifer.com/origin/6d/6db3d77d8ff976feb206d7e7c64572a6.gif" alt="" />
      </Col>
      <Col></Col>
    </Row>
    <br /><br />
    <h2 style={{color:'white',textAlign:'center'}}>Features</h2>
    <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flext-column">

      <div className='cards mb-5  mt-5 d-flex align-items-center justify-content-between w-100 '>
      <Card className='p-5 bg-info' style={{ width: '20rem' }}>
      <Card.Img height={'250px'} width={'300px'} variant="top" src="https://pa1.aminoapps.com/5727/d26748ddbc7da7eb70e6ccd426c5d5f4b8056199_hq.gif" />
      <Card.Body>
        <Card.Title style={{color:'white'}}>Managing videos</Card.Title>
        <Card.Text style={{color:'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='cards mb-5  mt-5 d-flex align-items-center justify-content-between w-100 '>
      <Card className='p-5 bg-info' style={{ width: '20rem' }}>
      <Card.Img height={'250px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/df/28/76/df2876e38bbff18a1528cbdf58238dc5.gif" />
      <Card.Body>
        <Card.Title style={{color:'white'}}>Managing videos</Card.Title>
        <Card.Text style={{color:'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='cards mb-5  mt-5 d-flex align-items-center justify-content-between w-100 '>
      <Card className='p-5 bg-info' style={{ width: '20rem' }}>
      <Card.Img height={'250px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif" />
      <Card.Body>
        <Card.Title style={{color:'white'}}>Managing videos</Card.Title>
        <Card.Text style={{color:'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    
    
          

    </div>
    <div className="container border rounded p-5 border -secondary b-5 mt-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
          <h3 className="mb-5 text-warning">Simple,pwerfull &Fast</h3>
          <h6 className="mb-5">
            <span className="fs-5 fw-bolder text-warning">Play Everything</span>
            : Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nisi
            mollitia quaerat porro, maxime ipsam magni vel iusto distinctio,
            quos officiis corrupti laboriosam voluptates consectetur fugiat
            voluptas alias ea eaque!
          </h6>

          <h6 className="mb-5">
            <span className="fs-5 fw-bolder text-warning">Play Everything</span>
            : Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nisi
            mollitia quaerat porro, maxime ipsam magni vel iusto distinctio,
            quos officiis corrupti laboriosam voluptates consectetur fugiat
            voluptas alias ea eaque!
          </h6>

          <h6 className="mb-5 ">
            <span className="fs-5 fw-bolder text-warning">Play Everything</span>
            : Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nisi
            mollitia quaerat porro, maxime ipsam magni vel iusto distinctio,
            quos officiis corrupti laboriosam voluptates consectetur fugiat
            voluptas alias ea eaque!
          </h6>

          
        </div>
        <div className="video col-lg-5">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gB2zKZxESTg?si=O-WtxyhvTtdOcwxH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
      </div>
    </>

    

  )
}

export default Landing