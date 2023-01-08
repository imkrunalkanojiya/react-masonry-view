import React from 'react'
import styles from './styles.module.css'

export const MasonryView = ({imgDetails}) => {
  return (
    <div id={styles.masonry_container}>
      <div className={styles.m_card}>
        {imgDetails.map((data) => {
          return (
            <div className={styles.m_card_img} key={data.id}>
              <img className={styles.m_card_single_img} src={data.imgUrl} alt='card-img' />
            </div>
          )
        })}
      </div>
    </div>
  )
}
