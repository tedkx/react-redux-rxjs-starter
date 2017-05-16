import { Observable }   from 'rxjs'

import { APP_ACTION_TYPES as AT }    
                        from './App.actions'

export const loginEpic = (action$, store) => action$
    .ofType(AT.LOGIN)
    .mergeMap(action => {
        
    })