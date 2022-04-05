import { createStore } from 'redux';
import reducer from '../reducers';

// la bibliothèque redux nous fournit une méthode createStore
// qui permet de créer un store.
// Le store sera le gardien du state.
// Le store sera le seul interlocuteur de la couche UI en ce qui concerne l'accès au state.

// createStore permet de créer un store générique
// toute la logique d'évolution du state sera définie par son "employé", le reducer
// C'est le reducer qui connait les rouages de la machine.
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
