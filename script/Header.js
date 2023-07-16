import { DivObj } from "./DivObj.js"

export class Header {
  constructor(avatarPath, fullName = 'Name LastName', position = 'Position', contactInformationList) {

    const header = new DivObj('header')

    const person = new DivObj('person')

    const namePosition = new DivObj('name-position')

    namePosition.appendChild(new DivObj('name', fullName))

    namePosition.appendChild(new DivObj('position', position))

    person.appendChild(Object.assign(document.createElement('img'),
      {
        src: avatarPath
      }))
    person.append(namePosition)

    const contacts = new DivObj('contactInformation')

    contactInformationList.forEach(contactData => {
      const contact = new DivObj('contact')

      if (contactData.iconPath) {
        contact.appendChild(Object.assign(document.createElement('img'), {
          src: contactData.iconPath
        }))
      }

      contact.appendChild(new DivObj('', `${contactData.title}: ${(contactData.bodyLink) ? '<a href="' + contactData.bodyLink + '">' + contactData.body + '</a>' : contactData.body}`))

      contacts.appendChild(contact)
    })

    header.appendChild(person)
    header.appendChild(contacts)

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
