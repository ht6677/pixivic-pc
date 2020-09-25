
import * as types from './mutation-types';

const mutations = {
  [types.SET_USER](state, user) {
    if (user) {
      state.user = user;
    } else {
      state.user = {};
    }
  },
  [types.ADD_CACHED_VIEWS](state, view) {
    if (state.cachedViews.includes(view.name)) return;
    if (!view.meta.noCache) {
      state.cachedViews.push(view.name);
    }
  },
  [types.DEL_CACHED_VIEW](state, name) {
    const index = state.cachedViews.indexOf(name);
    if (index > -1) {
      state.cachedViews.splice(index, 1);
    }
  },
  [types.SHOW_TAB](state, flag) {
    state.showTab = flag;
  },
  [types.SET_LIKE_STATUS](state, data) {
    state.likeStatus = data;
  },
  [types.SET_FOLLOW_STATUS](state, data) {
    state.followStatus = data;
  },
  [types.SET_DETAIL](state, data) {
    state.detail = data;
  },
  [types.SET_LOGIN_BOOLEAN](state, data = true) {
    state.loginOrSign = data;
    state.loginBoolean = !state.loginBoolean;
  },
  [types.SET_COOLECT_BOOLEAN](state, data) {
    if (data) { state.readyCollectItem = data; }
    state.collectBoolean = !state.collectBoolean;
  },
  [types.SET_COOLECT_INFO](state, data) {
    if (data) { state.collectInfo = data; }
  }
};

export default mutations;
