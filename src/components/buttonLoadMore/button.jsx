import React from 'react'
import { ButtonMore } from './style'

const Button = ({setOffset, offset}) => {
    return (
        <ButtonMore>
            <button onClick={() => setOffset(offset + 10)}>Load more</button>
        </ButtonMore>
    )
}

export { Button }