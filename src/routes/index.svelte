<script>
  import { scale } from 'svelte/transition';
  import { inview } from 'svelte-inview';
	import { t, locale, locales } from 'svelte-intl-precompile';
  import { onInterval } from '$lib/utils.js';
  import Header from '$layout/Header.svelte';
  import Footer from '$layout/Footer.svelte';
  import Intro from '$components/common/Intro.svelte';
  import Mission from '$common/Mission.svelte';
  import Steps from '$common/Steps.svelte';
  import Details from '$components/common/Details.svelte';
  import BookNow from '$common/BookNow.svelte';
  import Estimator from '$common/Estimator.svelte';


  $: houseUrl = `./assets/house_${generateRandomNumber(1,16)}.svg`;
  $: isInView = false;

  const handleChange = ({ detail }) => {
    isInView = detail.inView;
    // console.log('intro:', detail);
  };

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onInterval(() => {
    houseUrl = `./assets/house_${generateRandomNumber(1,16)}.svg`;
  }, 6000);
</script>

<svelte:head>
  <title>{$t('pages.main')}</title>
</svelte:head>

<article id="home" class="home">
  <Header meta="{false}"/>

  <section id="section--home-hero" use:inview on:enter="{handleChange}" class:seeing="{isInView}">

    <h2 class="large ">{$t("hero.hero.title_1")}</h2>
    <h2 class="large mission">{$t("hero.hero.title_2")}</h2>


    <img class="painter" src="./assets/painter_front.svg" alt="Painter with hands crossed while holding a roller brush" />
    {#key houseUrl}
    <img out:scale  class="house" src="{houseUrl}" alt="Outline of a house for background" />
    {/key}
    <!-- BG Gradient -->
    <!-- <div class="bg-gradient"></div> -->
  </section>

  <Intro/>

	<Mission/>

  <Estimator/>

  <Steps/>

  <Details/>

  <BookNow/>

  <Footer />

</article>

<style lang="scss">
#home {
  display: grid;
  justify-items: stretch;
	grid-template-columns: 1fr 3fr 1fr;
}
#section--home-hero {
	height: 69vh;
	position: relative;
	display: grid;
	user-select: none;
	// background-image: url(./assets/house_1.svg);
	justify-content: center;
	align-content: stretch;
  justify-self: stretch;
	grid-column: 1 / -1;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(6, 1fr);
  overflow: hidden;

  @media screen and (min-width: 960px) {
    grid-column: 2 / -2;
  }

  > * {
    transform: translateY(-1000px);
    opacity: 0;
  }

  &.seeing {
    // > * {
    //   animation: slide-in-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    // }
    :nth-child(1) {
      animation: tilt-in-fwd-tr 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      // animation-delay: .5s;
      // border: 3px solid rgb(255, 217, 0);
    }
    :nth-child(2) {
      animation: tilt-in-fwd-bl 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      // animation: bounce-in-top 1.1s both;
      // animation-delay: .6s;
      // border: 3px solid red;
    }
    :nth-child(3) {
      animation: slide-in-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      // animation: tilt-in-fwd-br 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      // animation-delay: .4s;
      // border: 3px solid rgb(0, 255, 76);
    }
    :nth-child(4) {
      animation: bounce-in-top 1.1s both;
      // animation-delay: .3s;
      // border: 3px solid rgb(0, 119, 255);
    }
  }

  img.painter {
    width: 100%;
    height: 100%;
    // @media screen and (min-width: 768px) {
    //   height: 54vh;
    // }
    grid-column: 5 / span 2;
    grid-row: 3 / span 3;
    z-index: 2;
  }

  img.house {
    width: 100%;
    height: 100%;
    grid-column: 1/-1;
    grid-row: 2/span 3;
    z-index: 0;
    padding: 0 1rem;
    filter: opacity(0.1) invert(0);
    @media (prefers-color-scheme: dark) {
      filter: opacity(0.1) invert(1);
    }
  }

  h2.large {
   margin: 0;
   font-size: clamp(2rem, 13vw, 5rem);
   cursor: default;

    &:first-of-type {
      grid-column: 2/-2;
      @media screen and (min-width: 768px) {
        grid-row: 3 / span 1;
      }
      grid-row: 4 / span 1;
      z-index: 1;
      color: var(--txt-primary);
      align-self: end;
      background: linear-gradient(45deg, var(--bg-primary), transparent);
      // animation: rotateHue 60s steps(10, end) infinite;
    }

   &.mission {
      font-family: 'Mission Script';
      cursor: default;
      grid-column: 2/-2;
      @media screen and (min-width: 768px) {
        grid-row: 4 / span 1;
      }
      grid-row: 5/ span 1;
      z-index: 3;
      place-self: center;
      align-self: start;
      color: var(--txt-title);
      text-shadow:
        -1px -1px 0 var(--color-blue),
        1px -1px 0 var(--bg-inverted),
        -1px 1px 0 var(--color-red),
        1px 1px 0 var(--color-red),
        0px 0px 6px var(--bg-inverted);
    }
  }
}

// @media screen and (min-width: 768px) {
//   .mission {
//     grid-row: 4 / span 1;
//   }
//   img.papa {
//     height: 63vh
//   }
//   h2.large:first-of-type {
//     grid-row: 3 / span 1;
//   }
// }
</style>
