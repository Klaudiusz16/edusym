import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import UserShortcut from '../UserShortcut/UserShortcut'

export default function Header() {
    return (
        <div className="flex items-center justify-between h-full pr-2">
            <Searchbar />
            <UserShortcut />
        </div>
    )
}
