import { onDestroy } from 'svelte';

export function onInterval(callback, milliseconds) {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval);
	});
}


/* INPUT HOOK
  selectTextOnFocus()
  - selects all text on focus

  blurOnEscape()
  - clears selection of focused element
*/
export function selectTextOnFocus(node) {
  const handleFocus = event => {
    node && typeof node.select === 'function' && node.select()
  }

  node.addEventListener('focus', handleFocus)

  return {
    destroy() {
      node.removeEventListener('focus', handleFocus)
    }
  }
}
export function blurOnEscape(node) {
  const handleKey = event => {
    if (event.key === 'Escape' && node && typeof node.blur === 'function') node.blur()
  }

  node.addEventListener('keydown', handleKey)

  return {
    destroy() {
      node.removeEventListener('keydown', handleKey)
    }
  }
}

/* CSS HOOK
  usage:
  let fontSize = 2;
	let color = '#000';

  <main use:css="{{ color }}">
    <h1 use:css={{ fontSize }}>
      Hello Werld!
    </h1>
    <input type="color" bind:value="{color}" />
  </main>
*/
export function css(node, properties) {
	console.log(node, properties);

	function setProperties() {
		for (const prop of Object.keys(properties)) {
			node.style.setProperty(`--${prop}`, properties[prop]);
		}
	}

	setProperties();

	return {
		update(newProperties) {
			properties = newProperties;
			setProperties();
		}
	};
}