import React from 'react'
import Logo from '../Logo/Logo'
import AppMenu from '../AppMenu/AppMenu'
import LogoutButton from '../Buttons/LogoutButton/LogoutButton'

export default function Sidebar() {
    return (
        <div className='flex flex-col h-full'>
            <div className="h-[64px]">
                <Logo />
            </div>
            <AppMenu />
            <div className="grow flex flex-col justify-end">
                <LogoutButton />
            </div>
        </div>
    )
}
