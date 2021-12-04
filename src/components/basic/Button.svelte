<script>
  export let type = "button"; // button | submit | reset
  export let href = null;
  export let mode = null; // glass | needy | outline?
  export let color = null; // blue | magenta | orange
  export let disabled = false;
  export let external = false;
</script>

{#if href}
  <a class="{mode} {color}"
    class:disabled
    role="button"{href}
    target={external ? '_blank' : '_self'}
    on:click>
    <slot />
  </a>
{:else}
  <button class="{mode} {color}" class:disabled {type} on:click|stopPropagation {disabled}>
    <slot />
  </button>
{/if}

<style lang="scss">
  button,
  a {
    font: inherit;
    border: 0px solid var(--border);
    background: transparent;
    height: 81px;
    padding: 0.5rem 1rem;
    color: currentColor;
    // border-radius: var(--border-radius);
    // box-shadow: 0px 1px 1px var(--shadow);
    cursor: pointer;
    text-decoration: none;
    // text-transform: uppercase;
    /* letter-spacing: 1.2px; */
    flex: 0 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.1s cubic-bezier(0.18, 0.90, 0.18, 0.9);

    // &:focus { align-content: none; }

    &:hover,
    &:active {
      // background: var(--bg-tertiary);
      // border-color: var(--border);
      outline: none;
    }

    &:hover,
    &:hover {
      box-shadow:  0px 0px 2px var(--shadow);
      // filter: brightness(1.5);
    }

    &:active,
    &:active {
      filter: invert(1);
      box-shadow: inset 0px 0px 2px var(--shadow);
    }

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
      background: var(--shadow);
      border-color: var(--shadow);
      color: var(--shadow);
      box-shadow: none;
      cursor: not-allowed;
      transition: none;
      transform: scale(1) !important;
      &.animate { color: var(--txt-primary) }
    }

    &.animate { animation: border-animation 1.75s infinite; }
  }

  /* NEEDY */
  .needy:not(:disabled):before {
		content: '';
		position: absolute;
		top: 0; left: 0;
		z-index: 2;
		/* background: white; */
		opacity: 0.6;
		height: 100%; width: 100%;
		transform: skewX(-45deg);
		background: linear-gradient(to right, var(--color-white), var(--color-white) 20px, transparent 20px);
		transform-origin: left bottom;
		animation: shine 6s ease-in infinite;
  }
	@keyframes shine {
		0%   { transform: skewX(-45deg) translateX(-100%); }
		10%  { transform: skewX(-45deg) translateX(100%); }
		100% { transform: skewX(-45deg) translateX(100%); }
	}


  /* GLASS */
.glass {
  background: linear-gradient(
    170deg,
    rgba(255,255,255,0.8) 0%,
    rgba(255,255,255,0.6) 20%,
    rgba(255,255,255,0.1) 50%,
    rgba(0,0,0,0.0) 50%,
    rgba(0,0,0,0.0) 100%
  );

  &:before {
    position: absolute;
    content: "";
    top: -2px;
    left: 2%;
    width: 96%;
    height: 2px;
    background: linear-gradient(
      to right,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0.75) 15%,
      rgba(0,0,0,0.9) 50%,
      rgba(0,0,0,0.75) 85%,
      rgba(0,0,0,0) 100%
    );
    z-index: 1;
  }

  &:after {
    position: absolute;
    content: "";
    top: 100%;
    left: 2%;
    width: 96%;
    height: 2px;
    background: linear-gradient(
      to right,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0.5) 5%,
      rgba(0,0,0,0.9) 50%,
      rgba(0,0,0,0.5) 95%,
      rgba(0,0,0,0) 100%
    );
    z-index: 1;
  }

  &.border {
    border-color: var(--shadow);
    border-image: none;
    border-width: 1px;
    border-style: outset;
    position: relative;
    color: var(--txt-inverted);
    text-decoration: none;
    cursor: pointer;
    border-radius: var(--border-radius);
    outline: 0;

    &:active { border-style: inset; }
  }

  &.shadow {
    box-shadow:
      0 1px 0 0 rgba(255, 255, 255, 0.4) inset,
      0 2px 6px rgba(0, 0, 0, 0.5),
      0 -4px 8px -1px rgba(255, 255, 255, 0.4) inset;
  }
}
</style>
