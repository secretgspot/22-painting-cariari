<script>
  import { fly, slide, fade, blur, scale, draw, crossfade } from 'svelte/transition';
	import { t, locale, locales } from 'svelte-intl-precompile';
  import { siteSettings } from '$lib/store.js';
  import Form from '$common/_Form.svelte';
  import SvgIcon from '$basic/SvgIcon.svelte';
  import Button from '$basic/Button.svelte';

	let showForm = false;
  let showSuccess = false;
</script>

<section id="section--booking" class="content-wrapper">
	{#if !showForm}

  <div class="wrapper">
    {#if showSuccess}
    <!-- Success message -->
    <SvgIcon type="goal" size="123" />
    <h1>{$t("book_now.success.title")}</h1>
    <p>{$t("book_now.success.p")}</p>
    {:else}
      <h1>{$t("book_now.title")}</h1>
      <Button on:click="{() => showForm = !showForm}" mode="needy" color="glass btn_contact">{$t("book_now.button")} <SvgIcon type="booking" size="45" /></Button>
    {/if}
  </div>

	{:else}
	<!-- Form -->
  <Form on:hideForm="{() => showForm = false}" on:showSuccess="{() => showSuccess = true}" />
	{/if}

  <svg class="wave" viewBox="0 24 150 28" preserveAspectRatio="none">
    <defs><path id="gwave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs>
    <g class="parallax1"><use xlink:href="#gwave" x="50" y="3" fill="var(--color-blue)"/></g>
    <g class="parallax2"><use xlink:href="#gwave" x="50" y="0" fill="var(--color-blue)"/> </g>
    <g class="parallax3"><use xlink:href="#gwave" x="50" y="9" fill="var(--color-blue)"/></g>
    <g class="parallax4"><use xlink:href="#gwave" x="50" y="6" fill="var(--bg-primary)"/></g>
  </svg>
</section>

<style lang="scss">
#section--booking {
	display: grid;
	flex-direction: column;
	align-items: center;
	background-color: var(--color-blue);
	color: var(--color-white);
	user-select: none;
	position: relative;
	justify-items: center;

  // &:before {
  //   content: "";
  //   height: 63px;
  //   width: 101%;
  //   background-repeat: repeat-x;
  //   position: relative;
  //   top: -2px;
  //   background: var(--bg-primary);
  //   --svg: url("./assets/bar_drips.svg#drips");
  //   -webkit-mask-image: var(--svg);
  //   mask-image: var(--svg);

  //   @media (min-width: 768px) {
  //     height: 81px;
  //   }
  // }

  .wrapper {
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    max-width: 334px;
    align-items: center;
    text-align: center;

    h1 { margin-bottom: 2rem; }
  }

  :global(.icon_booking) { margin: 0 0 0 1rem; }
  :global(.icon_goal) { animation: puff-in-center var(--duration) ease 1; }

  // @media screen and (min-width: 768px) {
  //   :global(.btn_contact) { transform: scale(1.5); }
  // }

  p {
    width: clamp(33ch, 60%, 63ch);
    text-align: center;
  }
}


.wave {
	grid-column: 1/-1;
	position: relative;
	height: auto;
	max-height: 45px;
	width: 100%;
	margin-top: 6rem;

  .parallax1 > use {
    animation: move-forever1 9s linear infinite;
    &:nth-child(1) {
      animation-delay: -2s;
      filter: brightness(0.6);
    }
  }
  .parallax2 > use {
    animation: move-forever2 6s linear infinite;
    &:nth-child(1) {
      animation-delay: -2s;
      filter: brightness(0.9);
    }
  }
  .parallax3 > use {
    animation: move-forever3 3s linear infinite;
    &:nth-child(1) {
      animation-delay: -2s;
      filter: brightness(1.2);
    }
  }
  .parallax4 > use {
    animation: move-forever4 4s linear infinite;
    &:nth-child(1) { animation-delay: -2s; }
  }
}

@keyframes move-forever1 {
  0% { transform: translate(85px, 0%); }
  100% { transform: translate(-90px, 0%); }
}
@keyframes move-forever2 {
  0% { transform: translate(-90px, 0%); }
  100% { transform: translate(85px, 0%); }
}
@keyframes move-forever3 {
  0% { transform: translate(85px, 0%); }
  100% { transform: translate(-90px, 0%); }
}
@keyframes move-forever4 {
  0% { transform: translate(-90px, 0%); }
  100% { transform: translate(85px, 0%); }
}
</style>