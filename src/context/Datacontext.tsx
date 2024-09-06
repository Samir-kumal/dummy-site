"use client";
import React from 'react'

interface DataProviderProps {
    children: React.ReactNode

}

interface DataContextProps {
    setSteps: React.Dispatch<React.SetStateAction<number>>
    steps: number
}
export const DataContext = React.createContext<null | DataContextProps>(null)

const Datacontext = ({ children }: DataProviderProps) => {

    const [steps, setSteps] = React.useState(0)
    return (
        <DataContext.Provider value={{ steps, setSteps }}>
            {children}
        </DataContext.Provider>

    )
}

export default Datacontext

export const useDataContext = () => {
    const context = React.useContext(DataContext)
    if (!context) {
        throw new Error('useDataContext must be used within a DatacontextProvider')
    }
    return context
}