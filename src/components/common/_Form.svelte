<script>
  import { createEventDispatcher } from 'svelte';
	import { t, locale, locales } from 'svelte-intl-precompile';
  import Button from '$basic/Button.svelte';
	import Radio from '$basic/Radio.svelte';
	import Input from '$basic/Input.svelte';

  let isProcessing = false;
  let form;
  let formData = {
    formDataNameOrder: JSON.stringify(['language', 'full_name', 'email', 'phone', 'surface', 'when', 'date', 'more_details']),
    // formGoogleSendEmail: '',
    // formGoogleSheetName: 'Painting Cariari Responses',
    surface: '',
    when: '',
    date: '',
    more_info: '',
    more_details: '',
    full_name: '',
    email: '',
    phone: '',
    contact_by: 'email',
    honeypot: '',
    language: $locale,
  };

  const dispatch = createEventDispatcher();

  function validEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  function validateHuman(honeypot) {
    if (honeypot) {
      return true;
    }
  }

  function handleFormSubmit(event) {
    // event.preventDefault();           // we are submitting via xhr below

    if (validateHuman(formData.honeypot)) {  //if form is filled, form will not be submitted
      return false;
    }

    if( !validEmail(formData.email) ) {   // if email is not valid show error
      document.querySelector('input[type="email"]').classList.add('border-danger');
      return false;
    } else {
      isProcessing = true;
      // btnSubmit.disabled = true;
      // btnSubmit.classList.add('disabled');
      // btnSubmit.innerHTML = "...";
      const url = event.target.action;
      const serialize = obj => Object.keys(obj).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])).join('&');

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: serialize(formData)
        // body: encoded
      }).then(response => {
          if (response.ok) {
            // console.log('okayed', response);
            form.reset();
            dispatch('hideForm', true);
            dispatch('showSuccess', true);
          } else {
            console.log('falsed', response);
          }
      });

    }
  }

  // Cancel form
  function cancelForm() {
    form.reset();
    dispatch('hideForm', true); // hide form
  }
</script>

<!-- <pre>{JSON.stringify(formData, null, 2)}</pre> -->

<form bind:this="{form}" on:submit|preventDefault={handleFormSubmit} id="booking-form" name="quoteForm"
      method="post"
      action="https://script.google.com/macros/s/AKfycbzOSlMXE7tPmjSWOy_1GMl0uUpln2gG0MTr7DFCobD80kQeYdslsdF5j7uEj_6fsA1x/exec"
      novalidate="true">

  <!-- QUESTION What is the approximate square footage of the area(s) to be painted? -->
  <fieldset>
    <legend>{$t("book_now.form.how_big.title")}</legend>
    <Radio type="radio" id="r_h_100" value="Less than 100 sq meters" label="{$t("book_now.form.how_big.point_1")}" bind:group="{formData.surface}" />
    <Radio type="radio" id="r_h_500" value="100 - 500 sq meters" label="{$t("book_now.form.how_big.point_2")}" bind:group="{formData.surface}" />
    <Radio type="radio" id="r_h_1000" value="500 - 1,000 sq meters" label="{$t("book_now.form.how_big.point_3")}" bind:group="{formData.surface}" />
    <Radio type="radio" id="r_h_more" value="More than 1,000 sq meters" label="{$t("book_now.form.how_big.point_4")}" bind:group="{formData.surface}" />
  </fieldset>

  <!-- QUESTION When do you need painting? -->
  <fieldset>
    <legend>{$t("book_now.form.when.title")}</legend>
    <Radio type="radio" id="r_w_next" value="In the next few days" label="{$t("book_now.form.when.point_1")}" bind:group="{formData.when}" />
    <Radio type="radio" id="r_w_soon" value="As soon as possible" label="{$t("book_now.form.when.point_2")}" bind:group="{formData.when}" />
    <Radio type="radio" id="r_w_ondate" value="On one particular date" label="{$t("book_now.form.when.point_3")}" bind:group="{formData.when}" />

    {#if formData.when == 'On one particular date'}
    <Input name="inp_date" id="r_w_day" label="{$t("book_now.form.when.day")}" type="date" bind:value="{formData.date}" />
    {/if}
  </fieldset>

  <!-- QUESTION Anything else the painter should know? -->
  <fieldset>
    <legend>{$t("book_now.form.anything_else.title")}</legend>
    <Radio type="radio" id="r_a_no" value="No" label="{$t("book_now.form.anything_else.point_1")}" bind:group="{formData.more_info}" />
    <Radio type="radio" id="r_a_yes" value="Yes" label="{$t("book_now.form.anything_else.point_2")}" bind:group="{formData.more_info}" />

    {#if formData.more_info == 'Yes'}
    <Input name="inp_more" id="r_a_more" label="{$t("book_now.form.common.tell_more")}" type="textarea" bind:value="{formData.more_details}" maxlength="693" select-on-focus />
    {/if}
  </fieldset>

  <!-- QUESTION How would you like to receive quote? -->
  <fieldset>
    <legend>{$t("book_now.form.how_contact.title")}</legend>
    <!-- {JSON.stringify(formData, null, 2)} -->
    <Radio type="radio" id="r_h_email" value="email" checked label="{$t("book_now.form.how_contact.point_1")}" bind:group="{formData.contact_by}" />
    <Radio type="radio" id="r_h_both" value="both" label="{$t("book_now.form.how_contact.point_2")}" bind:group="{formData.contact_by}" />
    <div class="margin-top">
      <Input name="inp_name" label="{$t("book_now.form.how_contact.name")}" bind:value="{formData.full_name}" />
      <Input name="inp_email" label="{$t("book_now.form.how_contact.email")}" type="email" bind:value="{formData.email}" />
      {#if formData.contact_by == 'both'}
      <Input name="inp_phone" label="{$t("book_now.form.how_contact.phone")}" type="tel" bind:value="{formData.phone}" />
      {/if}
    </div>
  </fieldset>

  <!-- BUTTONS -->
  <!-- TODO: Fix buttons to be inline with the rest of the site -->
  <div class="actions">
    <Button type="submit" color="glass needy {isProcessing ? 'animate' : ''}"
      analytics-on="click"
      analytics-event="Form submitted"
      disabled={isProcessing}>{isProcessing ? $t("book_now.form.button.processing") : $t("book_now.form.button.submit")}</Button>
    {#if !isProcessing}
    <Button type="reset"
      analytics-on="click"
      analytics-event="Form reset"
      on:click="{cancelForm}">{$t("book_now.form.button.reset")}</Button>
    {/if}
  </div>

  <input id="honeypot" type="text" name="honeypot" value="" hidden />
</form>

<style lang="scss">
#booking-form {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	color: var(--txt-inverted);
	user-select: none;
  margin: 6rem 2rem 0;

  @media screen and (min-width: 768px) {
    margin: 6rem 0 3rem;
    // transform: scale(1.5);
  }

  > * {
    animation: scale-in-center 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.3s; }
    &:nth-child(4) { animation-delay: 0.4s; }
    &:nth-child(5) { animation-delay: 0.5s; }
    &:nth-child(6) { animation-delay: 0.6s; }
    &:nth-child(7) { animation-delay: 0.7s; }
  }

  fieldset {
    border: 0;
    margin-bottom: 2rem;

    legend {
      font-weight: bolder;
    }
  }

  .actions {
    display: grid;
    // grid-template-columns: 1fr 2fr;
    margin-top: 2rem;
    :global(.needy:hover) {
      transform: scale(1.05);
    }
  }
}
</style>