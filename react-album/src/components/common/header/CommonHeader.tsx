import styles from './CommonHeader.module.css'
function CommonHeader() {
  return (
    <div className={styles.header}>
        <div className={styles.header__longBox}>
            <img src="" alt="" />
            <span className={styles.header__longBox__title}>PhotoSplash</span>
        </div>
        <div className={styles.header__profileBox}>
            <button className={styles.header__profileBox__button}>사진제출</button>
            <button className={styles.header__profileBox__button}>북마크</button>
            <span className={styles.header__profileBox__userName}>nalmi | github.com/Minal002</span>
        </div>
    </div>
  )
}

export default CommonHeader