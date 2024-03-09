'use client'
import { useEffect } from 'react'
import { useTheme } from '../../../hooks/useTheme'
import styles from '@/styles/modeToggler/index.module.scss'
import { useAppSelector } from '@/lib/hooks'

const ModeToggler = () => {
  const { toggleTheme } = useTheme()
  const currentThemeMode = useAppSelector((state) => state.themeMode.mode)

  const handleToggleMode = () => {
    toggleTheme()
    document.body.classList.toggle('dark_mode')
  }

  useEffect(() => {
    document.body.classList.add(
      currentThemeMode === 'dark' ? 'dark_mode' : 'body'
    )
  }, [currentThemeMode])

  return (
    <div className={styles.theme}>
      <input
        className={styles.theme__input}
        type="checkbox"
        checked={currentThemeMode === 'light'}
        onChange={handleToggleMode}
      />
    </div>
  )
}

export default ModeToggler
