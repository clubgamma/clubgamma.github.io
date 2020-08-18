import React from 'react'

import styles from './SocialIcons.module.css'
import Icon from './SocialIcon/SocialIcon'
import githubSvg from '../../assets/images/social_icons/github.svg'
import facebookSvg from '../../assets/images/social_icons/facebook.svg'
import instagramSvg from '../../assets/images/social_icons/instagram.svg'
import linkedinSvg from '../../assets/images/social_icons/linkedin.svg'
import twitterSvg from '../../assets/images/social_icons/twitter.svg'
import youtubeSvg from '../../assets/images/social_icons/youtube.svg'

const socialIcons = props =>
  <div className={styles.iconsContainer}>
    <Icon src={githubSvg} href="#" />
    <Icon src={facebookSvg} href="#" />
    <Icon src={instagramSvg} href="#" />
    <Icon src={linkedinSvg} href="#" />
    <Icon src={twitterSvg} href="#" />
    <Icon src={youtubeSvg} href="#" />
  </div>

export default socialIcons
