<script>
	import { createEventDispatcher } from 'svelte';
	import { selectTextOnFocus, blurOnEscape } from '$lib/utils.js';
	import partyPop from '$lib/pop.js';

	export let id = '';
	export let label;
	export let value;
	export let group = '';
	export let valid = (val) => new Boolean(null);

	const dispatch = createEventDispatcher();
	function onInput({ target }) {
		dispatch('input', target.value);
	}
	let isValid = true;
	$: if (valid) {
		isValid = valid(value);
	}
</script>

<div class="input__wrap">
	{#if $$restProps.type == 'radio'}
		<label for="{id}" class="label">
			<input type="radio"
						{id}
						{value}
						{...$$restProps}
						on:change="{partyPop}"
						on:blur
						on:focus
						on:input="{onInput}"
						class="input radio"
						aria-label="{label}"
						bind:group />
			{label}
		</label>
	{:else}
		<label for="{label}" class="label">{label}</label>
		{#if $$restProps.type == 'select'}
			<select bind:value
							id="{label}"
							name="{label}"
							{...$$restProps}
							on:change
							on:blur
							on:focus
							on:input="{onInput}"
							class="input select"
							aria-label="{label}">
				<slot/>
			</select>
		{:else if $$restProps.type == 'textarea'}
			<textarea {...$$restProps}
							bind:value
							on:input={onInput}
							on:focus
							on:blur
							on:change
							class="input textarea"></textarea>
		{:else}
			<input bind:value id="{label}" name="{label}" type="text" {...$$restProps} class:border-danger="{!isValid && value}" class:border-success="{isValid && value && valid}" class="input text" aria-label="{label}" use:selectTextOnFocus use:blurOnEscape>
		{/if}
	{/if}
	<!-- {JSON.stringify($$restProps, null, 2)} -->
</div>

<style lang="scss">
* {
	border: 0;
	box-sizing: border-box;
	// margin: 0;
	// padding: 0;
}

.input__wrap {
	display: flex;
	flex-direction: column;
	width: 100%;
	position: relative;
}

label, .input {
	cursor: pointer;
}

.input {
	font-size: 1rem;
	padding: 0.6rem;
	border: 1px solid var(--border);

	&.text, &.textarea {
		border-radius: var(--border-radius);
		&::selection { background: var(--bg-primary); }
	}

	&.border-success {
		border-color: var(--color-success);
	}
	&.border-danger {
		border-color: var(--color-danger);
		box-shadow: 0 0 6px 1px var(--color-red);
	}

	// .RADIO PLACEHOLDER!
}

label {
	display: flex;
	align-items: center;
	margin-top: 0.63rem;
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
	top: 0.625em;
	left: 0.625em;
	width: 0.25em;
	height: 0.25em;
}
</style>