'use client'
/* eslint-disable @next/next/no-img-element */
// import { useStore } from 'effector-react'
// import { $mode } from '@/context/mode'
// import { setDisableCart } from '@/context/shopping-cart'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import CartPopup from './CartPopup/CartPopup'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import SearchInput from '@/components/elements/Header/SearchInput'
import ModeToggler from '@/components/elements/ModeToggler/ModeToggler'
import styles from '@/styles/header/index.module.scss'
import { useAppSelector } from '@/lib/hooks'
import ShoppingCartSvg from '@/components/elements/ShoppingCartSvg/ShoppingCartSvg'

const HeaderBottom = () => {
  const isMedia950 = useMediaQuery(950)
  const currentThemeMode = useAppSelector((state) => state.themeMode.mode)
  const darkModeClass = currentThemeMode === 'dark' ? `${styles.dark_mode}` : ''
  // const pathName = usePathname()

  // useEffect(() => {
  //   if (pathName === '/order') {
  //     setDisableCart(true)
  //     return
  //   }

  //   setDisableCart(false)
  // }, [pathName])

  return (
    <div className={styles.header__bottom}>
      <div className={`container ${styles.header__bottom__container}`}>
        <h1 className={styles.header__logo}>
          <Link href="/dashboard" legacyBehavior passHref>
            <a className={styles.header__logo__link}>
              <img src="/img/logo.svg" alt="logo" />
              <span
                className={`${styles.header__logo__link__text} ${darkModeClass}`}
              >
                Детали для газовых котлов
              </span>
            </a>
          </Link>
        </h1>
        <div className={styles.header__search}>
          <SearchInput />
        </div>
        <div className={styles.header__shopping_cart}>
          {!isMedia950 && <ModeToggler />}
          {/* <CartPopup /> */}
          <ShoppingCartSvg />
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom
