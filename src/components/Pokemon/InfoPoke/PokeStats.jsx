import styled from 'styled-components';
import '../../Pokedex/CARD/StyleColorPokemon.css'

const MainStats = styled.article`
    background-color: rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    margin-top: 160px;
    max-width: 1300px;
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
    height: 300px;
    position: absolute;
    bottom: 10%;
`;

const InfoBasicPokemon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 50px 0;
`;

const NumberPokemon = styled.h2`
    font-size: 35px;
    padding: 5px 20px;
    border: 1px solid black;
`;

const NamePokemon = styled.h1`
    font-size: 45px;
    margin: 20px 0;
`;

const ContainerWh = styled.div`
    display: flex;
    gap: 50px;
    text-transform: capitalize;
`;

const ContainerDetailsWh = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const PokeStats = ( { name, ...pokemon} ) => {

  return (
    <MainStats>
        <HeaderImg className={`${pokemon.typeBg}`}>
            <ImgPoke src={pokemon.imgPokemon} alt='name' />
        </HeaderImg>
        <InfoBasicPokemon>
            <NumberPokemon>{`#${pokemon.id}`}</NumberPokemon>
            <NamePokemon>{name}</NamePokemon>
            <ContainerWh>
                <ContainerDetailsWh>
                    <h3>peso</h3>
                    <p>{`${pokemon.weight/10} kg`}</p>
                </ContainerDetailsWh>
                <ContainerDetailsWh>
                    <h3>altura</h3>
                    <p>{`${pokemon.height} dm`}</p>
                </ContainerDetailsWh>
            </ContainerWh>
        

        </InfoBasicPokemon>
    </MainStats>
  )
}

export default PokeStats