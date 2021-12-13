<script>
  import { localSettings } from '$lib/store'
  import { addMessages, init, getLocaleFromNavigator } from 'svelte-intl-precompile';
  import en from '$locales/en.json';
  import es from '$locales/es.json';
  // @ts-ignore
  addMessages('en', en);
  addMessages('es', es);
  // register('es-CR', () => import('$locales/es.json'));
  // register('en-US', () => import('$locales/en.json'));
  // register('es', () => import('$locales/en.js')); <-- use this approach if you want locales to be load lazily

  let lang = typeof($localSettings.lang) == 'string' ? $localSettings.lang : getLocaleFromNavigator();

  init({
    fallbackLocale: 'en',
    initialLocale: lang
  });
	// import '../../static/global.css';
  // import Header from '$layout/Header.svelte';
  // import Footer from '$layout/Footer.svelte';

  // import { goto, invalidate, prefetch, prefetchRoutes } from '$app/navigation';
	// import { getStores, navigating, page, session } from '$app/stores';
  // console.log('$writable', lang );

</script>

<slot />