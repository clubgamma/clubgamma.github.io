import React from 'react'

import styles from './SocialIcons.module.css'
import Icon from './SocialIcon/SocialIcon'
import githubSvg from '../../assets/images/social_icons/github.svg'
import instagramSvg from '../../assets/images/social_icons/instagram.svg'
import youtubeSvg from '../../assets/images/social_icons/youtube.svg'
import linkedinSvg from '../../assets/images/social_icons/linkedin.svg'
import facebookSvg from '../../assets/images/social_icons/facebook.svg'
import twitterSvg from '../../assets/images/social_icons/twitter.svg'
import discordSvg from '../../assets/images/social_icons/discord.svg'

const socialIcons = props =>
  <div className={styles.iconsContainer}>
    <Icon src={githubSvg} href="https://github.com/clubgamma" />
    <Icon src={instagramSvg} href="https://www.instagram.com/club_gamma/" />
    <Icon src={youtubeSvg} href="https://www.youtube.com/channel/UCFO_j0Kml2tT3aFgVUSYGxQ" />
    <Icon src={linkedinSvg} href="https://www.linkedin.com/company/clubgamma/" />
    <Icon src={facebookSvg} href="https://www.facebook.com/clubgamma/" />
    <Icon src={twitterSvg} href="https://twitter.com/club_gamma" />
    <Icon src={discordSvg} href="https://discord.gg/CgMRHtXjrf" />
  </div>

export default socialIcons
