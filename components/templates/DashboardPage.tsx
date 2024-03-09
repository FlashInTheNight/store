'use client'
// import { useStore } from 'effector-react'
// import { $mode } from '@/context/mode'
// import { getBestsellersOrNewPartsFx } from '@/app/api/boilerParts'
// import { $shoppingCart } from '@/context/shopping-cart'
import DashboardSlider from '@/components/modules/DashboardPage/DashboardSlider'
import CartAlert from '@/components/modules/DashboardPage/CartAlert'
import BrandsSlider from '@/components/modules/DashboardPage/BrandsSlider'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { AnimatePresence, motion } from 'framer-motion'
import type { IBoilerParts } from '@/types/boilerparts'
import styles from '@/styles/dashboard/index.module.scss'
import { useAppSelector } from '@/lib/hooks'
import { useGetBestsellersOrNewPartsFxQuery } from '@/lib/features/api/boilerParts'

const DashboardPage = () => {
  // Стор для корзины start
  // const shoppingCart = useStore($shoppingCart)
  // const [showAlert, setShowAlert] = useState(!!shoppingCart.length)
  // Стор для корзины end
  const currentThemeMode = useAppSelector((state) => state.themeMode.mode)
  const darkModeClass = currentThemeMode === 'dark' ? `${styles.dark_mode}` : ''

  const {
    data: newParts,
    isFetching: newPartsSpinner,
    isError: isNewPartsError,
    error: newPartsError,
  } = useGetBestsellersOrNewPartsFxQuery('/boiler-parts/new')

  if (isNewPartsError) {
    toast.error((newPartsError as Error).message)
  }

  const {
    data: bestsellers,
    isFetching: bestsellersSpinner,
    isError: isBestsellersError,
    error: bestsellersError,
  } = useGetBestsellersOrNewPartsFxQuery('/boiler-parts/bestsellers')

  if (isBestsellersError) {
    toast.error((bestsellersError as Error).message)
  }

  // Логика для корзины
  //---------------------------
  // useEffect(() => {
  //   if (shoppingCart.length) {
  //     setShowAlert(true)
  //     return
  //   }

  //   setShowAlert(false)
  // }, [shoppingCart.length])


  // Логика для корзины
  //---------------------------
  // const closeAlert = () => setShowAlert(false)

  return (
    <section className={styles.dashboard}>
      <div className={`container ${styles.dashboard__container}`}>
        {/* Компонент для корзины */}
        {/* <AnimatePresence>
          {showAlert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`${styles.dashboard__alert} ${darkModeClass}`}
            >
              <CartAlert
                count={shoppingCart.reduce(
                  (defaultCount, item) => defaultCount + item.count,
                  0
                )}
                closeAlert={closeAlert}
              />
            </motion.div>
          )}
        </AnimatePresence> */}
        <div className={styles.dashboard__brands}>
          <BrandsSlider />
        </div>
        <h2 className={`${styles.dashboard__title} ${darkModeClass}`}>
          Детали для газовых котлов
        </h2>
        <div className={styles.dashboard__parts}>
          <h3 className={`${styles.dashboard__parts__title} ${darkModeClass}`}>
            Хиты продаж
          </h3>
          <DashboardSlider
            items={bestsellers?.rows || []}
            spinner={bestsellersSpinner}
          />
        </div>
        <div className={styles.dashboard__parts}>
          <h3 className={`${styles.dashboard__parts__title} ${darkModeClass}`}>
            Новинки
          </h3>
          <DashboardSlider
            items={newParts?.rows || []}
            spinner={newPartsSpinner}
          />
        </div>
        <div className={styles.dashboard__about}>
          <h3
            className={`${styles.dashboard__parts__title} ${styles.dashboard__about__title} ${darkModeClass}`}
          >
            О компании
          </h3>
          <p className={`${styles.dashboard__about__text} ${darkModeClass}`}>
            Инструкции и схемы помогут разобраться в эксплуатации, определить
            неисправность и правильно выбрать запчасть для ремонта Вашего
            газового оборудования. Купить запчасть, деталь для ремонта газового
            котла возможно в любом населенном пункте Российской Федерации:
            Осуществляем доставку запчасти к газовым котлам в следующие города:
            Москва, Сан
          </p>
        </div>
      </div>
    </section>
  )
}

export default DashboardPage
