/* eslint-disable vue/multi-word-component-names */
/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export function registerPlugins (app) {
  loadFonts()
  app
    .component('fa', FontAwesomeIcon)
    .use(vuetify)
    .use(router)
}
