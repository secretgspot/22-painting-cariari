import { readable, writable } from 'svelte/store';

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

export const persistStore = (key, initial) => {
	const persist = localStorage.getItem(key);
	const data = persist ? JSON.parse(persist) : initial;

	const store = writable(data, () => {
		const unsubscribe = store.subscribe(value => {
			localStorage.setItem(key, JSON.stringify(value))
		});
		return unsubscribe;
	});
};

export const siteStore = persistStore('test', 'testtting');