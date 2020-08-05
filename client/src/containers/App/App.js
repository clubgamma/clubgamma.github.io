import React, { Component, Fragment } from 'react'

import Navbar from '../../components/Navbar/Navbar'

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
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <Fragment>
        <Navbar scrolled={this.state.isScrolled} />
        <div style={{ height: '150vh', width: '100vw' }}></div>
      </Fragment>
    )
  }
}

export default App
