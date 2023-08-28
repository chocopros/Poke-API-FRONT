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
    align-items: center;
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
`;



const InfoStats = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 100px;
    margin: 50px 0;
`;

const ContainerStats = styled.div`
    
`;

const ContainerStat = styled.div`
    margin: 20px 0;
`;

const TitleStat = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ContainerBarra = styled.div`
    position: relative;
`;

const GreyLabel = styled.div`
    width: 100%;
    height: 30px;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(194,194,194,1) 45%, rgba(106,106,106,1) 100%);
`
const YellowLabel = styled.div`
    position: absolute;
    top: 0;
    height: 30px;
    background: rgb(252,214,118);
    background: linear-gradient(90deg, rgba(252,214,118,1) 0%, rgba(230,144,30,1) 45%, rgba(255,58,0,1) 100%);
`;

const PokeStats = ({ name, ...pokemon }) => {

    //console.log(pokemon)

    const hpPokemon = pokemon.stats?.[0]['base_stat'];
    const defensePokemon = pokemon.stats?.[2]['base_stat'];
    const attackPokemon = pokemon.stats?.[1]['base_stat'];
    const speedPokemon = pokemon.stats?.[5]['base_stat'];
    

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
                        <p>{`${pokemon.weight / 10} kg`}</p>
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
                                    <SlopTwo key={a.ability.name}>{a.ability.name}</SlopTwo>
                                ))
                            }

                        </SlopContainer>
                    </ContainerRg>
                </TypeAbilityPokemon>
            </InfoBasicPokemon>

            <InfoStats>
                <h2>Stats</h2>
                <ContainerStats className="container__stats">

                    <ContainerStat >
                        <TitleStat>
                            <h3>HP</h3>
                            <h3>{`${hpPokemon} / 150`}</h3>
                        </TitleStat>
                        <ContainerBarra>
                            <GreyLabel className="grey__label"></GreyLabel>
                            <YellowLabel style={{width: `${hpPokemon}%`}} className="yellow__label"></YellowLabel>
                        </ContainerBarra>
                    </ContainerStat>

                    <ContainerStat >
                        <TitleStat>
                            <h3>DEFENSE</h3>
                            <h3>{`${defensePokemon} / 150`}</h3>
                        </TitleStat>
                        <ContainerBarra>
                            <GreyLabel className="grey__label"></GreyLabel>
                            <YellowLabel style={{width: `${defensePokemon}%`}} className="yellow__label"></YellowLabel>
                        </ContainerBarra>
                    </ContainerStat>

                    <ContainerStat >
                        <TitleStat>
                            <h3>ATTACK</h3>
                            <h3>{`${attackPokemon} / 150`}</h3>
                        </TitleStat>
                        <ContainerBarra>
                            <GreyLabel className="grey__label"></GreyLabel>
                            <YellowLabel style={{width: `${attackPokemon}%`}} className="yellow__label"></YellowLabel>
                        </ContainerBarra>
                    </ContainerStat>

                    <ContainerStat >
                        <TitleStat>
                            <h3>SPEED</h3>
                            <h3>{`${speedPokemon} / 150`}</h3>
                        </TitleStat>
                        <ContainerBarra>
                            <GreyLabel className="grey__label"></GreyLabel>
                            <YellowLabel style={{width: `${attackPokemon}%`}} className="yellow__label"></YellowLabel>
                        </ContainerBarra>
                    </ContainerStat>

                    

                    

                </ContainerStats>

            </InfoStats>


        </MainStats>
    )
}

export default PokeStats