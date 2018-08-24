import React from 'react'
import { PageHeader } from './page-header'
import { PageDescription } from './page-description'

const AboutPage = () => (
  <div className="Main">
    <PageHeader>About Daily Pull</PageHeader>
    <PageDescription>
      Daily Pull is an app for tracking your daily tarot card pull.  
      Daily Pull is for anyone, from beginners who want to learn more about tarot
      to advanced tarot readers who want to track the patterns of their pulls. 
    </PageDescription>
    <PageDescription>
      Daily Pull is made by <a href="https://medium.com/@ammmye">Amy Schmidt</a> using tarot information aggregated from <a href="https://www.biddytarot.com/"> Biddy Tarot </a> 
      and <a href="https://labyrinthos.co/">Labyrinthos</a>.
    </PageDescription>
  </div>
)

export default AboutPage