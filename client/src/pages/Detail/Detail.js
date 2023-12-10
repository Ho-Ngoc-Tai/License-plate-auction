import React from 'react'
import Styles from './Detail.module.css'
import Search from '../../components/Search/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const detail = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.form}>
            <Search />
        </div>
        <div className={Styles.paragraph}>
            <p className={Styles.p}>Trang chủ</p>
            <p><FontAwesomeIcon icon={faGreaterThan}/></p>
            <p className={Styles.p}>Giới thiệu</p>
            <p><FontAwesomeIcon icon={faGreaterThan}/></p>
            <p className={Styles.p}>Tủ gỗ</p>
        </div>
    </div>
  )
}

export default detail