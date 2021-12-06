<script>
	import { t, locale, locales } from 'svelte-intl-precompile';
	import SvgIcon from '$basic/SvgIcon.svelte';
</script>

<div class="language">
	{#each $locales as item}
		<span
			class="a"
			class:selected={$locale.includes(item)}
			href={`#!${item}`}
			on:click={() => ($locale = item)}>
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