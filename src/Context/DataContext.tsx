import { createContext, ReactNode, useContext, useReducer} from 'react'
import dataReducer, { IinitialState, initialState } from './dataReducer'

const DataContext = createContext<IinitialState>(initialState)

interface IDataProvider{
    children: ReactNode
}

export const DataProvider = ({children}: IDataProvider) => {
    return(
        <DataContext.Provider value={useReducer(dataReducer, initialState) as any}>
            {children}
        </DataContext.Provider>
    )
}

export const useStore = () => useContext<any>(DataContext)[0]
export const useDispatch = () => useContext<any>(DataContext)[1]
