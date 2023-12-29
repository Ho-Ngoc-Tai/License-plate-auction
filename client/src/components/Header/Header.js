import React, { useState, useContext, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHammer, faBell, faPersonBreastfeeding, faV } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal.js';
import ModalAddNew from '../ModalAddNew.js';
import * as Yup from 'yup';
import axios from 'axios';
import {AuthContext} from '../AuthContext';
import {useNavigate} from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ConvertDMS from '../ConvertDMS.js';
import {CountryDropdown} from 'react-country-region-selector';
import CreateCoordinates from '../CreateCoordinates';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';



function Header() {


    // REGEX for the telephone validation
    const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    // validation of the fields
    const validationSchema1 = Yup.object().shape({
        username: Yup.string().min(3).max(20).required("You must input a username").test('Unique Username', 'Username already exists',
            function (value) {
                return new Promise((resolve, reject) => {
                    axios.get(`https://localhost:5555/auth/exists/${value}`)
                        .then((res) => {
                            console.log(res);
                            if(res.data.exists===true){
                                resolve(false)
                            }
                            else {
                                resolve(true);
                            }
                        })
                        .catch((error) => {
                            resolve(true);
                        })
                })
            }
        ),
        password: Yup.string().min(4).max(20).required("You must input a password"),
        confirmPassword: Yup.string().min(4).max(20).required("You must input this.").oneOf([Yup.ref('password'), null], 'Passwords must match'),
        name: Yup.string().min(3).max(30).required("You must input a name"),
        surname: Yup.string().min(3).max(30).required("You must input a surname"),
        email: Yup.string().required("You must input an email").email(),
        telephone: Yup.string().matches(phoneRegex, 'Phone number is not valid').required("You must input a telephone"),
        latitude: Yup.number("This is a number").moreThan(-90).lessThan(90),
        longitude: Yup.number("This is a number").moreThan(-180).lessThan(180),
        location: Yup.string().min(3).max(155).required("You must input a location."),
        country: Yup.string().required("You must input your country."),
        taxnumber: Yup.number().required("You must input your tax number.").positive().integer().lessThan(1000000000, "This is not valid").moreThan(99999999, "This is not valid"),
    });


  let navigate = useNavigate();
  
    const [coordinates, setCoordinates] = useState({});
    const [holdData, setHoldData] = useState({});
    const [mycountry, setCountry] = useState([]);

    const initialValues = {
        username: "",
        password: "",
        name: "",
        surname: "",
        email: "",
        telephone: "",
        location: "",
        country: "Greece",
        taxnumber: "",
    };

    const {authState} = useContext(AuthContext);


    const {setAuthState} = useContext(AuthContext);

    // validation of the fields
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(20).required("You must input a username"),
        password: Yup.string().min(4).max(20).required("You must input a password"),
    });

    // These here are for the Modal that displays awaiting approval
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    }

     // These here are for the Modal that displays awaiting approval
     const [openAlert, setOpenAlert] = React.useState(false);
     const handleOpenAlert = () => setOpenAlert(true);
     const handleCloseAlert = () => {
        setOpenAlert(false);
     }
     const [errorMessage, setErrorMessage] = React.useState("");

    const onSubmit = (data) =>{

        axios.post("https://localhost:5555/auth/login", data).then((res)=>{
            if (res.data.error){
                if (res.data.error==='approval'){
                    setOpen(true);
                }
                else{
                    setErrorMessage(res.data.error);
                    handleOpenAlert();
                }
            }
            else{
                localStorage.setItem("accessToken", res.data.token);
                setAuthState({
                    username: res.data.username, 
                    id: res.data.id, 
                    status:true
                });
                if (res.data.username==="admin"){
                    navigate('/users');
                }
                else{
                    navigate("/");
                }
            }
        });
        
    };



  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isShowModalLogin, setIsShowModalLogin] = useState(false);  
  const [run, setRun] = React.useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const onSubmit1 = (data) =>{
    setHoldData(data);
    setOpenDialog(true);
    
};

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: 6,
    boxShadow: 24,
    p: 4,
  };

  const handleChange  = (country) =>{
    setCountry(country);
    console.log(country);
    initialValues.country=country;
};

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const [loginClicked, setLoginClicked] = useState(false);

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen((prevIsSubMenuOpen) => !prevIsSubMenuOpen);
  };
  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const logout = () => {
    console.log("Đã nhấn vào nút Đăng xuất");
    localStorage.removeItem("accessToken");
    setAuthState({
        username: "", 
        id: 0, 
        status:false 
    });
    setOpen(false);
    navigate('/');
  }
  
  const handleSignUpOpen = () => {
    setRun(true);
  };
  
  const handleSignUpClose = () => {
    setRun(false);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  const menuRef = useRef();
  const [openDialog, setOpenDialog] = React.useState(false);


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeSubMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleCloseDialog = () => {
    setOpenDialog(false);
    holdData.country = mycountry;
        
    // if the user inputed coordinates add them too
    if (Object.keys(coordinates).length > 0 ){
        var point = { type: 'Point', coordinates: [coordinates.lat, coordinates.lng]};
        holdData.latitudeLongitude = point;
    }

    axios.post("https://localhost:5555/auth/", holdData).then((res)=>{
    });

    setOpen(true);
    
};
  
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/logo192.png" alt="Logo" width="50px" height="50px" />
      </div>
      <div className={styles.content}>
        <div className={styles.yellowblink}>Giới thiệu</div>
        <div className={styles.thuTucDauGiaWrapper}>
        <div className={`${styles.menuOption} ${styles.thuTucDauGia}`} 
        onClick={handleSubMenuToggle}
        ref={menuRef}
        >
          Thủ tục đấu giá
          <div className={`submenu ${styles.thuTucDauGiaMenu} ${isSubMenuOpen ? styles.active : ''}`}
          >
            <div className={styles.menuOption}>Đăng ký đấu giá</div>
            <div className={styles.menuOption}>Phiên/Phòng đấu giá trực tuyến</div>
            <div className={styles.menuOption}>Thanh toán tiền và nhận tài sản trúng đấu giá</div>
            <div className={styles.menuOption}>Quy chế đấu giá trực tuyến</div>
            <div className={styles.menuOption}>Văn bản pháp quy</div>
          </div>
        </div>
      </div>

        <div className={styles.menuOption}>Gửi tài sản đấu giá</div>
        <div className={styles.menuOption}>Liên hệ</div>
        <div className={`${styles.yellowblink} ${styles.menuOption} ${styles.tinTuc}`}>Tin tức
          <div className={`${styles.tinTucMenu}`}>
            <div className={styles.menuOption}>Tin tức chung</div>
            <div className={styles.menuOption}>Tin tức hoạt động  </div>
            <div className={styles.menuOption}>Tin tuyển dụng</div>
          </div>
        </div>
      </div>
      <div className={styles.icon}>
        <i><FontAwesomeIcon icon={faShoppingCart} /></i>
        <i><FontAwesomeIcon icon={faHammer} /></i>
        <i><FontAwesomeIcon icon={faBell} /></i>
      </div>
      <div className={styles.account}>
        {!authState.status ?(
          // Hiển thị thông tin tài khoản khi đã đăng nhập
          <>
            <div>&nbsp;{authState.username}</div>
            <div className={styles.register}>
              <i className={styles.info}><FontAwesomeIcon icon={faPersonBreastfeeding} /></i>
              <span className={`${styles.arrow} ${isMenuOpen ? styles.rotateArrow : ""}`} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faV} />
              </span>
              {isMenuOpen && (
                <div className={`${styles.dropdownMenu} ${isMenuOpen ? styles.active : ''}`}>
                  <ul>
                    <li>Thông tin tài khoản</li>
                    <li>Đồ cổ chờ đấu giá</li>
                    <li>Lịch sử đấu giá</li>
                    <li>Tài liệu của tôi</li>
                    <li>Đổi mật khẩu</li>
                    <div>
                      <button onClick={handleSignUpClose} > Đăng xuất</button> 
                      <Dialog
                        open={open}
                        onClose={handleSignUpClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title" style={{
                              fontFamily: 'Futura',
                          }}>
                          {"Are you sure you want to sign out?"}
                        </DialogTitle>
                        <DialogActions>
                            <button className="buttonitoReverse" onClick={handleClose}>Cancel</button>
                            <button className="buttonito"  onClick={logout} autoFocus>Confirm</button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </ul>
                </div>
              )}
            </div>
          </>
        ) : (
          // Hiển thị Đăng ký/Đăng nhập khi chưa đăng nhập
          <>
            <div className={styles.formLogin}>
                  {/* Thêm sự kiện click để hiển thị modal */}
                  <button className={styles.login} type={styles.button} onClick={handleOpen}>
                    Đăng nhập
                  </button>
                    <Modal isOpen={open} onClose={handleClose}>
                      <>
                      <Formik 
                        initialValues={initialValues} 
                        onSubmit={onSubmit}
                        validationSchema={validationSchema} 
                        style={{
                            height: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}
                        >
                            <Form className='formContainer gradient-custom' >
                                <label>Username: </label>
                                <ErrorMessage name="username" component="span" />
                                <Field 
                                id="inputCreateItem" 
                                name="username" 
                                placeholder="" 
                                />
                                <label>Password: </label>
                                <ErrorMessage name="password" component="span" />
                                <Field 
                                id="inputCreateItem" 
                                name="password" 
                                type="password"
                                placeholder="" 
                                />
                            
                                <button type="submit" >
                                    Login
                                </button>
                            </Form>
                        </Formik>
                      </>
                    </Modal>
              {/*Sự kiện SIGN UP*/}
              <button className={styles.login} onClick={handleSignUpOpen}>Đăng ký</button>
                <ModalAddNew isRun={run} onClose={handleSignUpClose}>
                   <>
                    <div className={styles.registerForm}>
                      <h2>Registration Form</h2>
                      <div className='createItemPage'>
                              <Formik 
                              initialValues={initialValues} 
                              onSubmit={onSubmit1} 
                              onChange={handleChange}
                              validationSchema={validationSchema} 
                              validateOnChange={false}
                              >
                                
                                  <Form className='formContainer gradient-custom' >
                                  <div style={{ overflowY: 'auto', maxHeight: '100vh', border: '1px solid #ccc' }}>
                                      <label>Username: </label>
                                      <ErrorMessage name="username" component="span" />
                                      <Field 
                                      id="inputCreateItem" 
                                      name="username" 
                                      placeholder="Username" 
                                      />
                                      <label>Password: </label>
                                      <ErrorMessage name="password" component="span" />
                                      <Field 
                                      id="inputCreateItem" 
                                      name="password" 
                                      type="password"
                                      placeholder="*****" 
                                      />
                                      <label>Confirm Password: </label>
                                      <ErrorMessage name="confirmPassword" component="span" />
                                      <Field 
                                      id="inputCreateItem" 
                                      name="confirmPassword" 
                                      type="password"
                                      placeholder="*****" 
                                      />
                                      <label>Name: </label>
                                      <ErrorMessage name="name" component="span" />
                                      <Field 
                                      id="inputCreateItem" 
                                      name="name" 
                                      placeholder="Name" 
                                      />
                                      <label>Surname: </label>
                                      <ErrorMessage name="surname" component="span" />
                                      <Field 
                                      id="inputCreateItem" 
                                      name="surname" 
                                      placeholder="Surname" 
                                      />
                                      <label>Email: </label>
                                      <ErrorMessage name="email" component="span" />
                                      <Field 
                                      id="inputCreateItem" 
                                      name="email" 
                                      placeholder="Email" 
                                      />
                                      <label>Telephone: </label>
                                      <ErrorMessage name="telephone" component="span" />
                                      <Field 
                                      id="inputCreateItem" 
                                      name="telephone" 
                                      placeholder="Telephone" 
                                      />
                                      
                                      <label>ΑΦΜ: </label>
                                      <ErrorMessage name="taxnumber" component="span" />
                                      <Field 
                                      id="inputCreateItem" 
                                      name="taxnumber" 
                                      placeholder="Taxnumber" 
                                      />

                                      <label>Location: </label>
                                      <ErrorMessage name="location" component="span" />
                                      <Field 
                                      id="inputCreateItem" 
                                      name="location" 
                                      placeholder="City" 
                                      />
                                      <label>Country: </label>
                                      <ErrorMessage name="country" component="span" />

                                      <CountryDropdown 
                                      id="inputCreateItem" 
                                      name="country"
                                      value={mycountry}
                                      onChange={(e) => handleChange(e)}
                                      />
                                      
                                      <button type="submit">
                                          Confirm
                                      </button>
                                      </div>
                                  </Form>
                                  
                              </Formik>

                              <Dialog
                                  open={openDialog}
                                  onClose={handleCloseDialog}
                                  aria-labelledby="alert-dialog-title"
                                  aria-describedby="alert-dialog-description"
                              >
                                  <DialogTitle id="alert-dialog-title" style={{
                                      fontFamily: 'Futura',
                                      
                                  }}>
                                  {"Optionally, you can also provide your precise location"}
                                  </DialogTitle>
                                  <DialogContent>
                                  <DialogContentText id="alert-dialog-description">
                                      <CreateCoordinates setCoordinates={setCoordinates} />
                                      { (Object.keys(coordinates).length > 0 ) &&
                                          <Typography variant="h6" id="modal-modal-description" sx={{ mt: 2 }}>
                                          Set to:&nbsp;&nbsp;{ConvertDMS(coordinates.lat, coordinates.lng)}
                                        </Typography>
                                      }
                                  </DialogContentText>
                                  </DialogContent>
                                  <DialogActions>

                                  <button className="buttonito"  onClick={handleCloseDialog} autoFocus>Continue</button>
                            
                                </DialogActions>
                              </Dialog>


                              <Modal
                                  open={open}
                                  onClose={handleClose}
                                  aria-labelledby="modal-modal-title"
                                  aria-describedby="modal-modal-description"
                              >
                                  <Box sx={style}>
                                      <Typography id="modal-modal-title" variant="h5" component="h2">
                                          Application Received
                                      </Typography>
                                      <img alt="Received" className='approval_photo' src='https://codenex.in/wp-content/uploads/2019/01/appdevelopment.png' />
                                      <Typography variant="h6" id="modal-modal-description" sx={{ mt: 2 }}>
                                          You'll be able to use our services as soon as you have been approved!
                                      </Typography>
                                  </Box>
                              </Modal>

                          </div>
                      <div className={styles.social}>
                          <div className={styles.go}><i className={styles.fa_google}></i> Google</div>
                          <div className={styles.fb}><i className={styles.fa_facebook}></i> Facebook</div>
                      </div>
                    </div>
                  </>
                </ModalAddNew>
              </div>
            {/* Hiển thị modal khi isShowModalLogin là true */}
            {isShowModalLogin && (
              <Modal show={isShowModalLogin} handleClose={() => setIsShowModalLogin(false)} />
            )}
          </>
        )}
      </div>
      <div className={styles.separator}></div>
    </div>
  );
}

export default Header;