import React, { Component } from 'react'
import styles from './PersonCard.module.css'

export default class PersonCard extends Component {
  render() {
    const { name, email, phone, address, image } = this.props
    return (
      <div className={styles.PersonCard}>
        <div className={styles.imageContainer}>
          <img src={this.props.image} alt="Profile" className={styles.profileImage} />
        </div>
        <div className={styles.details}>
            <h2>{this.props.name}</h2>
            <div>{this.props.work}</div>
            <div>{this.props.school}</div>
            <div>{this.props.email}</div>
        </div>
      </div>
    )
  }
}
