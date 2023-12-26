// Register.js
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import styles from './Signup.module.css'; // Import CSS module

function Register() {
  return (
    <MDBContainer fluid className={`d-flex align-items-center justify-content-center ${styles.bgImage}`}>
      <div className={`mask ${styles.gradientCustom3}`}></div>
      <MDBCard className={`m-5 ${styles.card}`} style={{ maxWidth: '100%' }}>
        <MDBCardBody className={`px-5 ${styles.cardBody}`}>
          <h2 className={`text-uppercase text-center mb-5 ${styles.title}`}>Create an account</h2>
          <MDBInput wrapperClass={`mb-4 ${styles.input}` } label='Your Name' size='lg' id='form1' type='text' style={{ height: '30px', width: '400px'}} />
          <MDBInput wrapperClass={`mb-4 ${styles.input}`} label='Your Email' size='lg' id='form2' type='email' style={{ height: '30px', width: '400px' }} />
          <MDBInput wrapperClass={`mb-4 ${styles.input}`} label='Password' size='lg' id='form3' type='password' style={{ height: '30px', width: '400px' }}/>
          <MDBInput wrapperClass={`mb-4 ${styles.input}`} label='Repeat your password' size='lg' id='form4' type='password' style={{ height: '30px', width: '400px' }} />
          <div className={`d-flex flex-row justify-content-center mb-4 ${styles.checkbox}`}>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className={`mb-4 w-100 ${styles.btn}`} size='lg'>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
