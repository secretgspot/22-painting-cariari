<script>
	import { t } from 'svelte-intl-precompile';
</script>

<section id="section--mission">
  <div class="container">
    <h1>{$t("mission.title")}</h1>

    <div class="grouped">
      <h3>{$t("mission.t_1")}</h3>
      <p>{$t("mission.p_1")}</p>
    </div>

    <div class="grouped">
      <h3>{$t("mission.t_2")}</h3>
      <p>{$t("mission.p_2")}</p>
    </div>
  </div>
</section>

<style lang="scss">
#section--mission {
  user-select: none;
	position: relative;
	display: grid;
	padding: 3rem 2rem;
	text-align: justify;
	background: var(--bg-inverted);
  color: var(--txt-inverted);

  @media screen and (min-width: 768px) {
    grid-column: 1 / -1;
    font-size: large;
    text-align: initial;
  }

  .container {
    display: grid;
    grid-template-areas:
    "title"
    "p1"
    "p2";
    justify-content: center;
	  justify-items: center;
    column-gap: 3rem;
    justify-self: center;
	  max-width: 540px;

    @media screen and (min-width: 768px) {
      grid-template-areas:
      "title title"
      "p1 p2";
      grid-template-columns: 1fr 1fr;
    }

  }

  h1 {
    grid-area: title;
    margin: 3rem 0;
    text-align: center;
  }

  h3 {
    margin-bottom: 1rem;
  }

  .grouped {
    margin-bottom: 3em;
    &:first-of-type { grid-area: p1; }
    &:last-of-type { grid-area: p2; }
  }

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    border-style: solid;
    border-width: 36px 36px 0 36px;
    border-color: var(--bg-primary) transparent transparent transparent;
    transform: translateX(-50%);
  }
}
</style>