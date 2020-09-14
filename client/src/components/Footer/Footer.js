import React from 'react'

import styles from './Footer.module.css'
import Logo from '../../assets/images/logo-round-small.png'
import Heading from '../Heading/Heading'
import Input from '../Input/Input'
import Button from '../Button/Button'
import SocialIcons from '../SocialIcons/SocialIcons'

const footer = props =>
  <footer className={styles.footer}>
    <div className={styles.main}>
      <div className={styles.contactUs}>
        <div className={styles.headingContainer}>
          <h3>CONTACT US</h3>
          <Heading style={{ color: 'white', padding: '6px 0' }}>
            Feel free to <span>get in touch</span> with us
          </Heading>
        </div>
        <p>If you any query related to Club Gamma, just mail us, or else just ping us on social media as we are pretty much active on every social media.</p>
        <form>
          <Input placeholder="Your Email Address" name="email" />
          <Button>CONTACT US</Button>
        </form>
      </div>
      <hr />
      <div className={styles.subscribe}>
        <h3>SUBSCRIBE TO OUR NEWS LETTER</h3>
        <p style={{ paddingTop: '24px' }}>We deliver high quality blog posts written by professionals weekly.</p>
        <p style={{ paddingBottom: '24px' }}>And we promise no spam.</p>
        <form className={styles.subscribeForm}>
          <Input placeholder="Your Email Address" name="email" />
          {window.screen.width >= 888 ? <br /> : null}
          <Button>SUBSCRIBE</Button>
        </form>
      </div>
    </div>
    <div className={styles.bottom}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="club gamma logo" />
      </div>
      <div className={styles.copyrightContainer}>
        <span>2020 Club Gamma. All Rights Reserved</span>
        <a href="https://clubgamma.github.io/code-of-conduct/" target="_blank" rel="noopener noreferrer">Code Of Conduct</a>
      </div>
      <div className={styles.socialMediaIcons}>
        <SocialIcons />
      </div>
    </div>
  </footer>

export default footer
