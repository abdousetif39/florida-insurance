// lib/cities.js

import { citiesData } from './citiesData';

export function getAllCities() {
  return Object.values(citiesData);
}

export function getCityBySlug(slug) {
  return citiesData[slug];
}