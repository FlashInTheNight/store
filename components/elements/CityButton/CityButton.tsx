'use client'
import LocationSvg from '../LocationSvg/LocationSvg'
import { toast } from 'react-toastify'
import { useAppSelector } from '@/lib/hooks'
import { useEffect, useState } from 'react'
import spinnerStyles from '@/styles/spinner/index.module.scss'
import styles from '@/styles/cityButton/index.module.scss'
import { useAppDispatch } from '@/lib/hooks'
import { setUserCity } from '@/lib/features/user/userSlice'

const CityButton = () => {
  const dispatch = useAppDispatch()
  const currentThemeMode = useAppSelector((state) => state.themeMode.mode)
  const darkModeClass = currentThemeMode === 'dark' ? `${styles.dark_mode}` : ''
  const { city } = useAppSelector((state) => state.user)

  const [spinner, setSpinner] = useState<Boolean>(true)



  const getCity = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }

    const success = async (pos: GeolocationPosition) => {
      try {
        const { latitude, longitude } = pos.coords

        // console.log(`latitude: ${latitude}, longitude: ${longitude}`)

        const response = await fetch(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&lang=ru&apiKey=${process.env.NEXT_PUBLIC_GEOAPI_KEY}`
        )

        const data = await response.json()

        dispatch(
          setUserCity({
            city: data.features[0].properties.city,
            street: data.features[0].properties.address_line1,
          })
        )

        console.log(data)
      } catch (error) {
        toast.error((error as Error).message)
      }
    }

    const error = (error: GeolocationPositionError) =>
      toast.error(`${error.code} ${error.message}`)

    navigator.geolocation.getCurrentPosition(success, error, options)
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      // getCity()
      setSpinner(false)
    } else {
      setTimeout(() => setSpinner(false), 4000)
    }
  }, [])

  return (
    <button className={styles.city} onClick={getCity}>
      <span className={`${styles.city__span} ${darkModeClass}`}>
        <LocationSvg />
      </span>
      <span className={`${styles.city__text} ${darkModeClass}`}>
        {spinner ? (
          <span
            className={spinnerStyles.spinner}
            style={{ top: '-10px', left: 10, width: 20, height: 20 }}
          />
        ) : city?.length ? (
          city
        ) : (
          'Москва'
        )}
      </span>
    </button>
  )
}

export default CityButton
