import React, { Component } from 'react'
import firebase from '../../firebase'

import styles from './Verify.module.css'
import upperDeisgn from '../../assets/images/SVGs/verify/Asset_2.svg'
import lowerDesign from '../../assets/images/SVGs/verify/Asset_3.svg'
import badgeSvg from '../../assets/images/SVGs/verify/Asset_1.svg'
import certiNotFoundSvg from '../../assets/images/SVGs/verify/404.svg'
import Heading from '../../components/Heading/Heading'

const getDate = dateStr => {
  const st = ['1', '21', '31']
  const nd = ['2', '22']
  const rd = ['3', '23']
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const dateSplitted = dateStr.split('-')

  if (st.includes(dateSplitted[0])) {
    return dateSplitted[0] + 'st ' + months[parseInt(dateSplitted[1]) - 1] + ' ' + dateSplitted[2]
  } else if (nd.includes(dateSplitted[0])) {
    return dateSplitted[0] + 'nd ' + months[parseInt(dateSplitted[1]) - 1] + ' ' + dateSplitted[2]
  } else if (rd.includes(dateSplitted[0])) {
    return dateSplitted[0] + 'rd ' + months[parseInt(dateSplitted[1]) - 1] + ' ' + dateSplitted[2]
  } else {
    return dateSplitted[0] + 'th ' + months[parseInt(dateSplitted[1]) - 1] + ' ' + dateSplitted[2]
  }
}

class Verify extends Component {
  constructor() {
    super()

    this.ref = firebase.database().ref().child('events')

    this.state = {
      isVerified: null,
      eventName: '',
      eventDate: '',
      participantName: ''
    }
  }

  componentDidMount() {
    this.ref.on('value', snap => {
      const events = snap.val()
      let isVerified = false
      for (let i = 0; i < events.length; ++i) {
        const eventName = events[i].name
        const eventDate = events[i].date

        const participants = events[i].participants
        for (let j = 0; j < participants.length; ++j) {
          if (participants[j].hash === this.props.match.params.id) {
            isVerified = true
            this.setState({
              isVerified: true,
              eventName: eventName,
              eventDate: eventDate,
              participantName: participants[j].name
            })
            break
          }
        }

        if (isVerified) {
          break
        }
      }
      if (!isVerified) {
        this.setState({ isVerified: false })
      }
    })
  }

  render() {
    return (
      <section className={styles.verify}>
        {this.state.isVerified === true ?
          <div>
            <img src={upperDeisgn} className={styles.upperDesign} alt="upper design" />
            <img src={lowerDesign} className={styles.lowerDesign} alt="lower design" />
            <div className={styles.container}>
              <div className={styles.main}>
                <p>VERIFICATION</p>
                <Heading>Certificate is <span>Verified</span></Heading>
                <div className={styles.card}>
                  <div className={styles.eventName}>
                    {this.state.eventName}
                  </div>
                  <div className={styles.details}>
                    <p>NAME</p>
                    <span>{this.state.participantName}</span>
                    <p>DATE</p>
                    <span>{getDate(this.state.eventDate)}</span>
                  </div>
                </div>
              </div>
              <div className={styles.badgeContainer}>
                <img src={badgeSvg} className={styles.badge} alt="badge svg" />
              </div>
            </div>
          </div> :
          null}
        {this.state.isVerified === false ?
          <div>
            <img src={upperDeisgn} className={styles.upperDesign} alt="upper design" />
            <img src={lowerDesign} className={styles.lowerDesign} alt="lower design" />
            <div className={styles.container404}>
              <Heading>SORRY! No <span>Certificate</span> found</Heading>
              <img src={certiNotFoundSvg} className={styles.certi404} alt="certificate not found" />
            </div>
          </div> :
          null}
      </section>
    )
  }
}

export default Verify
