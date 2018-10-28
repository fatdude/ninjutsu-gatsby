import React from 'react'
import Layout from '../components/layout'
import background from '../images/dojo-2.jpg'

const quote = {
  text: "Don’t think that any one technique is the end. There is no end. There is no perfect technique. Just when you think you’ve got them, you’re dead because you didn’t.",
  by: 'Soke Hatsumi Masaakii'
}

const IndexPage = () => (
  <Layout background={background} quote_text={quote.text} quote_by={quote.by}>
    <p>Ninjutsu is the modern day development of the martial art practiced by the Ninja. It is a martial art based upon techniques that rely on body movement, not strength and power.
      Students learn how to develop powerful self defence techniques through body mechanics.  Ninjutsu is not a sport, it focuses and develops a sense of awareness and the ability to
      deal with a range of hostile situation that may be encountered on the street, it provides ways of overcoming larger attackers, multiple attackers, edged weapons, blunt objects
      and other hazards that can bring harm. Students learn  how to creatively and spontaneously respond to various situations.</p>
    <p>Bujinkan Swindon dojo has been establish for 20 years in Swindon, under the leadership and guidance of Paul Stubbs. As a 15th dan, Paul is one of the highest ranked members of
      Bujinkan ninjutsu in the UK.  Paul is also a qualified instructor in Polearm, specialising in close protection security and has black belts in Kung Fu and Kickboxing. Paul brings
      a traditional and modern perspective to the clubs teachings, recognising the history as well as real world applications ensuring methods learned in the dojo apply on the street.</p>
    <p>At Swindon Ninjutsu students of all capabilities, age and experience are welcome. Ninjutsu is not a sport and as such the primary focus is not on fitness but techniques, practice
      and effectiveness. Students from other martial arts bring a richness to the club which is recognised, most of the instructors have a background in different martial arts before
      finding a home in Ninjutsu.</p>
  </Layout>
)

export default IndexPage
