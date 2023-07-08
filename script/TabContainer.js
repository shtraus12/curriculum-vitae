import { DivObj } from "./DivObj.js";

export class TabContainer {

  moveTo(tab) {
    this.currentTab.titleDiv.className = 'tab'
    tab.titleDiv.className = 'tab-active'
    this.div.querySelector('.tab-content').replaceChildren(tab.contentDiv)
    this.currentTab = tab
  }

  constructor(tabsList = []) {
    this.div = new DivObj('tab-container')
    this.tabs = []

    //Tab navigator

    const tabNavigator = new DivObj('tab-navigator')

    tabsList.forEach((tabFromList, index) => {

      const tab = {
        title: tabFromList.title,
        titleDiv: new DivObj((index === 0) ? 'tab-active' : 'tab', tabFromList.title),
        contentDiv: tabFromList.content
      }
      this.tabs.push(tab)
      tabNavigator.appendChild(tab.titleDiv)
      tab.titleDiv.addEventListener('click', () => { this.moveTo(tab) })
    })

    this.div.appendChild(tabNavigator)

    //set up current tab and content

    this.currentTab = this.tabs[0]
    const tabContent = new DivObj('tab-content')
    tabContent.appendChild(this.currentTab.contentDiv)

    this.div.appendChild(tabContent)
  }
}