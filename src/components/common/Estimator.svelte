<script>
	import { t, locale, locales } from 'svelte-intl-precompile';
  import { siteSettings } from '$lib/store.js';
	import Input from '$basic/Input.svelte';

	let pricePerMeterInDollars = $siteSettings.price;
	let exchangeRate = $siteSettings.exchangeRate;
  let weightType = 'gallons';
  let unitsType = 'meters';
  let currencyType = 'colones';
  let surfaceArea = 1;
  let surface = 'smooth';
  let surfaceOptions = {
    pourous: 1.5,
    textured: 1.2,
    smooth: 1
  };
  let coats = 2;
  let coatsOptions = {
    1: 1,
    2: 1.25,
    3: 1.5
  };
  let quality = 'economy';
  let qualityOptions = {
    luxury: 1.8,
    premium: 1.5,
    economy: 1
  };
  $: paint = calculatePAINT(surfaceArea, coats, surfaceOptions[surface], weightType, unitsType) || 0;
  $: cost = calculateCOST(surfaceArea, qualityOptions[quality], coatsOptions[coats], surfaceOptions[surface], currencyType, unitsType) || 0;

  //$: console.log(area, paint, cost, quality, coats, isCeiling, surface, areaHeight, areaWidth, areaLength, currencyType, unitsType, weightType);

  const round = (f) => Math.ceil(f * 10) / 10;
  const fixed = (f) => f.toFixed(0);

  // calculate paint required
  function calculatePAINT(area, coats, surface, weightType, unitsType) {
    // declare paint coverage per gallon in feet
    if (unitsType == 'meters') {
      var paint_coverage = 33;
    } else {
      paint_coverage = 360;
    }

    // combine area with paint surface
    var area_surface = area * surface;
    // calculate paint required in gallons
    var paint_required_gallons =  (area_surface / paint_coverage) * coats;

    if (weightType == 'liters') {
      var paint_required_liters = toLITERS(paint_required_gallons);
    }

    return weightType == 'liters' ? paint_required_liters : paint_required_gallons;
  };

  // calculate cost
  function calculateCOST(area, quality, coats, surface, currencyType, unitsType) {
		let price;
    if (unitsType == 'meters') {
      price = pricePerMeterInDollars * exchangeRate; // per meter
    } else {
      price = (pricePerMeterInDollars * exchangeRate) / 3.281; // per foot
    }

    let price_colones = area * quality * coats * surface * price;
		let price_dollars;

    if (currencyType == 'dollars') {
      price_dollars = toDOLLARS(price_colones);
    }

    return currencyType == 'dollars' ? price_dollars : price_colones;
  };

  // convert gallons to liters
  function toLITERS(gallons) {
    return gallons * 3.785411784;
  };

  // convert colones to dollars
  function toDOLLARS(colones) {
    return colones * (1 / exchangeRate);
  };
</script>

<section id="section--estimator">
	<!-- <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 616.4 345"><path d="M6 339V130.5M188.5 6 6 130.5M402.5 210.9 188.5 6M610.4 210.2l-207.9.7" class="st0"/></svg> -->

	<aside class="inputs">
		<!-- Surface Area -->
		<Input name="inp_area" id="s_a" label="{$t("calc.surface_area")}" type="number" max="999" bind:value="{surfaceArea}" />

    <Input name="inp_surcftype" id="s_a" label="{$t("calc.surface_type.title")}" type="select" bind:value="{surface}">
      <option value="smooth" selected>{$t("calc.surface_type.smooth")}</option>
      <option value="textured">{$t("calc.surface_type.textured")}</option>
      <option value="pourous">{$t("calc.surface_type.pourous")}</option>
    </Input>

    <Input name="inp_surcfqlty" id="s_a" label="{$t("calc.paint_quality.title")}" type="select" bind:value="{quality}">
      <option value="luxury">{$t("calc.paint_quality.luxury")}</option>
      <option value="premium">{$t("calc.paint_quality.premium")}</option>
      <option value="economy" selected>{$t("calc.paint_quality.economy")}</option>
    </Input>
	</aside>

	<aside class="outputs">
		<h3>
			<span>{surfaceArea}</span>
			<small>{$t(`calc.sq_${unitsType}`)}<sup>2</sup></small>
		</h3>

		<h3 on:click="{() => weightType == 'gallons' ? weightType = 'liters' : weightType = 'gallons'}" class="clickable">
			<span>{ round(paint) }</span>
			<small>{$t(`calc.${weightType}`)}</small>
		</h3>

		<h3 on:click="{() => currencyType == 'colones' ? currencyType = 'dollars' : currencyType = 'colones'}" class="clickable">
			<small>{$t(`calc.${currencyType}`)}</small>
			<span>{ round(cost).toLocaleString($locale) }</span>
		</h3>
	</aside>

	<h1 class="title">{$t("calc.title")}</h1>
</section>

<style lang="scss">
#section--estimator {
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 0px;
  grid-column: 1 / -1;
  padding: 6rem 1rem 3rem;
	place-self: center;
  max-width: clamp(360px, 63%, 450px);

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0px;
    border-style: solid;
    border-width: 36px 36px 0 36px;
    border-color: var(--bg-inverted) transparent transparent transparent;
    transform: translateX(-50%);
  }

  .inputs {
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    grid-row: 2/-1;
    grid-column: 5/-1;
    flex-direction: column;
  }

  .outputs {
    grid-row: 2/-1;
    grid-column: 1/5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 1rem 0 0;
    flex-wrap: nowrap;
    justify-content: flex-end;
  }

  .title {
    display: flex;
    justify-content: center;
    margin: 0;
    align-items: center;
    grid-row: 1/span 1;
    grid-column: 1/ -1;
  }
}

// svg {
//   z-index: -1;
//   grid-row: 1 / -1;
//   grid-column: 1 / -1;
// }
// .st0 {
//   stroke: var(--border);
//   stroke-width: 3;
//   stroke-linecap:round;
//   stroke-linejoin:round;
//   stroke-miterlimit:10;
// }

h3 {
	font-family: "Mission Script", sans-serif;
	font-size: 2.7rem;
	margin: 0;
	font-weight: lighter;

  &:last-of-type {
    border-top: 3px solid var(--border);
	  padding-top: 0.6rem;
  }

  // sup { }
  small {
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    font-weight: lighter;
    font-size: small;
  }
}
.inputs :global(.input) {
	background: var(--bg-inverted);
	color: var(--txt-inverted);
  &::selection { background: darkslateblue; }
}
.inputs :global(label) {
  font-size: smaller;
}
.clickable {
  cursor: pointer;
  transition: .3s ease;
  &:hover {	background: linear-gradient(45deg, var(--border), transparent); }
}
</style>