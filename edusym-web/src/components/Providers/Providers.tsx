import React, { ReactElement } from 'react'
import { store } from '../../store/store'
import { Provider } from 'react-redux'

export default function Providers({ children }: { children?: ReactElement | ReactElement[] }) {
    return (
        <Provider store={store}>{children}</Provider>
    )
}
