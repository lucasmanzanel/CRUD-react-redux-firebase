import { Types } from "../types/Types"

const initialState = {
    data: [],
}


export const nominaReducer = (state = initialState ,action) => {
    switch (action.type) {

        case Types.nominaAdd:
            return {
                ...state,
                data: [...state.data,action.payload]
            };

            case Types.nominaRead:
                return {
                    ...state,
                    data: action.payload
                }

                case Types.nominaDelete:
                    return {
                        ...state,
                        data: state.data.filter((nomina) => {

                            return nomina.id !== action.payload

                        })
                    }

                case Types.nominaClean:
                    return {
                        ...state,
                        data: [],
                    }

        default:
            return state
    }
}