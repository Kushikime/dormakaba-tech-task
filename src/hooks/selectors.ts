import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const filmsItems = (state: RootState) => state.app.films;
const peopleItems = (state: RootState) => state.app.people;
const planetItems = (state: RootState) => state.app.planets;
const specieItems = (state: RootState) => state.app.species;
const starshipItems = (state: RootState) => state.app.starships;
const vehicleItems = (state: RootState) => state.app.vehicles;

const filmsSelector = createSelector(filmsItems, (items) => items);
const peopleSelector = createSelector(peopleItems, (items) => items);
const planetsSelector = createSelector(planetItems, (items) => items);
const speciesSelector = createSelector(specieItems, (items) => items);
const starshipsSelector = createSelector(starshipItems, (items) => items);
const vehiclesSelector = createSelector(vehicleItems, (items) => items);


export {
    filmsSelector,
    peopleSelector,
    planetsSelector,
    speciesSelector,
    starshipsSelector,
    vehiclesSelector
}