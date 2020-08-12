import React, { Component } from 'react'

import styles from './FAQs.module.css'
import FAQ from '../../components/FAQ/FAQ'

class FAQs extends Component {
  state = {
    faqs: [
      { title: 'What is Club Gamma ?', desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
      { title: 'Do I need to be very good at coding to be a part of Club Gamma ?', desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
      { title: 'What is the selection process for entering the core team ?', desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
      { title: 'When will the application for core team open again ?', desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
      { title: 'How to enter Club Gamma ?', desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
      { title: 'Is Club Gamma a profitable organization ?', desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
      { title: 'What if my questions are not answered in FAQ\'s section ?', desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
      { title: 'I don\'t want to ask questions anymore', desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
    ],
    openedFAQs: []
  }

  toggleExpand = key => {
    const index = this.state.openedFAQs.indexOf(key)
    if (index !== -1) {
      this.setState(prevState => ({
        openedFAQs: [...prevState.openedFAQs.slice(0, index), ...prevState.openedFAQs.slice(index + 1)]
      }))
    } else {
      this.setState(prevState => ({
        openedFAQs: [...prevState.openedFAQs, key]
      }))
    }
  }

  render() {
    return (
      <div className={styles.faqContainer}>
        {this.state.faqs.map((faq, index) =>
          <FAQ
            key={index}
            index={index}
            title={faq.title}
            desc={faq.desc}
            open={this.state.openedFAQs.includes(index)}
            toggleExpand={this.toggleExpand}
          />
        )}
      </div>
    )
  }
}

export default FAQs
