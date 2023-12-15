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
              <input id='txt_search' type="search" name="Search" placeholder="Nhập tên hoặc mã tài sản"/>
              <button >
                  <i><FontAwesomeIcon id='btnSearch' type="submit" icon={faMagnifyingGlass} /></i>
              </button>
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