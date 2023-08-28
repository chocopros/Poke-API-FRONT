import styled from 'styled-components';
import '../../Pokedex/CARD/StyleColorPokemon.css'

const MainStats = styled.article`
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
    height: 400px;
    position: absolute;
    bottom: -50px;
`;

const InfoBasicPokemon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px 0;
    margin-top: 60px;
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
    flex-wrap: wrap;
    gap: 50px;
    text-transform: capitalize;
`;

const ContainerDetailsWh = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    
`;

const TypeAbilityPokemon = styled.div`
    display: flex;
    margin: 20px 0;
    width: 100%;
    
`;

const ContainerRg = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SlopContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
`;

const Slop = styled.div`
    text-transform: capitalize; 
    color: #ffff;
    padding: 7px 30px;
    font-weight: 700;
`;

const SlopTwo = styled(Slop)`
    border: 1px solid black;
    color: black;
`

const PokeStats = ( { name, ...pokemon} ) => {

    console.log(pokemon)

  return (
    <MainStats>
        <HeaderImg className={`${pokemon.typeBg}`}>
            <ImgPoke src={pokemon.imgPokemon} alt='name' />
        </HeaderImg>
        <InfoBasicPokemon>
            <NumberPokemon>{`#${pokemon?.id}`}</NumberPokemon>
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
            <TypeAbilityPokemon>
                <ContainerRg>
                    <h3>Type</h3>
                    <SlopContainer className="container__type">

                        {
                            pokemon.types?.map(t => (
                            <Slop className={`${t.type.name}-slop`} key={t.type.name}>{t.type.name}</Slop>
                            ))
                        }
                         
                    </SlopContainer>
                </ContainerRg>
                <ContainerRg>
                    <h3>Abilities</h3>
                    <SlopContainer className="container__type">
                    {
                            pokemon.abilities?.map(a => (
                            <SlopTwo  key={a.ability.name}>{a.ability.name}</SlopTwo>
                            ))
                        }

                    </SlopContainer>
                </ContainerRg>
            </TypeAbilityPokemon>

        </InfoBasicPokemon>
    </MainStats>
  )
}

export default PokeStats