import React from 'react'
import Layout from '../components/layout'
import background from '../images/background.jpg'

const quote = {
  text: "What I want you to do is just take it as it is. Don't think too much. If you get involved with thinking about it, the whole thing gets lost or loses its purity. Don't think during practice - DO! The more you think, the further from the truth of budo you get: Budo is NOT an academic subject!",
  by: 'Soke Hatsumi Masaaki'
}

const WhatIsNinjutsu = () => (
  <Layout background={background} quote_text={quote.text} quote_by={quote.by}>
    <p>The art of Ninjutsu was born in ancient Japan, the martial art systems used by the Ninjas, the assassins of their time and by the Samurai, the 'Knight'
       class of Japanese warriors. Nine different schools of fighting skill go to make up the arts taught as modern ninjutsu, some of them are battlefield-tested
       combat techniques, others teach stealth and tactics. Unlike many other martial arts, Ninjutsu has no sporting concept but is a true self defence system
       focused on survival whatever the situation.</p>
    <p>Many of todays self defence systems have attempted to modify and rebrand Ninjutsu but have failed because they rely on on speed and strength, and have
      glossed over the subtleties that make Ninjutsu what it is.</p>
    <p>The key pillars of Ninjutsu are distance, timing and movement, something that self defence variations of Ninjutsu often overlook in favour of power and simple
       brutality. It is this focus that means we don’t rely on speed and strength, which fade over time, but rather how to find ways to defeat these. Martial arts
       that rely on speed and strength, which over time will decline, create practitioners who are no longer able to achieve what they once could as they age. Ninjutsu
       practitioners on the other hand focus on developing and improving their understanding of combat strategy and techniques and so practitioners of Ninjutsu only get
       better with age. Adapting to the extra stresses placed on their bodies and their increased understanding of the art will only serve to make them more powerful well
       into the later years of their lives.</p>
  </Layout>
)

export default WhatIsNinjutsu
