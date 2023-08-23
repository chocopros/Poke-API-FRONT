import React from 'react'
import { useDispatch } from 'react-redux';
import { setNameTrainer } from '../store/slices/nameTrainer.slice';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
    const handleSubmit = e => {

        e.preventDefault();
        const nameTrainerPoke = e.target.name.value.trim();
        if (nameTrainerPoke.length !== 0) {
          dispatch(setNameTrainer(nameTrainerPoke));
          e.target.name.value = '';
          navigate('/pokedex')
        };
        
    };

  return (
    <section>
        <h1>Hi Trainer! Pokemon</h1>
        <p>To Start give me your trainer name</p>
        <form onSubmit={handleSubmit}>
            <input id='name' type="text" />
            <button>Go!</button>
        </form>
    </section>
  )
}

export default Home