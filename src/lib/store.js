import { readable } from 'svelte/store';

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