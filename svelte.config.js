/** @type {import('@sveltejs/kit').Config} */
import path from 'path';
import precompileIntl from "svelte-intl-precompile/sveltekit-plugin.js";
import sveltePreprocess from 'svelte-preprocess';

const config = {
	preprocess: sveltePreprocess(),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
					alias: {
							// these are the aliases and paths to them
							'$static': path.resolve('./static'),
							'$locales': path.resolve('./locales'),
							'$components': path.resolve('./src/components'),
							'$basic': path.resolve('./src/components/basic'),
							'$common': path.resolve('./src/components/common'),
							'$layout': path.resolve('./src/components/layout'),
							// '$lib': path.resolve('./src/lib'),
							'$utils': path.resolve('./src/lib/utils')
					}
			},
      plugins: [
        precompileIntl('locales') // if your translations are defined in /locales/[lang].json
      ]
	}
	}
};

export default config;
