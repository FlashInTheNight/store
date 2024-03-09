import axios from 'axios'
import { createEffect } from 'effector-next'

const instance = axios.create({
  withCredentials: true,
  baseURL: `http://localhost:3000`,
})

export default instance


export const getBestsellersOrNewPartsFx = createEffect(async (url: string) => {
  const { data } = await instance.get(url)

  return data
})

export const getBoilerPartsFx = createEffect(async (url: string) => {
  const { data } = await instance.get(url)

  return data
})

export const getBoilerPartFx = createEffect(async (url: string) => {
  const { data } = await instance.get(url)

  return data
})

export const searchPartsFx = createEffect(
  async ({ url, search }: { url: string; search: string }) => {
    const { data } = await instance.post(url, { search })

    return data.rows
  }
)

export const getPartByNameFx = createEffect(
  async ({ url, name }: { url: string; name: string }) => {
    try {
      const { data } = await instance.post(url, { name })

      return data
    } catch (error) {
      console.error((error as Error).message)
    }
  }
)
