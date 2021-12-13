<script>
  import { goto } from '$app/navigation';
	import { getStores, navigating, page, session } from '$app/stores';
	import { t, locale, locales } from 'svelte-intl-precompile';
  import { siteSettings } from '$lib/store.js';
  // import LangSwitcher from '$layout/LangSwitch.svelte';
  import SvgLogo from '$basic/SvgLogo.svelte';
  // import Toucan from '$basic/Toucan.svelte';
</script>

<footer id="sitefooter" class="content-wrapper grid-container">
	<div class="left">
    <!-- <Toucan scale="0.3"></Toucan> -->
    <!-- <LangSwitcher /> -->
	</div><!-- END OF BOTTOM-LEFT -->

	<div class="right">
    <div class="copyright">
			<span>{$t("footer.copyleft.mark")} {$siteSettings.company}</span>
			<a sveltekit:prefetch href="privacy_and_terms">{$t("footer.terms")}</a>
		</div>

    <SvgLogo size="45" footer on:click="{() => goto('/')}" />
	</div><!-- END OF BOTTOM-RIGHT -->
</footer>

<style lang="scss">
#sitefooter {
  user-select: none;
  padding-top: 2rem;
	margin: 6rem 1rem 1rem;
  @media (min-width: 768px) {
    margin: 12rem 1rem 1rem;
  }
	display: flex;
	flex-direction: row;
	grid-column: 1 / -1;
  position: relative;

  &:before {
    content: "";
    background-image: url('/assets/painter_footer.svg');
    height: 222px;
    width: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: -222px;
    background-position: center;
    pointer-events: none;
    z-index: 3;

    @media (min-width: 768px) {
      height: 369px;
      top: -369px;
    }
  }

	.left {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    flex: 1 1 auto;
	}

	.right {
		display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
	}

	:global(.logo) {
		height: 45px;
	}

	// :global(#toucan) { display: none; }

  .copyright {
    font-size: 12px;
    color: var(--txt-tertiary);
    flex: 1 1 auto;
    margin-left: 1rem;
    text-align: right;

    span { display: block; }
    a {
      text-decoration: none;
      color: var(--link);
      &:hover { color: var(--link_hover); }
    }
  }
}
</style>