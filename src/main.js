const CARDS_COUNT = 5;
const EXTRA_CARDS_COUNT = 2;
const EXTRA_CONTAINER_NAME_TOP_RATED = `Top rated`;
const EXTRA_CONTAINER_NAME_MOST_COMMENTED = `Most commented`;

import {createUserProfile} from "./components/user_profile.js";
import {createFilterMenu} from "./components/main-navigation.js";
import {createSortMenu} from "./components/sort-menu.js";
import {createFilmContainer} from "./components/film-container.js";
import {createFilmCard} from "./components/film-card.js";
import {createShowMoreButton} from "./components/show-more-button.js";
import {createFilmExtraContainer} from "./components/extra-container.js";
import {createTopRatedCard} from "./components/top-rated-card.js";
import {createMostCommentedCard} from "./components/most-commented-card.js";
import {createFilmInfo} from "./components/popup.js";

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);

render(siteHeaderElement, createUserProfile());
render(siteMainElement, createFilterMenu());
render(siteMainElement, createSortMenu());
render(siteMainElement, createFilmContainer());

const film = siteMainElement.querySelector(`.films`);
const filmContainer = film.querySelector(`.films-list__container`);
for (let i = 0; i < CARDS_COUNT; i++) {
  render(filmContainer, createFilmCard());
}

const filmList = film.querySelector(`.films-list`);
render(filmList, createShowMoreButton());

render(film, createFilmExtraContainer(EXTRA_CONTAINER_NAME_TOP_RATED));
render(film, createFilmExtraContainer(EXTRA_CONTAINER_NAME_MOST_COMMENTED));

const extraContainers = film.querySelectorAll(`.films-list--extra .films-list__container`);
for (let i = 0; i < EXTRA_CARDS_COUNT; i++) {
  render(extraContainers[0], createTopRatedCard());
}
for (let i = 0; i < EXTRA_CARDS_COUNT; i++) {
  render(extraContainers[1], createMostCommentedCard());
}


render(document.body, createFilmInfo());
