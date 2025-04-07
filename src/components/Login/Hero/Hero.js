import React, { Component } from 'react'
import styles from './Hero.module.css'
import Logo from '../../Logo/Logo'
import PersonCard from '../PersonCard/PersonCard'

export default class Hero extends Component {
  render() {
    return (
        <div className={styles.hero}>
            <div className={styles.gradient}></div>
            <div className={styles.content}>
                <Logo size="2em" color='white' padding=".1em" showVersion={true} />
                {/* <div className="signUp">Start using the </div> */}
                <section>an <b>AI-powered 🧠</b>, automated teacher observation tool</section>
                <div className={styles.PersonCardViewer}>
                    <div className={styles.ScrollContainer}>
                    <PersonCard
                     name="Nathan Dilla"
                     work="Computer Science Student"
                     school="Grand Canyon University"
                     email="nathancdilla@gmail.com"
                      />
                    <PersonCard
                     name="Evan Lloyd"
                     work="Computer Science Student"
                     school="Grand Canyon University"
                     email="evanlloyd@gmail.com"
                      />
                    <PersonCard
                     name="Josh Slinkman"
                     work="Computer Science Student"
                     school="Grand Canyon University"
                     email="joshuaslinkymister@gmail.com"
                      />
                    <PersonCard
                     name="Alex Fried"
                     work="Computer Science Student"
                     school="Grand Canyon University"
                     email="alexadander@gmail.com"
                      />
                    <PersonCard
                     name="Thom Luedemann"
                     work="Prinicpal"
                     school="Squidward Highschool"
                     email="squidwardschool@gmail.com"
                      />
                    </div>
                </div>
            </div>
            
            <svg width="0" height="0">
                <filter id="grainFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" result="noise">
                    {/* <animate attributeName="baseFrequency" values="0.5;0.6;0.5" dur="10s" repeatCount="indefinite" /> */}
                </feTurbulence>
                <feColorMatrix type="saturate" values="0" in="noise" result="desaturatedNoise"/>
                <feBlend in="SourceGraphic" in2="desaturatedNoise" mode="multiply"/>
                </filter>
            </svg>
        </div>
    )
  }
}
