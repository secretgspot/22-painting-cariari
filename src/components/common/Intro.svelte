<script>
  import { inview } from 'svelte-inview';
	import { t, locale, locales } from 'svelte-intl-precompile';
  import { siteSettings } from '$lib/store.js';
  import SvgIcon from '$basic/SvgIcon.svelte';
  import Button from '$basic/Button.svelte';

  // $: isInView = false;
  // let scrollDirection;
  // const options = {
  //   unobserveOnEnter: false,
  // };

  // const handleChange = ({ detail }) => {
  //   isInView = detail.inView;
  //   scrollDirection = detail.scrollDirection.vertical;
  // };
</script>

<section id="section--intro" class="content-wrapper">
  <p>{$t("intro.p_1")}</p>
  <p>{$t("intro.p_2")}</p>

  <SvgIcon type="seal" size="120" />
</section>

<style lang="scss">
#section--intro {
	display: grid;
	text-align: justify;
	justify-items: center;
	justify-content: center;
	place-self: center;
	grid-template-areas:
    "p1"
    "p2"
    "seal";
	grid-column: 2 / -2;
	margin: 3rem 0 6rem;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    grid-template-areas:
      "p1 p1"
      "p2 seal";
    grid-template-columns: 3fr 1fr;
    font-size: larger;
    max-width: 630px;
  }

  @media screen and (min-width: 960px) {
    font-size: x-large;
  }

  // &::before {
  //   content: "";
	//   // background: pink;
  //   position: absolute;
  //   width: 60%;
  //   height: 90px;
  //   bottom: 123px;
  //   transform: perspective(32px) rotateX(32deg);
  //   border: 12px solid var(--border);
  //   border-bottom: 0;
  //   border-top: 0;
  // }

  p {
    font-weight: 600;
    margin-bottom: 1rem;
    &:first-of-type { grid-area: p1; }
    &:last-of-type { grid-area: p2; }

    @media screen and (min-width: 768px) {
      &:last-of-type { padding-right: 1rem; }
    }
  }

  :global(.guarantee-seal) {
    grid-area: seal;
    margin: 1rem auto 0rem;

    @media screen and (min-width: 768px) {
      height: auto;
      width: 100%;
      margin: 0;
    }
  }
  :global(.seeing) { animation: jello-horizontal var(--duration) both; }
}
</style>