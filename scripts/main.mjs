import { generateMoviesHTML } from './movie-converter.mjs';
import { renderMoviesToDOM } from './movie-render.mjs';

const movieHTML = generateMoviesHTML();

renderMoviesToDOM(movieHTML);