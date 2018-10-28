import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby';
import Header from './header'
import '../stylesheets/style.scss';
import bujinkan_logo from '../images/bujinkan-logo.png';
import map from '../images/map.jpg';

const Quote = ({ text, by }) => {
  if (!text) return null;

  return (
    <div className="quotes">
      <div className="container">
        <blockquote className="text-light">
          <p className="lead">{text}</p>
          <footer className="blockquote-footer">{by}</footer>
        </blockquote>
      </div>
    </div>
  );
}

const Layout = ({ children, background, quote_text, quote_by }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Swindon Ninjutsu Dojo' },
            { name: 'keywords', content: `martial arts, kung fu, ninjutsu, self defence, fighting, mma, weapon defence, weaponary, karate, jujitsu, budo, bujinkan, karate,
boxing, self defence, kick boxing, ninjutsu, training, fitness, mma, wrestling, tai chi, bujikan, swindon, martial arts, bruce lee, defend, weapons, street fight,
best defence, locks, throws, rolls, movement, ninja, technique, footwork, the art of distance, ground fighting, mental, confidence, jujitsu, budo, nine schools,
black belt, belt, japanese, japan, flexibility, reduce stress, goal setting, learn discipline, adults, children, kids, bullying, anti bullying, stop bullies,
class times, wiltshire, calne, sports, gallery, pics, videos, info, paul stubbs` },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            { content: 'e=edge', 'http-equiv': 'x-ua-compatible' },
            { charset: 'utf-8' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <div className={`content ${background ? 'has-background' : null}`} style={{ backgroundImage: `url(${background})` }}>
          <div className="container">
            {children}
          </div>
        </div>
        <Quote text={quote_text} by={quote_by} />
        <footer className="last">
          <div className="container">
            <div className="row align-items-center mb-4">
              <div className="col-lg-12">
                <div className="card-deck">
                  <div className="card">
                    <div className="card-header">Contact us</div>
                    <div className="card-body">
                      <p>To talk to one of the team or to ask about the free introductory lesson you can:</p>
                      <p>Email us at <a href="mailto:hello@ninjutsuswindon.co.uk">hello@ninjutsuswindon.co.uk</a></p>
                      <div className="social-links">
                        <a href="#">
                          <i className="icon-facebook" />
                        </a>
                        <a href="#">
                          <i className="icon-twitter" />
                        </a>
                        <a href="#">
                          <i className="icon-insta" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">Find us</div>
                    <img src={map} alt="" className="card-img-top"/>
                    <div className="card-body">
                      <ul className="list-unstyled">
                        <li>Unit 55 BSS House</li>
                        <li>Cheney Manor Industrial Estate</li>
                        <li>Swindon SN2 2PJ</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">Class times</div>
                    <div className="card-body">
                      <dl className="row">
                        <dt className="col-sm-6">Monday</dt>
                        <dd className="col-sm-6">7pm to 8pm</dd>
                        <dt className="col-sm-6">Tuesday</dt>
                        <dd className="col-sm-6">6:15pm to 8pm</dd>
                        <dt className="col-sm-6">Wednesday</dt>
                        <dd className="col-sm-6">7pm to 8pm</dd>
                        <dt className="col-sm-6">Thursday</dt>
                        <dd className="col-sm-6">6:15pm to 8pm</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-lg-3">
                <img src={bujinkan_logo} alt="" />
              </div>
            </div>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
