import { IWrappedComponentProps } from '@/types/common'
import {
  ForwardRefExoticComponent,
  MutableRefObject,
  RefAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'

export function withClickOutside(
  WrappedComponent: ForwardRefExoticComponent<
    IWrappedComponentProps & RefAttributes<HTMLDivElement>
  >
) {
  const Component = () => {
    const [open, setOpen] = useState(false)
    const ref = useRef() as MutableRefObject<HTMLDivElement>

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (!ref.current.contains(e.target as HTMLDivElement)) {
          setOpen(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [ref])

    return <WrappedComponent open={open} setOpen={setOpen} ref={ref} />
  }

  return Component
}


// Вот как это работает:

// Создается ссылка (ref) на элемент DOM, который будет обернут в WrappedComponent.
// Создается состояние open с помощью хука useState, которое изначально устанавливается в false.
// С помощью хука useEffect добавляется слушатель событий mousedown к документу при монтировании компонента. Этот слушатель вызывает функцию handleClickOutside, которая проверяет, содержит ли элемент, на который ссылается ref, цель события клика (e.target). Если нет, то устанавливает open в false.
// Когда компонент размонтируется, слушатель событий удаляется, чтобы избежать утечек памяти.
// Возвращается WrappedComponent с пропсами open, setOpen и ref.
// Таким образом, любой компонент, обернутый в эту функцию, будет закрываться, когда пользователь кликает вне его области. Это может быть полезно, например, для модальных окон или выпадающих меню.