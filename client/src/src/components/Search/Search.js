import React from 'react'
import Styles from './Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div className={Styles.form}>
    <div className={Styles.Search}>
      <div className={Styles.formSearch}>
        <span className={Styles.searchText}>Tìm kiếm</span>
          <div className={Styles.searchInput}>
              <input type="text" placeholder="Nhập tên hoặc mã tài sản"/>
              <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
          </div>
      </div>
      </div>
        <div className={Styles.room}>
          <div className={Styles.roomButton}>Phòng đấu giá của bạn</div>
        </div>
  </div>
  )
}

export default Search