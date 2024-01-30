import { createReducer, on } from "@ngrx/store";
import { hideLoader, showLoader } from "../actions/config.actions";

export interface ConfigState {
    isLoaderShown: boolean;
}


export const initialConfigState: ConfigState = {
    isLoaderShown: false
}

export const configReducer = createReducer(initialConfigState,
    on(showLoader, (state) => {
        return {
            ...state,
            isLoaderShown: true
        }
    }),
    on(hideLoader, (state) => {
        return {
            ...state,
            isLoaderShown: false
        }
    }));