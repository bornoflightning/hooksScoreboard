import React from 'react';
import logo from './logo.svg';
import './App.css';




  function Header(props) {
    return (
        <header>
        <h1>{ props.title } </h1>
        <p className= "stats">PLAYERS: { props.totalPlayers }</p>
        </header>
    );
}

function Player(prop) {
    return (
        <div className= "player">
            <div className= "player-name"> { prop.name }</div>
            <button className="remove-player counter-action" onClick={ () => prop.removePlayer(prop.id) }>✖</button>
           
            <Counter score={ prop.score }/>
        </div>
    )
}

// this component is created using class, which allows the use of state
const Counter = () => {
    const [score, setScore] = React.useState(1);
    // this.state = {
    //     score: 0
    // };    

    const incrementScore = () => {        
        setScore(prevScore => prevScore + 1);
        // this.setState( prevState=> {
        //     return{
        //         score: prevState.score + 1
        //     };            
        // });
    }

    const decrementScore = () => {  
        setScore(prevScore => prevScore - 1);
    //     this.setState( prevState => {
    //         return {
    //             score: prevState.score -1
    //         }
    //     });
    }

   
    return (
        <div className= "counter">
            <button className= "counter-action decrement" onClick={() => decrementScore()}>-</button>
            <span className= "counter-score">{ score }</span>
            <button className= "counter-action increment" onClick={() => incrementScore()}>+</button>
        </div>
        )
  
}

function Footer(props) {
    return (
        <footer className="footer">

        </footer>
    );
}

const App = () => {
    const [players, setPlayers] = React.useState([
        {
            name:"Player 1",                    
            id: 1
        },
        {
            name:"Player 2",                   
            id: 2
        },
        {
            name:"Player 3",                    
            id: 3
        },
        {
            name:"Player 4",                    
            id: 4
        }
    ]);
    

    const handleRemovePlayer = (id) => {
        setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id))
    }
    


    return(
        <div className= "scoreboard">
            <Header title="Scoreboard" totalPlayers= {players.length}/>

            {/* Player List */}
            {players.map(
                player => 
                <Player 
                    name= {player.name} 
                    id= {player.id}                        
                    key={ player.id.toString()}
                    removePlayer= { handleRemovePlayer }
                    />
            )}
            

            <Footer />
        </div>
    )
}

    


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);


//below is the old way of doing thigs
// ReactDOM.render(
    
//     <App />,
//     document.getElementById("root")

// );


export default App;
