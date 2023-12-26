  import React, { useState, useEffect, useRef } from 'react';
  import styles from './Header.module.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faShoppingCart, faHammer, faBell, faPersonBreastfeeding, faV } from '@fortawesome/free-solid-svg-icons';
  import $ from 'jquery';
  import swal from 'sweetalert2';
  import { Link } from 'react-router-dom';

  function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    };

    //PHẦN REGISTER
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

    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    useEffect(() => {
      console.log('registrationSuccess:', registrationSuccess);
    }, [registrationSuccess]);

    const handleSubMenuToggle = () => {
      setIsSubMenuOpen((prevIsSubMenuOpen) => !prevIsSubMenuOpen);
      console.log(isSubMenuOpen);
    };
    
    const handleSubMenuClick = (event) => {
      // Prevent the click event from propagating up to the document
      event.stopPropagation();
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
      })

  };  
      //KẾT THÚC PHẦN REGISTER
      //PHẦN LOGIN
      const handleLogin = async (event) => {
        event.preventDefault();
    
        var _email = $('#txtEmail').val();
        var _password = $('#txtPassword').val();
    
        if (!validateEmail(_email)) {
            swal.fire("Oops!", "Invalid email format!", "error");
            return;
        }
    
        var body = {
            email: _email,
            password: _password
        };
    };
    
      //KẾT THÚC PHẦN LOGIN

      const handleOutsideClick = (event) => {
        // Đóng menu nếu click bên ngoài menu
        if (isSubMenuOpen && !event.target.closest(`.${styles.thuTucDauGia}`)) {
          setIsSubMenuOpen(false);
        }
      };
    
      // Đăng ký sự kiện để đóng menu khi click bên ngoài
      document.addEventListener('click', handleOutsideClick);

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
        <Link to="/" className={styles.blackLink}>
          <div className={styles.logo}>
            <img src="/logo.jpg" alt="Logo" width="50px" height="50px" />
          </div>
        </Link>
        <div className={styles.content}>
          <Link to="/introduction" className={styles.blackLink}>
            <div className={`${styles.yellowblink}`} >Giới thiệu</div>
          </Link>
          <div className={styles.thuTucDauGiaWrapper}>
          <div className={`${styles.menuOption} ${styles.thuTucDauGia} ${styles.hover}`} 
          onClick={handleSubMenuToggle}
          ref={menuRef}
          >
            Thủ tục đấu giá
            {isSubMenuOpen && (
            <div
              className={`submenu ${styles.thuTucDauGiaMenu}`}
              onClick={handleSubMenuClick}
            >
              <div className={styles.menuOption}>Đăng ký đấu giá</div>
              <Link to="/auction" className={styles.blackLink}>
                <div className={styles.menuOption}>Phiên/Phòng đấu giá trực tuyến</div>
              </Link>
              <div className={styles.menuOption}>Thanh toán tiền và nhận tài sản trúng đấu giá</div>
              <Link to="/regulation" className={styles.blackLink}>
                <div className={styles.menuOption}>Quy chế đấu giá trực tuyến</div>
              </Link >
              <div className={styles.menuOption}>Văn bản pháp quy</div>
            </div>
          )}
          </div>
        </div>
            
          <div className={`${styles.menuOption} ${styles.hover}`}>Gửi tài sản đấu giá</div>
          <div className={`${styles.menuOption} ${styles.hover}`}>Liên hệ</div>
          <div className={`${styles.yellowblink} ${styles.menuOption} ${styles.tinTuc}`} >Tin tức
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
            <>
              <div className={styles.formLogin}>
                  {/* Thêm sự kiện click để hiển thị modal */}
                    <Link to="/login" className={`${styles.blackLink} ${styles.login}`}>
                        Đăng nhập
                    </Link>

                  {/*Sự kiện SIGN UP*/}
                  <button className={styles.login}>Đăng ký</button>      
              </div>
              </>
          )}
        </div>
        <div className={styles.separator}></div>
      </div>
    );
  }

  export default Header;