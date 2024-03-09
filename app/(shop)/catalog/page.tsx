'use client'
import Head from 'next/head'
import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'
import CatalogPage from '@/components/templates/CatalogPage'
// import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
// import { useCallback } from 'react'
import type { IQueryParams } from '@/types/catalog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Аква Термикс | Каталог',
}


export async function getServerSideProps(context: { query: IQueryParams }) {
  return {
    props: { query: { ...context.query } },
  }
}

function Catalog({ query }: { query: IQueryParams }) {
  return (
    <>
      <main>
        <CatalogPage query={query} />
      </main>
    </>
  )
}


export default Catalog
