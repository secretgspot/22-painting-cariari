<script>
	import { t, locale, locales } from 'svelte-intl-precompile';
  import { siteSettings } from '$lib/store.js';
  import SvgIcon from '$basic/SvgIcon.svelte';
  import Button from '$basic/Button.svelte';
</script>

<section id="section--powerwash" class="content-wrapper">
  <div class="left-side"></div>
  <div class="right-side">
    <div class="text">
      <h2>{$t("component.powerwash.title")}</h2>
      <p>{$t("component.powerwash.p")}</p>
    </div>
  </div>
</section>

<style>
#section--powerwash {
  user-select: none;
  display: grid;
	grid-template-rows: 1fr 1fr;
}
@media screen and (min-width: 768px) {
  #section--powerwash {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
}
#section--powerwash .left-side {
  flex: 1 0 auto;
  min-height: 300px;
  background-image: url("/assets/backgrounds/powerwash.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: brightness(var(--brightness));
}
#section--powerwash .right-side {
	background-color: var(--bg-secondary);
	color: var(--txt-primary);
	display: flex;
	justify-content: center;
	align-items: center;
}
#section--powerwash .right-side .text {
  margin: 1rem 3em;
}
#section--powerwash .right-side .text h2 {
  font-weight: bold;
}
</style>