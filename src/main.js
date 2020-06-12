import {createTripInfoTemplate} from './components/trip-info.js';
// import {createRouteAndCostTemplate} from './components/route-and-cost.js';
import {createMenuTemplate} from './components/menu.js';
import {createFiltersTemplate} from './components/filters.js';
import {createSortTemplate} from './components/sorting.js';
import {createTripDaysTemplate} from './components/trip-days.js';
import {createTripDayTemplate} from './components/trip-day.js';
import {createTripEventsListTemplate} from './components/trip-events-list.js';
import {createTripEventTemplate} from './components/trip-event.js';
import {createFormEventEditTemplate} from './components/form-event-edit.js';

const TRIP_EVENT_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


const pageHeaderElement = document.querySelector(`.page-header`);

const tripMainElement = pageHeaderElement.querySelector(`.trip-main`);

render(tripMainElement, createTripInfoTemplate(), `afterbegin`);

const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const controlsTitleElement = tripControlsElement.querySelector(`.trip-controls h2`);

render(controlsTitleElement, createMenuTemplate(), `afterend`);
render(tripControlsElement, createFiltersTemplate(), `beforeend`);


const pageMainElement = document.querySelector(`.page-main`);
const tripEventsElement = pageMainElement.querySelector(`.trip-events`);

render(tripEventsElement, createSortTemplate(), `beforeend`);
render(tripEventsElement, createFormEventEditTemplate(), `beforeend`);
render(tripEventsElement, createTripDaysTemplate(), `beforeend`);


const tripDaysElement = tripEventsElement.querySelector(`.trip-days`);
render(tripDaysElement, createTripDayTemplate(), `beforeend`);

const tripDayElement = tripEventsElement.querySelector(`.trip-days__item`);
render(tripDayElement, createTripEventsListTemplate(), `beforeend`);

const tripEventsListElement = tripDayElement.querySelector(`.trip-events__list`);
// new Array(TRIP_EVENT_COUNT).fill(``).forEach((it) => render(tripEventsListElement, createTripEventTemplate(), `beforeend`));
for (let i = 0; i < TRIP_EVENT_COUNT; i++) {
  render(tripEventsListElement, createTripEventTemplate(), `beforeend`);
}
