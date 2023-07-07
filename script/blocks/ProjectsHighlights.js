import { DivObj } from "../DivObj.js"

export class ProjectsHighlights {
  constructor(projectHighlights) {
    const highlights = new DivObj('projects-highlights-block')

    // career.appendChild(new DivObj('block-header', 'Projects highlights'))

    for (const project of projectHighlights) {

      const projectBlock = new DivObj('project')

      projectBlock.appendChild(new DivObj('dates-duration', `${project.dates} <br> ${project.duration}`))

      const rest = new DivObj('rest')

      rest.appendChild(new DivObj('project-title', project.title))

      rest.appendChild(new DivObj('description', project.description))

      projectBlock.appendChild(rest)

      highlights.appendChild(projectBlock)
    }

    return highlights
  }
}