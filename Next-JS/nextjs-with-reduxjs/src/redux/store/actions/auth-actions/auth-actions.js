// Auth reducer action functions are defined here...!

import { UPDATE_AUTH_STATE } from "../../reducers/auth-reducer/auth-reducer";

const updateAuthState = () => {
    return (dispatch) => {
        dispatch(UPDATE_AUTH_STATE());
    };
};

// export { updateAuthState };