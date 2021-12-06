<script>
	import { goto } from '$app/navigation';
	import { t, locale, locales } from 'svelte-intl-precompile';
  import { siteSettings } from '$lib/store.js';
	import LangSwitcher from '$components/layout/LangSwitch.svelte';
  import SvgLogo from '$basic/SvgLogo.svelte';

	export let meta = true;
</script>

<header id="siteheader" class="header">
	<div class="logo-wrapper">
		<SvgLogo size="45" on:click="{() => goto('/')}" />
		{#if meta}
		<div class="extra-meta">
			<span class="pink phone">{$siteSettings.phone}</span>
      <span class="towns">{$siteSettings.cities}</span>
		</div>
		{/if}
	</div><!-- /logo-wrapper -->

	<LangSwitcher/>
</header>

<style lang="scss">
#siteheader {
	user-select: none;
	display: grid;
	z-index: 10;
	grid-column: 1 / -1;
	grid-template-columns: 3fr 1fr;
	padding: 1rem;
	// background: linear-gradient(45deg, var(--bg), transparent);
	// position: sticky;
	// top: 0;
	@media screen and (min-width: 768px) {
		grid-column: 2 / -2;
		padding: 1rem 0;
	}

	&:global(.logo) { filter: brightness(var(--brightness)); }

	.logo-wrapper {
		display: flex;

		.extra-meta {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			color: var(--color-blue);
			font-style: italic;
			cursor: default;

			.phone {
				font-weight: bold;
				font-size: 1.2rem;
				color: var(--color-red);
				line-height: 1;
			}
		}
	}
}
</style>