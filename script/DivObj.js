export class DivObj {

  sayHiToAnton() {
    alert('Hi, Anton!')
  }

  constructor(_className, _innerHTML) {
    const divObj = Object.assign(document.createElement('div'), {
      className: (_className) ? _className : '',
      innerHTML: (_innerHTML) ? _innerHTML : ''

    })

    return divObj
  }
}