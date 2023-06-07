const baseUrl = 'https://pokeapi.co/api/v2'

const getDataPokemon = async(name) => {
    const response = await fetch(`${baseUrl}/pokemon/${name}`)
    return await response.json()
}

export { getDataPokemon }