// https://svelte.dev/repl/282adc0305b84213bf9d1fc2a2a0cf33?version=3.44.0

function partyPop(e) {
	let input = e.target,
		label = input.closest("label");

	if (input && label) {
		// do the effect
		if (input.checked) {
			let particles = 14;
			for (let p = 0; p < particles; ++p) {
				let angleInc = 360/particles,
					angle = angleInc * p;

				if (p % 2 === 1)
					angle -= angleInc/2;

				confetti(label,angle);
			}
		} else {
			// cut the effect short if running
			while (label.querySelector("span"))
				label.removeChild(label.lastChild);
		}
	}
}
function confetti(el,angle,hue = 0) {
	let particle = document.createElement("span"),
		start = 0.33,
		end = 1.8,
		middle = (start + end) / 2,
		angleInRad = angle * Math.PI/180,
		angleSin = Math.sin(angleInRad),
		angleCos = Math.cos(angleInRad),
		pointA = {
			x: start * angleSin,
			y: start * angleCos
		},
		pointB = {
			x: middle * angleSin,
			y: middle * angleCos
		},
		pointC = {
			x: end * angleSin,
			y: end * angleCos
		},
		rootEl = document.querySelector(":root"),
		durationInMs = propertyUnitsStripped(rootEl,"--duration","s") * 1e3,
		animation = particle.animate([
			{
				transform: `translate(${pointA.x}em,${pointA.y}em) scale(0)`
			},
			{
				transform: `translate(${pointB.x}em,${pointB.y}em) scale(1)`
			},
			{
				transform: `translate(${pointC.x}em,${pointC.y}em) scale(0)`
			}
		], {
			duration: durationInMs * 0.6,
			easing: "linear",
			delay: durationInMs * 0.18
		}),
		bgHue = Math.round(angle);
	// color the particle
	particle.style.background = `hsl(${bgHue},90%,45%)`;
	// spawn the particle
	el.appendChild(particle);
	animation.onfinish = particle.remove.bind(particle);
}
function propertyUnitsStripped(el,property,unit) {
	let cs = window.getComputedStyle(el),
		valueRaw = cs.getPropertyValue(property),
		value = +valueRaw.substr(0,valueRaw.indexOf(unit));

	return value;
}

export default partyPop;