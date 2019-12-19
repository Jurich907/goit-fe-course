'use strict';

import debounce from 'lodash.debounce';
import PNotify from 'pnotify/dist/es/PNotify';

const input = document.querySelector('.js-input');
const list = document.querySelector('.js-list');
const countryContainer = document.querySelector('.js-country');

input.addEventListener(
  'input',
  debounce(e => fetchCountries(e), 500),
);

const fetchCountries = e => {
  const { value } = e.target;
  if (!value) return;
  fetch(`https://restcountries.eu/rest/v2/name/${value}`)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      return result;
    })
    .then(result => updateUI(result));
};

const updateUI = countries => {
  const length = countries.length;
  list.innerHTML = '';
  countryContainer.innerHTML = '';
  PNotify.closeAll();

  if (length === 1) {
    const country = countries[0];
    const { name, capital, population, languages, flag } = country;

    const getLanguages = () =>
      languages.map(language => `<li>${language.nativeName}</li>`);

    countryContainer.innerHTML = `
      <div class="titlecountry">
        <h1 class="name">${name}</h1>
      </div>
      <div class="container">
        <div class="info">
          <p>Capital: ${capital}</p>
          <p>Population: ${population}</p>
          <ul>Languages: ${getLanguages()}</ul>
        </div>
        <div class="flag">
          <object id="svg-object" data="${flag}" type="image/svg+xml"></object>
        </div>
      </div>`;
  }

  if (length >= 2 && length <= 10) {
    const lis = countries.map(country => `<li>${country.name}</li>`);
    list.innerHTML = lis;
  }

  if (length > 10) {
    PNotify.alert(
      'Too many matches found. Please enter a more specific query!',
    );
  }
};
