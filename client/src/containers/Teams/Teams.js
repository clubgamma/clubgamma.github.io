import React, { Component } from 'react'
import axios from 'axios'

import styles from './Teams.module.css'
import linkedinSvg from '../../assets/images/social_icons/logo-colored/linkedin.svg'
import instagramSvg from '../../assets/images/social_icons/logo-colored/instagram.svg'
import githubSvg from '../../assets/images/social_icons/logo-colored/github.svg'
import twitterSvg from '../../assets/images/social_icons/logo-colored/twitter.svg'
import ellipseImg from '../../assets/images/Ellipse.png'
import maskImg from '../../assets/images/Mask_Group.png'
import Heading from '../../components/Heading/Heading'

class Teams extends Component {
  state = {
    teamsDetails: []
  }

  componentDidMount() {
    axios
      .get('https://raw.githubusercontent.com/clubgamma/clubgamma.github.io/master/JSON/teams.json')
      .then(res => {
        this.setState({ teamsDetails: res.data.teams })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <section id="teams" className={styles.teams}>
        <div className={styles.headingContainer}>
          <Heading>Meet <span>Team</span> Gamma</Heading>
          <p>These are the fine folks who.....</p>
        </div>
        {this.state.teamsDetails.map((row, index) => (
          <div className={styles.row} key={index}>
            {row.map((profile, index) => (
              <div className={styles.profile} key={index}>
                <img src={profile.imageUrl} className={styles.profileImg} alt={'member image ' + index} />
                <p className={styles.position}>{profile.position}</p>
                <h2 className={styles.name}>{profile.name}</h2>
                <div className={styles.socialIcons}>
                  <a href={profile.social.linkedin}><img src={linkedinSvg} alt="linkedin icon" /></a>
                  <a href={profile.social.instagram}><img src={instagramSvg} alt="insta icon" /></a>
                  <a href={profile.social.github}><img src={githubSvg} alt="github icon" /></a>
                  <a href={profile.social.twitter}><img src={twitterSvg} alt="twitter icon" /></a>
                </div>
              </div>
            ))}
          </div>
        ))}
        <img src={ellipseImg} className={styles.ellipse} alt="ellipse" />
        <img src={maskImg} className={styles.mask} alt="mask" />
      </section>
    )
  }
}

export default Teams
