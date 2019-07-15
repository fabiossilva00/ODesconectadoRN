import { 
    LOADING,
    RELATAR_PROBLEMAS,
    RELATAR_PROBLEMAS_SUCESSO,
    EXISTE_INTERNET
} from '../actionTypes/mainType'

const initialState = {
    isLoading: false,
    isConnect: false
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state
            }
        case RELATAR_PROBLEMAS: 
            console.log('Aqui!')
            console.log(action)
            return {
                ...state
            }
        case EXISTE_INTERNET:
            console.log('Internet ?', action)
            return {
                ...state,
                isConnect: action.payload
            }
        default:
            return state
    }
}

export const existeInternet = internet => {
    return dispatch => {
        dispatch({
            type: EXISTE_INTERNET,
            payload: internet
        })
    }
}

export const relatarProblemas = () => {
    return {
        type: RELATAR_PROBLEMAS,
        payload: 'Relatado',
        meta: {
            offline:{
                effect: { url: '/relatar/problema', method: 'POST', json: {
                        tipo_transporte: 'onibus',
                        linha_problema: 'Azul',
                        local_problema: 'Tucuruvi',
                        problema: 'Maior tempo de parada',
                        id_usuario: '1'
                    } 
                },
                commit:{
                    type: RELATAR_PROBLEMAS_SUCESSO,
                },
                rollback: {
                    type: 'RELATARPROBLEMAS'
                }
            }
        }
    }
}
