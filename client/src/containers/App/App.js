import React, { Component, Fragment } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import styles from './App.module.css'
import Hero from '../../components/Hero/Hero'

class App extends Component {
  state = {
    isScrolled: false
  }

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      this.setState({ isScrolled: true })
    } else {
      this.setState({ isScrolled: false })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    const cursor = document.getElementById('cursor')
    const links = Array.prototype.slice.call(document.querySelectorAll('a'))
    const headings = Array.prototype.slice.call(document.querySelectorAll('h1'))
    const enlargeCursorOn = links.concat(headings)

    document.addEventListener('mousemove', e => {
      const { clientX, clientY } = e
      cursor.style.left = clientX + 'px'
      cursor.style.top = clientY + 'px'
    })
    enlargeCursorOn.forEach(element => {
      element.addEventListener('mouseleave', () => {
        cursor.style.width = '20px'
        cursor.style.height = '20px'
      })
      element.addEventListener('mouseover', () => {
        cursor.style.width = '44px'
        cursor.style.height = '44px'
      })
    })
  }

  render() {
    return (
      <Fragment>
        <div className={styles.cursor} id="cursor"></div>
        <Navbar scrolled={this.state.isScrolled} />
        <Hero />
        <div style={{ width: '1px', height: '100vh' }}></div>
      </Fragment>
    )
  }
}

export default App
