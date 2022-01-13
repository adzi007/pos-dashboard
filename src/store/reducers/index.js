import { combineReducers } from "redux";

import counter from "./counter";
import user from "./user";
import auth from "./auth";
import category from "./category";

export default combineReducers({ counter, user, auth, category });