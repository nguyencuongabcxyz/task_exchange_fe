import SagaOrchestrator from './sagaOrchestrator';
import * as authSagas from 'auth/sagas/authSagas';

const sagaOrchestrator = new SagaOrchestrator();

sagaOrchestrator.onError((error: Error) => {
    console.log(error.message);
})

authSagas.install(sagaOrchestrator);

export default sagaOrchestrator.orchestrate();