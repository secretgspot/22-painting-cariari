<script>
	import partyPop from '$lib/pop.js';

	export let id;
	export let value;
	export let label;
	export let group;
</script>

<div class="input__wrap">
	<label for="{id}" class="label">
		<input type="radio" {id} {value} name="{id}" bind:group {...$$restProps} on:change="{partyPop}" class="input radio" />
		{label}
	</label>
</div>

<style lang="scss">

* {
	border: 0;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

.input__wrap {
	display: flex;
	flex-direction: column;
	width: 100%;
}

label, .input {
	cursor: pointer;
}
input {
	font: 1em/1.5 Hind, sans-serif;
	margin-right: 0.5em;
	width: 1.5em;
	height: 1.5em;
	appearance: none;
}
input:focus {
	outline: transparent;
}
input[type=radio] {
	background: var(--txt-primary);
	border-radius: 50%;
	box-shadow:
		0 0 0 0.1em var(--bg-primary) inset,
		0 0 0 0.81em var(--bg-primary) inset;

	&:checked {
		animation: popOutRadio var(--duration) linear;
		// background: tomato;
		box-shadow:
			0 0 0 0.1em var(--bg-primary) inset,
			0 0 0 0.369em var(--bg-primary) inset;

		&:active, &:focus {
			box-shadow:
				0 0 0 0.1em var(--bg-primary) inset,
				0 0 0 0.369em var(--bg-primary) inset;
		}
	}
	&:active, &:focus {
	box-shadow:
		0 0 0 0.1em var(--bg-inverted) inset,
		0 0 0 0.9em var(--bg-inverted) inset;
	}
}
label {
	display: flex;
	align-items: center;
	margin: 0.75em 0;
	position: relative;
	-webkit-tap-highlight-color: transparent;
}
label :global(span) {
		border-radius: 50%;
		display: block;
		pointer-events: none;
		position: absolute;
		top: 0.5em;
		left: 0.5em;
		width: 0.5em;
		height: 0.5em;
		transform: scale(0);
}
label :global(span:nth-of-type(even)) {
	top: 0.639em;
	left: 0.639em;
	width: 0.3em;
	height: 0.3em;
}
/* Animations */
@keyframes popOutRadio {
	from 	{ transform: scale(0); }
	27% 	{	transform: scale(1); }
	54% 	{	transform: scale(0); }
	81% 	{	transform: scale(1.2); }
	to 		{ transform: scale(1); }
}
</style>