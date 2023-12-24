const CONTANTS = {
  SHORTS_DOM_CLASS: {
    HOME_PAGE: `style-scope ytd-rich-shelf-renderer`, /* Home */
    MINI_GUIDE: `yt-simple-endpoint style-scope ytd-mini-guide-entry-renderer`, /* Mini Guide */
    NAV: `yt-simple-endpoint style-scope ytd-guide-entry-renderer` /* Nav */
  }
}


/**
 * This class is used to disable YouTube Shorts
 * @class DisableShorts
 */
class DisableShorts {

  /**
   * Creates an instance of DisableShorts.
   * @memberof DisableShorts
   */
  constructor() { }

  /**
   * Remove the element from the DOM
   * @param {HTMLElement} dom
   * @memberof DisableShorts
   * @returns {void}
   */
  #rm(dom) {
    dom.remove()
  }

  #disableShorts(elm) {
    const domClass = CONTANTS.SHORTS_DOM_CLASS[elm]
    switch (domClass) {
      case CONTANTS.SHORTS_DOM_CLASS.HOME_PAGE:
        this.#disableHomePage(document.getElementsByClassName(domClass))
        break
      case CONTANTS.SHORTS_DOM_CLASS.MINI_GUIDE:
        this.#disableMiniGuideAndNAV(document.getElementsByClassName(domClass))
        break
      case CONTANTS.SHORTS_DOM_CLASS.NAV:
        this.#disableMiniGuideAndNAV(document.getElementsByClassName(domClass))
        break
      default:
        break
    }
  }

  /**
   * Disable Home Page
   * @param {HTMLElement} elm
   */
  #disableHomePage(elm) {
    Array.from(elm).map(this.#rm)
  }

  /**
   * Disable Mini Guide and NAV
   * @param {HTMLElement} elm
   */
  #disableMiniGuideAndNAV(elm) {
    const miniGuides = Array.from(elm).filter(dom => dom.attributes.title.value === 'Shorts' ? dom : null)
    miniGuides.map(this.#rm)
  }

  /**
   * Disable YouTube Shorts
   * @memberof DisableShorts
   * @returns {void}
   */
  disable() {
    Object.keys(CONTANTS.SHORTS_DOM_CLASS).map(this.#disableShorts.bind(this))
    console.log('DONE: Disable YouTube Shorts')
  }

}

const Welcome = `
RUNNING: Disable YouTube Shorts
Author: @meanii <https://github.com/meanii>
`

console.log(Welcome)

const disableShorts = new DisableShorts()
disableShorts.disable()