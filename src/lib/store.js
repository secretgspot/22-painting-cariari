import { readable, writable as internal, get } from 'svelte/store';
import { browser } from '$app/env' // sveltekit environment
import { locale, getLocaleFromNavigator } from 'svelte-intl-precompile';

let settings = {
	author: import.meta.env.VITE_AUTHOR,
	company: import.meta.env.VITE_COMPANY,
	phone: import.meta.env.VITE_PHONE,
	cities: import.meta.env.VITE_CITIES,
	email: import.meta.env.VITE_EMAIL,
	instagurl: import.meta.env.VITE_INSTAGURL,
	googleurl: import.meta.env.VITE_GOOGLE,
	price: import.meta.env.VITE_PRICE_DOLALR,
	exchangeRate: import.meta.env.VITE_EXCHANGERATE
}

export const siteSettings = readable(settings);


/*
	https://github.com/emagining/sveltekit-localstorage-store

	Usage:

	import { writable } from './localStore'

	export const user = writable('user', {
		name: 'there',
		id: 1
	})
*/
export function writable(key, initialValue) {

  const store = internal(initialValue)
  const {subscribe, set} = store
  // check if in client
  if(browser){
    const json = localStorage.getItem(key)
    if (json) { set(JSON.parse(json)) }
  }

  return {
    set(value) {
    // check if in client
      if(browser){
        localStorage.setItem(key, JSON.stringify(value))
      }
      set(value)
    },
    update(cb) {
      const value = cb(get(store))
      this.set(value)
    },
    subscribe
  }
}

export const localSettings = writable('settings', { lang: locale });

// function persistStore() {
// 	const { subscribe, set, update } = writable();
// 	let lang = localStorage.getItem('pc')

// 	return {
// 		lang: lang ? JSON.parse(lang) : localStorage.setItem('pc', JSON.stringify(getLocaleFromNavigator())),
// 		set: value => {localStorage.setItem('pc', JSON.stringify(value)); locale = value;}
// 	};
// }
// export let store = writable(persistStore());