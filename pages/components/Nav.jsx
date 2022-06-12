import style from './Nav.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className={style.nav}>
    <Image 
    src='/../public/GalaxyDoctopus.svg' 
    width='12px'
    height='12px'
    alt=''/>
    <p>chronologue</p>
    <ul className={style.list}>
      <li className={style.list_item}>
        <Link href='/'>
        Home
        </Link>
        </li>
      <li className={style.list_item}>
        <Link href='/ApiCall'>
        Events
        </Link>
        </li>
      <li className={style.list_item}>
        <Link href='/EventDetails'>
        Documentation
        </Link>
        </li>
      <li className={style.list_item}>
        <Link href='/Community'>
        Community
        </Link>
        </li>
    </ul>
  </nav>
  )
}
