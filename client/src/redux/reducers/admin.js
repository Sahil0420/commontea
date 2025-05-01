import * as types from "../constants/adminConstants";

const initialState = {
  logs: [],
  servicePreferences: null,
  communities: null,
  community: null,
  moderators: null,
  adminPanelError: null,
  signInError: null,
  adminAccessToken: null,
};

const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInError: null,
        adminAccessToken: payload?.token || null,
      };
    case types.SIGN_IN_FAIL:
      return {
        ...state,
        signInError: payload || null,
      };

    case types.LOGOUT_SUCCESS:
      return {
        ...initialState,
        adminAccessToken: null,
      };

    case types.GET_LOGS_SUCCESS:
      return {
        ...state,
        logs: payload || [],
        adminPanelError: null,
      };
    case types.GET_LOGS_FAIL:
      return {
        ...state,
        logs: [],
        adminPanelError: payload || [],
      };

    case types.DELETE_LOGS_SUCCESS:
      return {
        ...state,
        logs: [],
        adminPanelError: null,
      };
    case types.DELETE_LOGS_FAIL:
      return {
        ...state,
        logs: null,
        adminPanelError: payload || [],
      };

    case types.GET_SERVICE_PREFERENCES_SUCCESS:
    case types.UPDATE_SERVICE_PREFERENCES_SUCCESS:
      return {
        ...state,
        servicePreferences: payload || null,
        adminPanelError: null,
      };
    case types.GET_SERVICE_PREFERENCES_FAIL:
      return {
        ...state,
        servicePreferences: null,
        adminPanelError: payload || null,
      };

    case types.GET_COMMUNITIES_SUCCESS:
      return {
        ...state,
        communities: payload || [],
        adminPanelError: null,
      };
    case types.GET_COMMUNITIES_FAIL:
      return {
        ...state,
        communities: [],
        adminPanelError: payload || null,
      };
    case types.ADD_COMMUNITY_SUCCESS:
    case types.DELETE_COMMUNITY_SUCCESS:
      return {
        ...state,
        adminPanelError: null,
      };
    case types.ADD_COMMUNITY_FAIL:
    case types.DELETE_COMMUNITY_FAIL:
      return {
        ...state,
        adminPanelError: payload || null,
      };

    case types.GET_COMMUNITY_SUCCESS:
      return {
        ...state,
        community: payload || null,
        adminPanelError: null,
      };
    case types.GET_COMMUNITY_FAIL:
      return {
        ...state,
        community: null,
        adminPanelError: payload || null,
      };

    case types.GET_MODERATORS_SUCCESS:
      return {
        ...state,
        moderators: payload || null,
        adminPanelError: null,
      };
    case types.GET_MODERATORS_FAIL:
      return {
        ...state,
        moderators: null,
        adminPanelError: payload || null,
      };
    case types.ADD_MODERATOR_SUCCESS:
    case types.REMOVE_MODERATOR_SUCCESS:
      return {
        ...state,
        adminPanelError: null,
      };
    case types.ADD_MODERATOR_FAIL:
    case types.REMOVE_MODERATOR_FAIL:
      return {
        ...state,
        adminPanelError: payload || null,
      };
    default:
      return state;
  }
};

export default adminReducer;
