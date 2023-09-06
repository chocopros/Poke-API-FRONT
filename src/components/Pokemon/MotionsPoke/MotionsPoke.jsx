import React from 'react'
import styled from 'styled-components'

const MainMotions = styled.section`
  margin: 50px 0;
  padding: 50px 0;
  background-color: rgb(243, 243, 243);
`;

const ContainerMovementsPoke = styled.article`
  padding: 0 30px;
`;

const ContainerMove = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px 0;
`

const Title = styled.h2`
  margin-left: 30px;
`;

const MovePoke = styled.span`
  color: white;
  font-weight: 700;
  background-color: green;
  padding: 10px 15px;
  border-radius: 15px;
`;

const MotionsPoke = ({ moves }) => {

  return (
    <MainMotions>

      <Title >Movements</Title >

      <ContainerMovementsPoke>

        <ContainerMove>

          {
            moves?.map(m => <MovePoke key={m.move.name}>{m.move.name}</MovePoke>)
          }

        </ContainerMove>

      </ContainerMovementsPoke>

    </MainMotions>
  )
}

export default MotionsPoke