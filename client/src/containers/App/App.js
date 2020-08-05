import React, { Component, Fragment } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import styles from './App.module.css'

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
    const links = document.querySelectorAll('a')

    document.addEventListener('mousemove', e => {
      const { clientX, clientY } = e
      cursor.style.left = clientX + 'px'
      cursor.style.top = clientY + 'px'
    })
    links.forEach(link => {
      link.addEventListener('mouseleave', () => {
        cursor.style.width = '20px'
        cursor.style.height = '20px'
      })
      link.addEventListener('mouseover', () => {
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
        <div style={{ height: '150vh', width: '100vw', paddingTop: '144px' }}>
          <h1 style={{ textAlign: 'center' }}>Sample Text</h1>
          <p style={{ padding: '16px 300px' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </Fragment>
    )
  }
}

export default App
