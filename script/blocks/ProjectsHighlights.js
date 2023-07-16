import { DivObj } from "../DivObj.js"

export class ProjectsHighlights {
  constructor(projectHighlights) {
    const highlights = new DivObj('projects-highlights-block')

    for (const project of projectHighlights) {

      const projectBlock = new DivObj('project')

      const rest = new DivObj('rest')

      const titleDates = new DivObj('title-dates')
      titleDates.appendChild(new DivObj('project-title', project.title))
      titleDates.appendChild(new DivObj('dates-duration', `${project.dates} <br> ${project.duration}`))

      rest.appendChild(titleDates)

      rest.appendChild(new DivObj('description', project.description))

      projectBlock.appendChild(rest)

      const marker = new DivObj('marker')
      marker.appendChild(Object.assign(document.createElement('img'), {
        src: '././assets/ellipse.svg'
      }))

      projectBlock.appendChild(marker)

      highlights.appendChild(projectBlock)
    }

    return highlights
  }
}