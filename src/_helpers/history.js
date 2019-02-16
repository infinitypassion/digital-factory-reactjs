import {
  createHashHistory
} from 'history';

export const history = createHashHistory({
  basename: "", // The base URL of the app (see below)
  hashType: "slash", // The hash type to use (see below)
});