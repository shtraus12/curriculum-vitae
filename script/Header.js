import { DivObj } from "./DivObj.js"

export class Header {
  constructor(headerData = {}) {

    const header = new DivObj('header')

    const person = new DivObj('person')

    const namePosition = new DivObj()

    namePosition.appendChild(new DivObj('name', headerData.fullName))

    namePosition.appendChild(new DivObj('position', headerData.position))

    person.appendChild(Object.assign(document.createElement('img'),
      {
        src: 'assets/avatar.JPG'
      }))
    person.append(namePosition)

    const contactInformation = new DivObj('contactInformation')

    headerData.contactInformation.forEach(el => {
      contactInformation.appendChild(new DivObj('contact', el))
    })

    header.appendChild(person)
    header.appendChild(contactInformation)

    return header
  }
}


// <div class="header">
//   <div class="person">
//     <img src="assets/avatar.JPG" alt="" />
//     <div class="namePosition">
//       <div class="name">Anton Chernykh</div>
//       <div class="position">IT Project Manager</div>
//     </div>
//   </div>
//   <div class="contactInformation">
//     <div class="contact">E-mail: a.chernykh@pm.me</div>
//     <div class="contact">LinkedIn: linkedin.com/in/shtraus12</div>
//     <div class="contact">Telegram: @shtraus12</div>
//     <div class="contact">
//       Location: Kazakhstan (both relocation and remote work are
//       considered)
//     </div>
//   </div>
// </div>
