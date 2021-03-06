import { storiesOf, html } from '@open-wc/storybook';

import { isCountryIBANValidator } from '../src/validators.js';
import '../lion-input-iban.js';

storiesOf('Forms|<lion-input-iban>', module)
  .add(
    'Default',
    () => html`
      <lion-input-iban name="iban"></lion-input-iban>
    `,
  )
  .add(
    'Prefilled',
    () => html`
      <lion-input-iban .modelValue=${'NL20INGB0001234567'} name="iban"></lion-input-iban>
    `,
  )
  .add(
    'Faulty prefilled',
    () => html`
      <lion-input-iban .modelValue=${'NL20INGB0001234567XXXX'} name="iban"></lion-input-iban>
    `,
  )
  .add(
    'Country restrictions',
    () => html`
      <lion-input-iban
        .modelValue=${'DE89370400440532013000'}
        .errorValidators=${[isCountryIBANValidator('NL')]}
        name="iban"
      ></lion-input-iban>
    `,
  );
