import React from 'react'
import Layout from '../components/layout'
import background from '../images/training.jpg'

const quote = {
  text: "What I want you to do is just take it as it is. Don't think too much. If you get involved with thinking about it, the whole thing gets lost or loses its purity. Don't think during practice - DO! The more you think, the further from the truth of budo you get: Budo is NOT an academic subject!",
  by: 'Soke Hatsumi Masaaki'
}

const WhyNinjutsu = () => (
  <Layout background={background} quote_text={quote.text} quote_by={quote.by}>
    <p>Our aim as Ninjutsu practitioners is to use minimal strength in overcoming adversaries; if all your effort is spent overcoming your first adversary, what do you have left for the second, the third?. It has no rules and no sporting concept and is a survival martial art at heart.  Ninjutsu will teach you that strength will count for very little in a system that is tailored to turn strength into weakness.</p>
    <p>Swindon Ninjutsu has an open and friendly atmosphere where you will learn how to defend yourself against armed and unarmed assailants, and how to use your body's size and shape to alter the outcome of combat or attack situations.   We provide highly effective, flexible, practical combat abilities, which are the key to survival in a high stress, real world environment.  One might be faced with a wide range of situations such as close quarter situation i.e. stairwells, hallways, doorways, moving at night or in a vehicle. Techniques have to be usable in everyday situations and when off balance such as being in a chair, being surprise attacked, if injured and with heavy clothing or carrying equipment.  Nobody trains to fight in a night club, but Ninjutsu gives you the skills to deal with all sorts of such surroundings where darkness is not a barrier.</p>
  </Layout>
)

export default WhyNinjutsu
