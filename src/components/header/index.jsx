import LogoPokemon from '../../images/pokemon.png'
import { Img } from './logoPokemon/logo'
import { DivLogoAndButton } from './divLogoButtonTheme/logoButton'
import { DivFilterAndSearch } from './DivFilterAndSearch/DivFilterAndSearch'

const Header = () => {
    return (
        <header>
            <DivLogoAndButton>
                <Img src={LogoPokemon} alt="Logo do pokemon" />
                <button>
                    <i class="fa-solid fa-sun"></i>
                    {/* <i class="fa-solid fa-moon"></i> */}
                    Dark Mode
                </button>
            </DivLogoAndButton>
            <DivFilterAndSearch>
                <input type="search" placeholder='look for your pokemon...'/>
                <select name='Tipo'>
                    <option value="">Select by type</option>
                    <option value="">Selecione</option>
                    <option value="">Selecione</option>
                    <option value="">Selecione</option>
                    <option value="">Selecione</option>
                </select>
            </DivFilterAndSearch>
        </header>
    )
}

export { Header }