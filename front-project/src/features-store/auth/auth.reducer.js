import { SWITCH_AUTH_FORMS, TOGGLE_IS_LOGGED_IN } from "./auth.constants";

const FORM_TYPES = { SIGN_IN: "SIGN_IN", REGISTER: "REGISTER" };

const initialState = {
  isLoggedIn: true,
  formType: FORM_TYPES.SIGN_IN,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_LOGGED_IN:
      console.log("hello is logged in");
      return { ...state, isLoggedIn: !state.isLoggedIn };
    case SWITCH_AUTH_FORMS: {
      return {
        ...state,
        formType:
          state.formType === FORM_TYPES.SIGN_IN
            ? FORM_TYPES.REGISTER
            : FORM_TYPES.SIGN_IN,
      };
    }
    default:
      return state;
  }
};
