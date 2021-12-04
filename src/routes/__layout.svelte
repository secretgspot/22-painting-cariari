<script>
  import { addMessages, init, getLocaleFromNavigator /*, register */ } from 'svelte-intl-precompile';
  import en from '$locales/en.json';
  import es from '$locales/es.json';
  // @ts-ignore
  addMessages('en', en);
  addMessages('es', es);
  // register('es', () => import('$locales/en.js')); <-- use this approach if you want locales to be load lazily
  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator()
  });
	// import '../../static/global.css';
  // import Header from '$layout/Header.svelte';
  // import Footer from '$layout/Footer.svelte';

  import { goto, invalidate, prefetch, prefetchRoutes } from '$app/navigation';
	import { getStores, navigating, page, session } from '$app/stores';
</script>

<slot />