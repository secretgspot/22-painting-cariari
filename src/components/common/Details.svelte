<script>
	import { t, locale, locales } from 'svelte-intl-precompile';
  import { siteSettings } from '$lib/store.js';
  import SvgIcon from '$basic/SvgIcon.svelte';
  import Button from '$basic/Button.svelte';
</script>

<section id="section--details" class="content-wrapper">
  <div class="head-text">
    <p>{$t("details.p_1")}</p>
    <p>{$t("details.p_2")}</p>
    <p>{$t("details.p_3")}</p>
    <p>{$t("details.p_4")}</p>
    <p>{$t("details.p_5")}</p>
  </div>
</section>

<style lang="scss">
#section--details {
  padding-bottom: 3em;
  background-repeat: no-repeat;
  background-position: 50% 33%;
  background-size: contain;
  display: none;
  /* display: flex; */
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
  font-size: 110%;
}
#section--details .head-text {
  margin: 2em;
  flex: 1 1 auto;
}
</style>