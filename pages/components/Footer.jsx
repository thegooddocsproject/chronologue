import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
    let dateObj = new Date
    let currentYear = dateObj.getFullYear()
  return (
      <>
      <section className={style.footer}>
      <hr className={style.bar}/>
    <div className={style.footer_flex}>
        <img src="" alt="" />
        <p>@ {currentYear} Chronologue</p>
        <ul className={style.list}>
            <li className={style.list_item}>Terms</li>
            <li className={style.list_item}>Privacy</li>
            <li className={style.list_item}>Security</li>
            <li className={style.list_item}>Contact</li>
            <li className={style.list_item}>About</li>
        </ul>
    </div>
    </section>
  </>
  )
}
