import { DivObj } from "../DivObj.js"

export class WorkExperience {
  constructor() {
    const workExperience = Object.assign(document.createElement('div'), {
      className: 'career-block',
    })

    workExperience.appendChild(Object.assign(document.createElement('div'), {
      className: 'block-header',
      innerHTML: 'Career'
    }))

    const singleWorkExperience = Object.assign(document.createElement('div'), {
      className: 'work-experience'
    })

    singleWorkExperience.appendChild(Object.assign(document.createElement('div'), {
      className: 'dates'
    }))

    const rest = Object.assign(document.createElement('div'), {
      className: 'rest'
    })

    rest.appendChild(Object.assign(document.createElement('div'), {
      className: 'position',
      innerHTML: 'Project Manager'
    }))

    const onSiteRemoteCompanyName = Object.assign(document.createElement('div'), {
      className: 'on-site-remote-company-name'
    })

    onSiteRemoteCompanyName.appendChild(Object.assign(document.createElement('div'), {
      className: 'on-site-remote-company-name',
      innerHTML: 'remote'
    }))

    onSiteRemoteCompanyName.appendChild(Object.assign(document.createElement('div'), {

    }))

    singleWorkExperience.appendChild(rest)



    return workExperience
  }
}