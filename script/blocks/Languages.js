import { DivObj } from "../DivObj.js";

export class Languages {
  constructor(languages) {
    const languagesBlock = new DivObj('languages-block')

    languagesBlock.appendChild(new DivObj('block-header', 'Languages'))

    const languagesBlockBody = new DivObj('block-body')

    languages.forEach((language) => {
      const languageBlock = new DivObj('language-block')

      languageBlock.appendChild(new DivObj('language-name', language.languageName))

      languageBlock.appendChild(new DivObj('language-level', language.level))

      languagesBlockBody.appendChild(languageBlock)
    })

    languagesBlock.appendChild(languagesBlockBody)

    return languagesBlock
  }
}