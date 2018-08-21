import React from 'react'
import { PageHeader } from './page-header'
import { PageDescription } from './page-description'

const NotFoundPage = () => (
  <div className="Main">
    <PageHeader>Oh no! That page doesn't exist.</PageHeader>
    <PageDescription>
      It looks like the page you were trying to reach doesn't exist anymore. Try
      heading back to the 
      <a className="Link" href="/">
          home page
      </a>.
    </PageDescription>
  </div>
)

export default NotFoundPage
