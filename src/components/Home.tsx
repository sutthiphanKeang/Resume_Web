import React, { Component } from 'react'
import AboutHome from './AboutHome'
import EducationHome from './EducationHome'
import Experience from './Experience'
import SkillsHome from './SkillsHome'

export default class Home extends Component {
  render() {
    return (
      <>
      <AboutHome />
      <SkillsHome />
      <Experience />
      <EducationHome />
      </>
    )
  }
}
