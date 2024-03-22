import React from 'react'

export default function WhatLearn({ items }: { items: string[] }) {
    return (
        <div className='p-5 grid grid-cols-2'>
            {items.map(item => <p key={item} className='flex my-2 items-center'><div className="text-additional mx-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg></div>{item}</p>)}
        </div>
    )
}
