import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from './services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add() {

  const [video,setVideo]=useState({
    id:"",caption:"",url:"",embedLink:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedLink = (e)=>{
    const {value}=e.target 
    if(value){
    const link = `https://www.youtube.com/embed${value.slice(-11)}`
    setVideo({...video,embedLink:link})
    }
    else{
      setVideo({...video,embedLink:""})
    }
  }

const handleUpload = async()=>{
  const {id,caption,url,embedLink} = video
  if(!id|| !caption|| !url|| !embedLink){
    toast.warning("please fill the missing fields")
  }
  else{
    //make api call
    const response = await uploadVideo(video)
    console.log(response)
    if(response.status>=200 & response.status<300){
      toast.success(`${response.data.caption} video uploaded`)
      //set server response 
      

      //
      setVideo({
        id:"",caption:"",url:"",embedLink:""
      })
      //hide modal
      handleClose()
    }
    else{
      console.log(response);
      toast.error("something went wrong")
    }
  }
}

//console.log(video);

  return (
    <>
    <div className="d-flex align-items-center">
      <h5  style={{color:'white'}}>Upload Videos</h5>
      <button className='btn'onClick={handleShow} ><i class="fa-solid fa-cloud-arrow-up fa-beat-fade"  style={{color:'white'}}></i></button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Fill the following details</p>

          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter Video Title" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter Video Image URL" onChange={(e)=>setVideo({...video,url:e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter Video  Link" onChange={getEmbedLink} />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000}
      />
    </>
  )
}

export default Add