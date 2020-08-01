import { combineReducers } from "redux";
import { reducer as recommendReducer } from '../application/Recommend/store/index';
import { reducer as singersReducer } from "../application/Singers/store/index";
import { reducer as singerInfoReducer } from "../application/Singer/store/index";

export default combineReducers({
  // combineReducers方法 用于Reducer的拆分
  recommend: recommendReducer,
  singers: singersReducer,
  singerInfo: singerInfoReducer,
})