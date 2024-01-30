import { createAction, createReducer, on } from "@ngrx/store";
import { ConfigState, initialConfigState } from "./reducers/config.reducer";

export interface AppState {

    config: ConfigState | undefined;

}


const initialState: AppState = {
    config: initialConfigState
}

export const resetStore = createAction('[App] Reset Store');


const appReducer = createReducer(initialState, on(resetStore => initialState));

export function reducer(state: AppState | undefined, action: any) {
    return appReducer(state, action);
} 