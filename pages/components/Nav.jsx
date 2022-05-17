import style from '../../styles/Nav.module.css'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav className={style.nav}>
    <Image 
    src='/../public/GalaxyDoctopus.svg' 
    width={12}
    height={12}
    alt=''/>
    <p>chronologue</p>
    <ul className={style.list}>
      <li className={style.list_item}>Home</li>
      <li className={style.list_item}>Events</li>
      <li className={style.list_item}>Documentation</li>
      <li className={style.list_item}>Community</li>
    </ul>
  </nav>
  )
}
