import { DivObj } from "../DivObj.js"

export class Career {
  constructor(careerTrack) {
    const career = new DivObj('career-block')

    // career.appendChild(new DivObj('block-header', 'Career summary'))

    for (const experience of careerTrack) {

      const workExperience = new DivObj('work-experience')

      workExperience.appendChild(new DivObj('dates-duration', `${experience.dates} <br> ${experience.duration}`))

      const rest = new DivObj('rest')

      rest.appendChild(new DivObj('position', experience.position))

      const onSiteRemoteCompanyName = new DivObj('on-site-remote-company-name')

      onSiteRemoteCompanyName.appendChild(new DivObj('on-site-remote', `${experience.onSiteRemote} at`))

      onSiteRemoteCompanyName.appendChild(new DivObj('company-name', experience.companyName))

      rest.appendChild(onSiteRemoteCompanyName)

      rest.appendChild(new DivObj('description', experience.description))

      workExperience.appendChild(rest)

      career.appendChild(workExperience)
    }

    return career
  }
}