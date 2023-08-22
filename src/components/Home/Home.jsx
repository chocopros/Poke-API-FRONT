import React from 'react'

const Home = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value.trim());
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