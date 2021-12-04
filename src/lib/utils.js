import { onDestroy } from 'svelte';

export function onInterval(callback, milliseconds) {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval);
	});
}


/** Selects the text inside a text node when the node is focused */
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

/** Blurs the node when Escape is pressed */
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