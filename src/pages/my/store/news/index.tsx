import UserLayout from '@/layouts/user-layout'
import StoreNewsView from '@/views/my/store/news/store-news-view'
import React from 'react'

const Page = () => {
  return (
    <UserLayout>
      <StoreNewsView />
    </UserLayout>
  )
}

export default Page
