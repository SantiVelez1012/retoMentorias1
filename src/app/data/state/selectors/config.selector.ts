import { createFeatureSelector, createSelector } from "@ngrx/store"
import { ConfigState } from "../reducers/config.reducer"

export const selectConfigState = createFeatureSelector<ConfigState>('config');

export const selectLoaderFlag = createSelector(selectConfigState, (state)=> state.isLoaderShown );