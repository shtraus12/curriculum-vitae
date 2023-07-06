import { TextBlock } from './blocks/TextBlock.js'
import { Header } from './Header.js'
import { WorkExperience } from './blocks/WorkExperienceBlock.js'

let headerData
let header
let personData

fetch('./data/cv.json')
  .then((response) => response.json())
  .then(json => {
    personData = json
    cvBuilder()
  })
  .catch((e) => {
    console.log(e)
  })

function cvBuilder() {
  const container = Object.assign(document.createElement('div'), {
    className: 'container'
  })

  header = new Header(personData)
  container.appendChild(header)

  if (personData.profile) {
    container.appendChild(document.createElement('hr'))
    container.appendChild(new TextBlock('Profile', personData.profile))
  }


  container.appendChild(new WorkExperience())

  document.querySelector('body').appendChild(container)
}
