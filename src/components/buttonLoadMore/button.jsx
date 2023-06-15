import React from 'react'

const Button = ({setOffset, offset}) => {
    return (
        <button onClick={() => setOffset(offset + 10)}>Carregar mais</button>
    )
}

export { Button }