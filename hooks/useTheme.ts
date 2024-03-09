import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { setMode } from '@/lib/features/themeMode/themeModeSlice'
import { useEffect } from 'react'

export const useTheme = () => {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector((state) => state.themeMode.mode)

  const toggleTheme = () => {
    if (themeMode === 'dark') {
      localStorage.setItem('themeMode', JSON.stringify('light'))
      dispatch(setMode('light'))
    } else {
      localStorage.setItem('themeMode', JSON.stringify('dark'))
      dispatch(setMode('dark'))
    }
  }

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem('themeMode') as string)

    if (localTheme) {
      setMode(localTheme)
    }
  }, [])

  return { toggleTheme }
}
