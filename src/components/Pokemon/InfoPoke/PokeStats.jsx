import styled from 'styled-components';
import '../../Pokedex/CARD/StyleColorPokemon.css'
import InfoBasicPoke from './InfoBasic/InfoBasicPoke';
import InfoStatsComponent from './InfoStats/InfoStats';

const MainStats = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    margin-top: 160px;
    background-color: rgb(243, 243, 243);
`;

const HeaderImg = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    height: 150px;
    width: 100%;
    position: relative;
`;

const ImgPoke = styled.img`
    height: 400px;
    position: absolute;
    bottom: -50px;
`;



const PokeStats = ({ name, ...pokemon }) => {

    //console.log(pokemon)

    const hpPokemon = (pokemon.stats?.[0]['base_stat']*100/150);
    const defensePokemon = (pokemon.stats?.[2]['base_stat']*100/150);
    const attackPokemon = (pokemon.stats?.[1]['base_stat']*100/150);
    const speedPokemon = (pokemon.stats?.[5]['base_stat']*100/150);
    

    return (
        <MainStats>

            <HeaderImg className={`${pokemon.typeBg}`}>
                <ImgPoke src={pokemon.imgPokemon} alt='name' />
            </HeaderImg>
           
            <InfoBasicPoke
                name={name || 'Loading...'}
                id={pokemon?.id}
                weight={pokemon?.weight}
                height={pokemon?.height}
                types={pokemon?.types}
                abilities={pokemon?.abilities}
            />

            <InfoStatsComponent
                hpPokemon={hpPokemon.toFixed()}
                defensePokemon={defensePokemon.toFixed()}
                attackPokemon={attackPokemon.toFixed()}
                speedPokemon={speedPokemon.toFixed()}
            />

        </MainStats>
    )
}

export default PokeStats