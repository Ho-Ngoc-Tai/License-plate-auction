import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHammer, faBell, faPersonBreastfeeding, faV } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isShowModalLogin, setIsShowModalLogin] = useState(false);  
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
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
        <div className={`${styles.menuOption} ${styles.thuTucDauGia}`}>
          Thủ tục đấu giá
          <div className={`${styles.thuTucDauGiaMenu}`}>
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
        {isLoggedIn ? (
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
                    <form>
                      <h3>Đăng nhập tại đây</h3>

                      <label className={styles.username}>Tên người dùng</label>
                      <input type="text" placeholder="Email hoặc Số điện thoại" id="username" />

                      <label className={styles.password}>Mật khẩu</label>
                      <input type="password" placeholder="Mật khẩu" id="password" />

                      <button>Đăng nhập</button>
                      <div className={styles.social}>
                        <div className={styles.go}><i className={styles.fa_google}></i> Google</div>
                        <div className={styles}><i className={styles.fa_facebook}></i> Facebook</div>
                      </div>
                    </form>
                    </>
                  </Modal>
              <button className={styles.login}>Đăng ký</button>
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
