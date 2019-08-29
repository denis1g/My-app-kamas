import React from 'react';
import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from './render';
import state from "./redux/state";

// render 1 раз без изменения
rerenderEntireTree(state);

serviceWorker.unregister();
