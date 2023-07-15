import { DivObj } from "../DivObj.js"

export class Career {
  constructor(careerTrack) {
    const career = new DivObj('career-block')

    for (const experience of careerTrack) {

      const workExperience = new DivObj('work-experience')

      const rest = new DivObj('rest')

      const general = new DivObj('general')

      const positionCompanyName = new DivObj('position-company-name')

      positionCompanyName.appendChild(new DivObj('position', experience.position))

      const onSiteRemoteCompanyName = new DivObj('on-site-remote-company-name')

      onSiteRemoteCompanyName.appendChild(new DivObj('on-site-remote', `${experience.onSiteRemote} at`))

      onSiteRemoteCompanyName.appendChild(new DivObj('company-name', experience.companyName))

      positionCompanyName.appendChild(onSiteRemoteCompanyName)

      general.appendChild(positionCompanyName)
      general.appendChild(new DivObj('dates-duration', `${experience.dates} <br> ${experience.duration}`))

      rest.appendChild(general)
      rest.appendChild(new DivObj('description', experience.description))

      workExperience.appendChild(rest)

      const timeline = new DivObj('timeline')
      timeline.appendChild(Object.assign(document.createElement('img'), {
        src: '././assets/ellipse.svg'
      }))
      timeline.appendChild(new DivObj('vl'))

      workExperience.appendChild(timeline)

      career.appendChild(workExperience)
    }

    return career
  }
}