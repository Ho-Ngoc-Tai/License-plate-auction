// Login.module.css
/* Thêm một class mới khi input được focus */


// App.js
import React, { useState } from 'react';
import {
MDBBtn,
MDBContainer,
MDBRow,
MDBCol,
MDBIcon,
MDBInput
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

function Login() {
  const [inputFocused, setInputFocused] = useState(false);
  const [email, setEmail] = useState(''); 

return (
  <MDBContainer fluid>
    <MDBRow className={styles.myCustomContainerFluid}>
      <MDBCol sm='6' className={styles.form}>
        <div className={`d-flex flex-row ps-5 pt-5 ${styles.customFlexRow}`}>
          <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
          <span className={`h1 fw-bold mb-0  ${styles.customBoldRow}`}>
            <h1>Logo</h1>
          </span>
        </div>

        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
          <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
          
          <div className={styles.inputContainer}>
              <input
                className={`${styles.inputLogin} ${inputFocused || email ? styles.inputLoginFocused : ''}`}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type='email'
                required
              />
              <label className={styles.inputLabel}>Email address</label>
            </div>

          <MDBInput className={`${styles.inputLogin} ${inputFocused || email ? styles.inputLoginFocused : ''}`}
            wrapperClass='mb-4 mx-5 w-100'
            label='Password'
            id='formControlLg'
            type='password'
            size="lg"
          />

          <MDBBtn className={` ${styles.BtnLogin}`}>Login</MDBBtn>
          <p ><a className={styles.Forgot} href="#!">Forgot password?</a></p>
          <p className='ms-5'>Don't have an account? 
          <Link to="/signup" className={`${styles.blackLink} ${styles.login}`}>
              <a href="#!" className={styles.Register}>Register here</a>
                    </Link>
              </p>
        </div>
      </MDBCol>

      <MDBCol sm='6' className={`d-none d-sm-block px-0 ${styles.myCustomCol}`}>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
          alt="Login image"
          className={`w-100 ${styles.customImage}`}
        />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);
}

export default Login;
