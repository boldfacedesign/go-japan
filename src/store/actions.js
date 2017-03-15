import * as types from './mutation-types';

export const handleNavigationState = ({ commit }, type) => {
  commit(types.HANDLE_NAVIGATION_STATE, type);
};

export const isDesktop = ({ commit }) => {
  commit(types.RENDER_DESKTOP_NAVIGATION);
};

export const isMobile = ({ commit }) => {
  commit(types.RENDER_MOBILE_NAVIGATION);
};
