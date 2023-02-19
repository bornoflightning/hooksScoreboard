let players = [
    

]


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
class Counter extends React.Component {
    // this is the constructor for the class 
    constructor(props) {
        super(props) 
        // here is one way of declaring the state, below is another way of doing the same thig
        this.state = {
            score: 0
        };    
        // the code below accomplishes he same thing as above but is a new version not widely supportedjust yet
        // state = {
        //  score: 0
        // }
           
    }

    incrementScore = () => {
        // react does not allow the update of state directly using this.state, so we have to use a function setState()
        // we can use a call back function as a argument, prevState allows the update of the state based on previous state
        this.setState( prevState=> {
            return{
                score: prevState.score + 1
            };            
        });
    }

    decrementScore = () => {        
        this.setState( prevState => {
            return {
                score: prevState.score -1
            }
        });
    }

    render(){
        return (
            <div className= "counter">
                <button className= "counter-action decrement" onClick={this.decrementScore}>-</button>
                <span className= "counter-score">{ this.state.score }</span>
                <button className= "counter-action increment" onClick={this.incrementScore}>+</button>
            </div>
            )
    }
    
}

function Footer(props) {
    return (
        <footer className="footer">

        </footer>
    );
}

class App extends React.Component {
    state = {
        players: [
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
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        });
    }
    

    render () {
        return(
            <div className= "scoreboard">
                <Header title="Scoreboard" totalPlayers= {this.state.players.length}/>
    
                {/* Player List */}
                {this.state.players.map(
                    player => 
                    <Player 
                        name= {player.name} 
                        id= {player.id}                        
                        key={ player.id.toString()}
                        removePlayer= { this.handleRemovePlayer }
                        />
                )}
                
    
                <Footer />
            </div>
        )
    }

    
}

ReactDOM.render(
    // <Header />,
    <App />,
    document.getElementById("root")


);