'use client'
import { useForm } from 'react-hook-form'
// import { singUpFx } from '@/app/api/auth'
import { useRegisterMutation } from '@/lib/features/api/auth'
import { IInputs } from '@/types/auth'
import NameInput from '@/components/elements/AuthPage/NameInput'
import EmailInput from '@/components/elements/AuthPage/EmailInput'
import PasswordInput from '@/components/elements/AuthPage/PasswordInput'
// import { useState } from 'react'
import { showAuthError } from '@/utils/errors'
import styles from '@/styles/auth/index.module.scss'
import spinnerStyles from '@/styles/spinner/index.module.scss'
import { useAppSelector } from '@/lib/hooks'

const SignUpForm = ({ switchForm }: { switchForm: () => void }) => {
  // const [spinner, setSpinner] = useState(false)
  const [sentRegistrationQuery, { isLoading }] = useRegisterMutation()
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IInputs>()

  const currentThemeMode = useAppSelector((state) => state.themeMode.mode)
  const darkModeClass = currentThemeMode === 'dark' ? `${styles.dark_mode}` : ''

  const onSubmit = async (data: IInputs) => {
    try {
      // setSpinner(true)
      // const userData = await singUpFx({
      //   url: '/users/signup',
      //   username: data.name,
      //   password: data.password,
      //   email: data.email,
      // })

      const userData = await sentRegistrationQuery({
        username: data.name,
        password: data.password,
        email: data.email,
      })

      if (!userData) {
        return
      }

      resetField('email')
      resetField('name')
      resetField('password')
      switchForm()
    } catch (error) {
      // showAuthError(error)
      console.error(error)
    }
  }

  return (
    <form
      className={`${styles.form} ${darkModeClass}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className={`${styles.form__title} ${styles.title} ${darkModeClass}`}>
        Создать аккаунт
      </h2>
      <NameInput register={register} errors={errors} />
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <button
        className={`${styles.form__button} ${styles.button} ${styles.submit} ${darkModeClass}`}
      >
        {isLoading ? <div className={spinnerStyles.spinner} /> : 'SIGN UP'}
      </button>
    </form>
  )
}

export default SignUpForm
