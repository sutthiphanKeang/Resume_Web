import React, { Component } from 'react'
import About from './About'
import Education from './Education'
import Experience from './Experience'
import Profile from './Profile'
import Skills from './Skills'

export default class Home extends Component {
  render() {
    return (
        <section>
        <div className = "comtainer">
            <div className = "row">
                <div className = "col s12 m4 l3">
                    <Profile />
                </div>
                <div className = "col s12 m8 l9">
                    <About />
                    <Skills />
                    <Experience />
                    <Education />
                </div>
            </div>
        </div>
        </section>
    )
  }
}
