import urlBase from './urlBase'
import { relatarProblema, relatarProblemas } from './endPoints'

import { relatarProblemas as rProblemas } from '../redux/reducers/mainReducer'

// import {
//     fetchLoading,
//     fetchSuccess,
//     fetchFailure
// } from '../../redux/reducers/mainReducer'

export function relatarProblemaAPI() {
    console.log('O')
    return dispatch => {
        // dispatch(fetchLoading())
        dispatch(rProblemas())
        urlBase.post(relatarProblema, {
            tipo_transporte: 'onibus',
            linha_problema: 'Azul',
            local_problema: 'Tucuruvi',
            problema: 'Maior tempo de parada',
            id_usuario: '1'
        })
        .then(res => {
            console.log(res)
            // dispatch(fetchSuccess('Relatado'))
        })
        .catch(err => {
            console.log(err)
            // dispatch(fetchFailure('Falha'))
        })
    }
}
// export function relatarProblemasAPI() {
//     return dispatch => {
//         dispatch(fetchLoading())
//         urlBase.post(relatarProblemas, {
//             tipo_transporte: 'onibus',
//             linha_problema: 'Azul',
//             local_problema: 'Tucuruvi',
//             problema: 'Maior tempo de parada',
//             id_usuario: '1'
//         })
//         .then(res => {
//             console.log(res)
//             dispatch(fetchSuccess('Relatado'))
//         })
//         .catch(err => {
//             console.log(err)
//             dispatch(fetchFailure('Falha'))
//         })
//     }
// }