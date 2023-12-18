  import React, { useState, useEffect, useRef } from 'react';
  import styles from './Header.module.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faShoppingCart, faHammer, faBell, faPersonBreastfeeding, faV } from '@fortawesome/free-solid-svg-icons';
  import Modal from '../Modal.js';
  import ModalAddNew from '../ModalAddNew.js';
  import $ from 'jquery';
  import swal from 'sweetalert2';


  function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isShowModalLogin, setIsShowModalLogin] = useState(false);  
    const [open, setOpen] = React.useState(false);
    const [run, setRun] = React.useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    };

    const handleRegister = async (event) => {
      event.preventDefault(); 
      var _fullName = $('#txtFullName').val();
      var _address = $('#txtAdress').val();
      var _email = $('#txtEmail').val();
      var _password = $('#txtPassword').val();
      var _confirmPassword = $('#txtConfirmPWD').val();

      if (!validateEmail(_email)) {
        swal.fire("Oops!", "Invalid email format!", "error");
        return;
      }

      var body = {
          email: _email,
          address: _address,
          password: _password,
          fullname: _fullName
      };

      try {
        const response = await fetch('http://localhost:5555/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        // const response={"success":true,"message":"Register successfully"}
        //respone=0, data=0 data.success??
        /*
        const data=await fetch('http://localhost:5555/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        data={
          status=1,
          message: "dang ki thanh cong",
          success: true/false
        }
        data.success==undefine
        */
    
        const data = await response.json();
        console.log('data',data)
        if (data.success) {
          // Hiển thị thông báo thành công
          setRegistrationSuccess(true);
          swal.fire("Good job!", "Registration Successful!", "success");
          // Đặt trạng thái registrationSuccess thành true
        
        } else {
          // Hiển thị thông báo thất bại
          swal.fire("Oops!", "Registration Failed!", "error");
        }
      } catch (error) {
        // Xử lý lỗi nếu có
        console.error('Error:', error);
        // Hiển thị thông báo thất bại
        swal.fire("Oops!", "Registration Failed!", "error");
      }
    };

    useEffect(() => {
      console.log('registrationSuccess:', registrationSuccess);
    }, [registrationSuccess]);

    
    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    const handleSubMenuToggle = () => {
      setIsSubMenuOpen((prevIsSubMenuOpen) => !prevIsSubMenuOpen);
    };
    
    const handleOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {

    $("#btnlogin").on("click", () => {
      var _email = $("#txtEmail").val();
      var _password = $("#txtPassword").val();

      console.log(_email);
      console.log(_password);

      var body = {
          email: _email,
          password: _password
      }

      $.ajax({
          url: 'http://localhost:5555/auth/signin',
          dataType: 'json',
          timeout: 10000,
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(body)
      }).done((data) => {
          localStorage.access_token = data.token
          if (localStorage.access_token !== 'undefined') {
              $.ajax({
                  url: 'http://localhost:5555/auth/secured',
                  dataType: 'json',
                  timeout: 10000,
                  headers: {
                  'token': localStorage.access_token
                                  }
                              }).done((data) => {
                                  window.location.href = '/'      
                              })
                          }
                      })
                  })

        setOpen(false);
        };
        
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
            <div className={`submenu ${styles.thuTucDauGiaMenu}  ${isSubMenuOpen ? 'active' : ''}`}
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
          
        {formSubmitted && registrationSuccess ? (
            // Hiển thị thông tin tài khoản khi đã đăng nhập
            <>
              <p>0398528547</p>
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
                      <li>Đăng xuất</li>
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
                        <form className={styles.form}>
                          <h3>Đăng nhập tại đây</h3>

                          <label className={styles.username}>Tên người dùng</label>
                          <input id='txtEmail' type="email" placeholder="Email hoặc Số điện thoại"  />

                          <label className={styles.password}>Mật khẩu</label>
                          
                          <input id='txtPassword' type="password" placeholder="Mật khẩu"  />

                          <div className={styles.col5}>
                            <span className={`${styles.btnlogin} ${styles.btnloginWithMargin}`} id="btnlogin" onClick={() => { handleOpen(); setFormSubmitted(true); }}>
                              Đăng nhập
                            </span>

                            <div className={styles.social}>
                              <div className={styles.go}><i className={styles.fa_google}></i> Google</div>
                              <div className={styles.fb}><i className={styles.fa_facebook}></i> Facebook</div>
                            </div>
                          </div>
                        
                        </form>
                        </>
                      </Modal>
                {/*Sự kiện SIGN UP*/}
                <button className={styles.login} onClick={handleSignUpOpen}>Đăng ký</button>
                  <ModalAddNew isRun={run} onClose={handleSignUpClose}>
                  <>
                      <div className={styles.registerForm}>
                        <h2>Registration Form</h2>                                             
                            <form onSubmit={handleRegister}>
                              <label className={styles.email}>Full Name:</label>
                              <input id="txtFullName" name="UID" type="text" placeholder="Full Name..." required=" "/>
                              <label className={styles.email}>Address:</label>
                              <input id='txtAdress' name='ADDRESS' type="text" placeholder="Address..." required=" "/>
                              <label className={styles.email}>Email:</label>
                              <input id="txtEmail" name="Email"  type="email" placeholder="Email Address" required=" "/>
                              <label className={styles.password}>Password:</label>
                              <input id="txtPassword" name="PWD" type="password" placeholder="Password" required=" "/>
                              <label className={styles.confirm}>Confirm Password:</label>
                              <input  id="txtConfirmPWD" name="ConfirmPWD" type="password" placeholder="Password Confirmation" required=" " />
                              <button id="btnRegister" onClick={handleRegister} type="submit">Register</button>
                            </form>                      
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