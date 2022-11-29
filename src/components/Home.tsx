import React, { Component } from 'react'
import AboutHome from './AboutHome'
import CompetitionHome from './CompetitionHome'
import EducationHome from './EducationHome'
import ExperienceHome from './ExperienceHome'
import SkillsHome from './SkillsHome'

export default class Home extends Component {
  render() {
    return (
      <>
      <AboutHome />
      <SkillsHome />
      <ExperienceHome />
      <CompetitionHome/>
      <EducationHome />
      </>
    )
  }
}
