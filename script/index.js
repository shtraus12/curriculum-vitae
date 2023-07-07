import { TextBlock } from './blocks/TextBlock.js'
import { Header } from './Header.js'
import { Career } from './blocks/Career.js'
import { Education } from './blocks/Education.js'
import { Languages } from './blocks/Languages.js'

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

  if (cvData.profile) {
    container.appendChild(document.createElement('hr'))
    container.appendChild(new TextBlock('Profile', cvData.profile))
  }

  if (cvData.career) {
    container.appendChild(document.createElement('hr'))
    container.appendChild(new Career(cvData.career))
  }

  if (cvData.educations) {
    container.appendChild(document.createElement('hr'))
    container.appendChild(new Education(cvData.educations))
  }

  if (cvData.languages) {
    container.appendChild(document.createElement('hr'))
    container.appendChild(new Languages(cvData.languages))
  }

  document.querySelector('body').appendChild(container)
}
