import { TextBlock } from './blocks/TextBlock.js'
import { Header } from './Header.js'
import { Career } from './blocks/Career.js'
import { Education } from './blocks/Education.js'
import { Languages } from './blocks/Languages.js'
import { TabContainer } from './TabContainer.js'
import { DivObj } from './DivObj.js'
import { ProjectsHighlights } from './blocks/ProjectsHighlights.js'

fetch('./data/cv.json')
  .then((response) => response.json())
  .then(json => {
    const cvData = json
    cvBuilder(cvData)
  })
  .catch((e) => {
    console.log(e)
  })

function cvBuilder(cvData) {
  const container = Object.assign(document.createElement('div'), {
    className: 'container'
  })

  const header = new Header(cvData.avatarPath, cvData.fullName, cvData.position, cvData.contactInformation)
  container.appendChild(header)

  container.appendChild(document.createElement('hr'))
  const tabContainer = new TabContainer(tabsCreator(cvData))
  container.appendChild(tabContainer.div)

  document.querySelector('body').appendChild(container)
}

function tabsCreator(cvData) {
  const tabs = []

  if (cvData.profile) {
    const profileContent = new DivObj('container')
    profileContent.appendChild(new TextBlock('Profile', cvData.profile))
    profileContent.appendChild(document.createElement('hr'))

    if (cvData.languages) profileContent.appendChild(new Languages(cvData.languages))

    tabs.push({ title: 'Profile', content: profileContent })
  }

  if (cvData.career) tabs.push({ title: 'Career summary', content: new Career(cvData.career) })

  if (cvData.projectsHighlights) tabs.push({ title: 'Projects highlights', content: new ProjectsHighlights(cvData.projectsHighlights) })

  if (cvData.educations) tabs.push({ title: 'Educations', content: new Education(cvData.educations) })

  return tabs
}