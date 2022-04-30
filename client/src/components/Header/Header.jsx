import React from 'react'

export default function Header({title}) {
    return (
        <>
            <h1 className='text-red-500' style={{margin: '0 auto', fontSize: 36}}>{title}</h1>
        </>
    )
}
