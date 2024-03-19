import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo } from './services/allAPI';


function VideoCard({displayData,setDeleteVideoStatus}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //delete a video
  const removeVideo= async(id)=>{
    //make api call
    const response = await deleteVideo(id)
    setDeleteVideoStatus(true)
  }
  return (
    <>
    <Card >
      <Card.Img height={'150px'} onClick={handleShow} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6>
          <button onClick={()=>removeVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
        </Card.Title>
        
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width={"100%"} height="522" src={`${displayData?.embedLink}?autoplay=1`} title="Master React JS in Hindi: The Ultimate Guide for 2023"
         frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard