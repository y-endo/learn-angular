import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCounter from './counter.reducer';

export const counterFeatureKey = 'counter';

export interface State {
  counter: fromCounter.State;
}

export const reducers: ActionReducerMap<State> = {
  counter: fromCounter.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getCounterFeatureState = createFeatureSelector<State>('counter');
export const getCounter = createSelector(getCounterFeatureState, state => state.counter);
export const getCount = createSelector(getCounter, fromCounter.getCount);
