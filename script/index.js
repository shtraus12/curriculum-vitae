import { TextBlock } from './blocks/TextBlock.js'
import { Header } from './Header.js'
import { Career } from './blocks/Career.js'

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


  document.querySelector('body').appendChild(container)
}
