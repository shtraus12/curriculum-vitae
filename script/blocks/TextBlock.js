import { DivObj } from "../DivObj.js"

export class TextBlock {
  constructor(blockHeader, blockText) {
    const textBlock = new DivObj('text-block')

    textBlock.appendChild(new DivObj('block-header', blockHeader))

    textBlock.appendChild(new DivObj('block-body', blockText))


    return textBlock
  }
}


// <div class="block">
//   <div class="block-header">Profile</div>
//   <div class="block-body">
//     <p>
//       Highly motivated IT Project Manager with 6 years professional
//       education and more than 2 years of experience in successfully
//       delivering EdTech, VoIP, FinTech, Medical and Sport projects,
//       managing fully remote teams, publishing mobile apps to stores and
//       more.
//     </p>
//     <br />
//     <p>📈Key achievements:</p>
//     <br />
//     <p>
//       ⚡️Delivered in time Cloud PBX SaaS system developed from scratch
//       Budget: $300’000 Terms: 12 months Current status: waiting for legal
//       certification ⚡️Rapidly delivered to production ERP system for the
//       debt collecting department of the credit organization Business
//       value: department now can have more than 1 employees and manage
//       their tasks Terms: 1.5 months ⚡️Set up more than 5 application
//       stores accounts and published apps (incl. preparing minimal required
//       legal documents, promo materials, setting up in-app purchases,
//       passing review) More than 20’000 downloads on App Store and Google
//       Play ⚡️Zero conflicts with clients including out-of-deadlines
//       deliveries (due to external circumstances) ⚡️Successfully managed
//       full remote teams up to 14 members
//     </p>
//   </div>
// </div>
