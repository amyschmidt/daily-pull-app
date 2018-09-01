import React from 'react'
import { PageHeader } from './page-header'
import { PageDescription } from './page-description'

const HowToPage = () => (
  <div className="Main">
    <PageHeader>How To Use Daily Pull</PageHeader>
    <PageDescription>
      To use Daily Pull, you can either use a physical tarot card deck or, 
      if you don't own a physical deck, you can choose at card at random with the "Choose a Random Card" button. 
      You can log one card a day, and view your history to find more details about each card you pull 
      and to track patterns in the cards you pull over time. 
    </PageDescription>
    <PageDescription>
      First, shuffle your tarot cards. 
      When you feel ready, pull the top card.
      Read the description for the card you pull each day and reflect on how it might relate to your life 
      and what you may currently be experiencing. It may give you guidance on how you should handle a situation you 
      are dealing with, it may affirm something you've been working towards, and it even may warn you about what's to come. 
      Over time, you may notice a theme in the cards you pull, whether it be pulling many cards of the same suit 
      or pulling many cards from the Major Arcana. It is also good to reflect on what these themes may mean for you.  
    </PageDescription>
    <PageDescription>
      You can learn more about daily tarot card pulls at <a href="https://www.biddytarot.com/daily-tarot-card/">Biddy Tarot</a>.
    </PageDescription>
  </div>
)

export default HowToPage