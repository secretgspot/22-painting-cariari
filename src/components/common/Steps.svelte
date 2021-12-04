<script>
	import { t, locale, locales } from 'svelte-intl-precompile';
  import SvgIcon from '$basic/SvgIcon.svelte';
</script>


  <section id="section--steps" class="card-deck card-deck--open">

    <div class="card">
      <div class="card__image">
        <SvgIcon type="step_estimate" size="54" />
      </div>
      <div class="card__content">
        <h3>{$t("steps.estimate.title")}</h3>
        <p>{$t("steps.estimate.p")}</p>
      </div>
    </div>

    <div class="card">
      <div class="card__image">
        <SvgIcon type="step_preparation" size="54" />
      </div>
      <div class="card__content">
        <h3>{$t("steps.preparation.title")}</h3>
        <p>{$t("steps.preparation.p")}</p>
      </div>
    </div>

    <div class="card">
      <div class="card__image">
        <SvgIcon type="step_dothejob" size="54" />
      </div>
      <div class="card__content">
        <h3>{$t("steps.job.title")}</h3>
        <p>{$t("steps.job.p")}</p>
      </div>
    </div>

    <div class="card">
      <div class="card__image">
        <SvgIcon type="step_cleanup" size="54" />
      </div>
      <div class="card__content">
        <h3>{$t("steps.cleanup.title")}</h3>
        <p>{$t("steps.cleanup.p")}</p>
      </div>
    </div>
  </section>

<style lang="scss">
.card-deck {
  --card-width: 100%;
  --grid-gap: 3vw;
  user-select: none;
	display: grid;
	grid: auto/repeat(auto-fit, minmax(var(--card-width), 1fr));
	grid-auto-flow: row dense;
	grid-gap: 0;
	justify-content: center;
	align-content: center;
  justify-items: stretch;
	// background-color: var(--bg-secondary);
	grid-column: 1/-1;
  margin: 3rem 0;

  @media screen and (min-width: 768px) {
    --card-width: 300px;
    grid-column: 2/-2;
  }

  // @media screen and (min-width: 980px) {
  //   --card-width: 330px;
  // }

  .card {
    margin: calc(var(--grid-gap) / 2);
    max-width: calc(var(--card-width) * 1.4);
  }
  &--open {
    .card {
      padding: 0.5rem 1rem;
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
      text-align: left;
      h3 {
        margin-bottom: 0.65rem;
        font-size: 1.35rem;
        line-height: 1em;
      }
      p {
        margin-top: 0.5rem;
      }
      &__image {
        margin: 1.1rem 2.2rem 1.1rem 0;
        width: 87px;
        height: 87px;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      :global(svg) {
        width: 100%;
        height: 100%;
      }
      :global(.seeing) {
        // transform: scale(1.2);
        // transition: all 2s ease-in-out;
        animation: jello-horizontal 0.6s both;
        // animation: puff-in-center 0.6s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
      }
    }
  }
}
</style>