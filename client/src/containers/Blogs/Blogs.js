import React, { Component } from 'react'
import axios from 'axios'

import styles from './Blogs.module.css'
import ellipseImg from '../../assets/images/Ellipse.png'
import maskImg from '../../assets/images/Mask_Group.png'
import Heading from '../../components/Heading/Heading'
import Blog from '../../components/Blog/Blog'

class Blogs extends Component {
  state = {
    blogs: []
  }

  componentDidMount() {
    axios
      .get('https://raw.githubusercontent.com/clubgamma/clubgamma.github.io/master/JSON/blogs.json')
      .then(res => {
        this.setState({ blogs: res.data.blogs })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <section id="blogs" className={styles.blogs}>
        <div className={styles.headingContainer}>
          <Heading>What <span>events</span> we did ?</Heading>
          <p>This is timeline of events organized by Club Gamma and also the insightful blogs written by Team Gamma</p>
        </div>
        {this.state.blogs.map((blog, index) =>
          index % 2 === 0
            ? <Blog
              data={blog}
              order="L2R"
              total={this.state.blogs.length}
              current={index}
              key={index}
            />
            : <Blog
              data={blog}
              order="R2L"
              total={this.state.blogs.length}
              current={index}
              key={index}
            />
        )}
        <img src={ellipseImg} className={styles.ellipse1} alt="ellipse" />
        <img src={ellipseImg} className={styles.ellipse2} alt="ellipse" />
        <img src={maskImg} className={styles.mask} alt="mask" />
      </section>
    )
  }
}

export default Blogs
