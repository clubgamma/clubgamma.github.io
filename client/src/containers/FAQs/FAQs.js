import React, { Component } from 'react'
import axios from 'axios'

import styles from './FAQs.module.css'
import FAQ from '../../components/FAQ/FAQ'

class FAQs extends Component {
  state = {
    faqs: [],
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

  componentDidMount() {
    axios
      .get('https://raw.githubusercontent.com/clubgamma/clubgamma.github.io/master/JSON/FAQs.json')
      .then(res => {
        console.log(res.data)
        console.log(res.data.faqs)
        this.setState({ faqs: res.data.faqs })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className={styles.faqContainer}>
        {this.state.faqs.map((faq, index) =>
          <FAQ
            key={index}
            index={index}
            title={faq.title}
            desc={faq.description}
            open={this.state.openedFAQs.includes(index)}
            toggleExpand={this.toggleExpand}
          />
        )}
      </div>
    )
  }
}

export default FAQs
