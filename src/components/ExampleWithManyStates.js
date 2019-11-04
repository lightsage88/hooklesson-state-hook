import React, {useState} from 'react';

function ExampleWithManyStates(){
    const [age, setAge] = useState(31);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{text: 'learn hooks'}]);
    const [videogames, setVideogames] = useState(['Legend of Zelda: Links Awakening', 'Super Smash Bros. Ultimate']);

//state variables made via hooks can be objects and arrays too!, behold the videogames for an example.

    function handleOrangeClick(){
        setFruit('orange');
    }

    function handleGameButtonClick(){
        setVideogames([...videogames, 'Death Stranding']);
    }

    const games = videogames.map((x)=>{
        return <h1>{x}</h1>
    })
    //You can iterate over 

    return(
        <>
        <h1>Example With Many States!</h1>

        <p>Our games are {games}</p>

        <button onClick={()=>handleGameButtonClick()}>add a game</button>

        <p>Our fruit of the day is {fruit}</p>
        <aside>Fun fact: unlike 'this.setState' in a class, updating a state variable via hooks always replaces it, instead of merges it.</aside>
        <button onClick={()=>handleOrangeClick()}>If you click this, it will change thanks to setFruit from useState('banana')</button>
        </>
    )

}

export default ExampleWithManyStates