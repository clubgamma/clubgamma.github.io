import React, { Component, Fragment } from 'react'

import Cursor from '../../components/Cursor/Cursor'
import Navbar from '../../components/Navbar/Navbar'
import Home from '../../components/Home/Home'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import Backdrop from '../../components/Backdrop/Backdrop'
import AboutUs from '../../components/AboutUs/AboutUs'
import Teams from '../Teams/Teams'
import Events from '../Events/Events'
import ContactUs from '../../components/ContactUs/ContactUs'
import Footer from '../../components/Footer/Footer'

class App extends Component {
  state = {
    isScrolled: false,
    isSideDrawerOpen: false,
    sections: [],
    activeSection: '#home'
  }

  handleScroll = () => {
    // Navbar bottom line
    if (window.pageYOffset > 0) {
      this.setState({ isScrolled: true })
    } else {
      this.setState({ isScrolled: false })
    }
    // Navbar active section
    this.state.sections.forEach(section => {
      console.log(section.topPosition, window.pageYOffset, section.bottomPosition)
      if (section.topPosition < window.pageYOffset + 125 && section.bottomPosition > window.pageYOffset) {
        this.setState({ activeSection: section.id })
      }
    })
  }

  drawerToggleHandler = () => {
    this.setState(prevState => ({
      isSideDrawerOpen: !prevState.isSideDrawerOpen
    }))
  }

  backdropClickHandler = () => {
    this.setState({ isSideDrawerOpen: false })
  }

  componentDidMount() {
    // Scroll Event
    window.addEventListener('scroll', this.handleScroll)

    // Get all the section id and position, whose IDs are present in navbar
    let sections = []
    document.getElementById("navItemsContainer").childNodes.forEach(node => {
      const section = document.getElementById(node.hash.slice(1, node.hash.length)).getBoundingClientRect()
      sections.push({ id: node.hash, topPosition: section.top, bottomPosition: section.bottom })
    })
    this.setState({ sections: sections })

    // setTimeout(() => {
    //   document.getElementById("navItemsContainer").childNodes.forEach(node => {
    //     const section = document.getElementById(node.hash.slice(1, node.hash.length)).getBoundingClientRect()
    //     sections.push({ id: node.hash, topPosition: section.top, bottomPosition: section.bottom })
    //   })
    //   this.setState({ sections: sections })
    // }, 5000)

    if (window.screen.width >= 888) {
      // Cursor animations
      const cursor = document.getElementById('cursor')
      const links = Array.prototype.slice.call(document.querySelectorAll('a'))
      const headings = Array.prototype.slice.call(document.querySelectorAll('h2'))
      const btns = Array.prototype.slice.call(document.querySelectorAll('button'))
      const enlargeCursorOn = links.concat(headings.concat(btns))

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
          cursor.style.width = '50px'
          cursor.style.height = '50px'
        })
      })
    }
  }

  render() {
    let backdrop = null;
    if (this.state.isSideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Fragment>
        <Cursor />
        <Navbar
          scrolled={this.state.isScrolled}
          drawerClickHandler={this.drawerToggleHandler}
          activeSection={this.state.activeSection}
        />
        <SideDrawer show={this.state.isSideDrawerOpen} activeSection={this.state.activeSection} />
        {backdrop}

        <Home />
        <AboutUs />
        <Events />
        <Teams />
        <ContactUs />
        <Footer />
      </Fragment>
    )
  }
}

export default App
