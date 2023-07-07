import { DivObj } from "../DivObj.js"

export class Education {
  constructor(educations) {
    const educationsBlock = new DivObj('educations-block')

    educationsBlock.appendChild(new DivObj('block-header', 'Education'))

    for (const education of educations) {

      const educationBlock = new DivObj('education-block')

      educationBlock.appendChild(new DivObj('dates', education.dates))

      const rest = new DivObj('rest')

      rest.appendChild(new DivObj('school-name', education.schoolName))
      rest.appendChild(new DivObj('description', education.description))

      educationBlock.appendChild(rest)

      educationsBlock.appendChild(educationBlock)
    }

    return educationsBlock
  }
}