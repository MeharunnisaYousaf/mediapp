import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,  MDBInput,MDBBtn
} from 'mdb-react-ui-kit';


function Footer() {
  return (
    <div>
        <MDBFooter  className='text-center mt-3' color='white' bgColor='dark' >
     

      <section className='mt-5'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-5' style={{paddingTop:'50px'}}>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-5  '>
              <h2 className='text-uppercase  mb-4 '>
              <i class="fa-solid fa-video" style={{ color:'#00FFFF'}}></i>
                Media Player
              </h2>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='1' lg='2' xl='2' className='mx-auto mb-4'>
              <h4 className='text-uppercase  mb-4'>Links</h4>
              <p>
              <a href='http://localhost:3000/' className='text-reset'>
                  Landing Page
                </a>
              </p>
              <p>
                <a href='http://localhost:3000/home' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='http://localhost:3000/watchistory' className='text-reset'>
                  Whatch History
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h4 className='text-uppercase  mb-4'>Guides</h4>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React Boootstrap
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Bootswatch
                </a>
              </p>
              
            </MDBCol>

        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            
              <h4 className='text-uppercase  mb-4'>Contact</h4>
              <form action=''>
            <MDBRow className='d-flex justify-content-center'>
            

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' label='Email address' contrast />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
            <MDBBtn className='me-1' color='info'>
                Subscribe
            </MDBBtn>
            </MDBCol>
            <br />
            <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
          </MDBRow>
        </form>
               
        </MDBCol>
        </MDBRow>  
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='textMDBootstrap.com text-reset'>
            MediaPlayer.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer