import React from 'react'

import styles from './ContactUs.module.css'
import Heading from '../Heading/Heading'
import FAQs from '../../containers/FAQs/FAQs'

const contactUs = props => {
  return (
    // <footer  style={{ width: '1px', height: '100vh', paddingTop: '10vh' }}>Contact Us</footer>
    <section id="contactUs" className={styles.contactUs}>
      <div className={styles.headingContainer}>
        <p>FAQs</p>
        <Heading>You have <span>Questions</span> ?</Heading>
      </div>
      <div className={styles.headingDesc}>
        <p>Don't worry, we've got your back. We have got answers to all of them.</p>
        <p>And in case you didn't find answer to your question, feel free to mail us.</p>
      </div>
      <FAQs />
    </section>
  )
}

export default contactUs
