import React from 'react'
import Layout from '../components/layout'
import kev from '../images/kevin.jpg';
import paul from '../images/paul.png';
import simon from '../images/simon-2.jpg';
import ciaran from '../images/c.jpg';

const quote = {
  text: "It was the highest honour of my training. To be tested by the grand master in his own dojo. I passed and was awarded the rank of shidoshi - teacher of the warrior arts",
  by: 'Shihan Paul Stubbs'
}

const Instructors = () => (
  <Layout quote_text={quote.text} quote_by={quote.by}>
    <p>Four very experienced and dedicated teachers of the art headed up by shihan Paul Stubbs. Paul has travelled many times to Japan to train with the Japanese masters. In 2003, he was recommended to take the Sakki test (the test of killing intention)</p>
    <div className='card-deck'>
      <div className='card mb-4'>
        <img src={paul} alt="" className="card-img-top" size="250x250" />
        <div className='card-body'>
          <h4 className='card-title'>Shihan Paul Stubbs</h4>
          <h5>Black Belt 15th Dan Bujinkan Ninjutsu</h5>
          <p>Paul Stubbs is a highly skilled instructor with vast experience and knowledge gained from teaching internationally to a wide and varied audience. Paul has taught and trained with members of various police and military units throughout his career.</p>
          <p>As Polarm International CQC Instructor 1, Paul is the special advisor to Polarm International.</p>
          <p>Paul is also knowledgeable about many other martial arts with a 1st Dan in Kung fu and a 1st Dan in Kickboxing.</p>
        </div>
      </div>
      <div className='card mb-4'>
        <img src={kev} alt="" className="card-img-top" size="250x250" />
        <div className='card-body'>
          <h4 className='card-title'>Kevin Anderson</h4>
          <h5>Black Belt 4th Dan Bujinkan Ninjutsu</h5>
          <p>Kevin has been training in the martial arts for over 40 years, spending 30 years training in Shotokan Karate. This has given him a wealth of experience in one of the hardest styles of art and a great insight into movement art and striking and kicking techniques.</p>
          <p>He has spent the last fourteen years studying Ninjutsu under Paul Stubbs, extending his range of understanding to the subtler methods within this art. This combination of hard style and soft style is one of the greatest strengths he can teach you. He is the Senior Instructor within the club, under Chief Instructor Paul Stubbs</p>
        </div>
      </div>
    </div>
    <div className='card-deck'>
      <div className='card mb-4'>
        <img src={simon} alt="" className="card-img-top" size="250x250" />
        <div className='card-body'>
          <h4 className='card-title'>Simon Loeber-Hughes</h4>
          <h5>Black Belt 3rd Dan Bujinkan Ninjutsu</h5>
          <p>Simon has been training under Paul and Kevin for 6 years after looking for a Martial Art that was different to the normal ‘sports’ based arts in the UK. Simon is the only instructor that has not had prior experience in any other Martial Art but this does not defect in his knowledge and teaching.</p>
          <p>Simon has been teaching the children’s classes on off for a number of years which has helped him learn to not use his strength as an advantage. he is now the main instructor for the younglings.</p>
        </div>
      </div>
      <div className='card mb-4'>
        <img src={ciaran} alt="" className="card-img-top" size="250x250" />
        <div className='card-body'>
          <h4 className='card-title'>Ciarán Flynn</h4>
          <h5>Black Belt Bujinkan Ninjutsu</h5>
          <p>Ciarán has been training at Swindon Ninjutsu for 6 years since becoming hooked after his first lesson. Ciarán started his martial arts career in Tae Kwon Do starting at the age of 10, having over 10 years of experience before moving on to other martial arts such as Kick Boxing and Krav Maga.</p>
          <p>Ciarán is also a practitioner of Brazilian Jui Jutsu, developing the ground fighting and grappling aspect of his skill sets.  With this range of backgrounds, Ciarán bring a wide range of experience to his lessons and an strong understanding of the strengths and benefits of Ninjutsu.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Instructors
