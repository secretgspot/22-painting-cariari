<script>
	import { localSettings } from '$lib/store';
	import { locale, locales } from 'svelte-intl-precompile';
	import SvgIcon from '$basic/SvgIcon.svelte';
</script>

<!-- {JSON.stringify($localSettings, null, 2)} {$locale} -->

<div class="language">
	{#each $locales as item}
		<span
			class="a"
			class:selected={$locale.includes(item)}
			href={`#!${item}`}
			alt="{item}"
			on:click={() => {$locale = item; $localSettings.lang = item}}>
			<SvgIcon type="flag_{item}" size="27" />
		</span>
	{/each}
</div>

<style lang="scss">
	.language {
		display: flex;
		align-items: flex-start;
		justify-content: flex-end;
		flex: 1;

		span {
			display: inline-block;
			padding: 0.2em 0.3em;
			margin: 0.2em;
			border-radius: 3px;
			line-height: 0;
			cursor: pointer;
			color: var(--link);

			&:hover {	color: var(--link_hover); }
			&.selected { border: 1px solid var(--color-red); }
		}
	}
</style>