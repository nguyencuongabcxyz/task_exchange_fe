import Action from 'shared/interfaces/Action';
import { takeEvery, call, takeLatest, all, spawn } from 'redux-saga/effects';

type SagaFunction = () => void;
export type OnErrorFunction = (error: any) => void;

export default class SagaOrchestrator {
    private _sagas: SagaFunction[] = [];
    private _onError: OnErrorFunction | undefined ;

    public takeEvery(pattern: string | string[], saga: (action: Action) => void) {
        const patterns = pattern instanceof Array ? pattern : [pattern];
        patterns.forEach((pattern) => {
            this._sagas.push(function* (){
                yield takeEvery(pattern, function* (action: Action) {
                    try{
                        const result = yield call(saga, action);
                        action.payload?.callback?.succeededCallback(result);
                    }catch(error) {
                        action.payload?.callback?.failedCallback(error);
                        throw error;
                    }
                })
            })
        });

        return this;
    }

    public takeLatest(pattern: string | string[], saga: (action: Action) => void) {
        const patterns = pattern instanceof Array ? pattern : [pattern];
        patterns.forEach((pattern) => {
            this._sagas.push(function* () {
                yield takeLatest(pattern, function* (action: Action) {
                    try{
                        const result = yield call(saga, action);
                        action.payload?.callback?.succeededCallback(result);
                    }catch(error) {
                        action.payload?.callback?.failedCallback(error);
                        throw error;
                    }
                })
            })
        })

        return this;
    }

    public onError(fn: OnErrorFunction){
        this._onError = fn;
        return this;
    }

    public orchestrate() {
        const sagas = this._sagas;
        const onError = this._onError;

        return function* () {
            yield all(sagas.map((saga) => {
                return spawn(function* () {
                    while(true) {
                        try{
                            yield call(saga);
                            break;
                        }catch(error) {
                            if(onError) {
                                yield call(onError, error);
                            }
                        }
                    }
                })
            }))
        }
    }
}