import React from 'react';
import SearchBar from './SearchBar';
import boardgameatlas from '../apis/boardgameatlas';
import GameList from './GameList';
import GameDetail from './GameDetail';
import './App.css';

class App extends React.Component {

    state = { games: [], selectedGame: null };

    onTermSubmit = async (term) => {
        const response = await boardgameatlas.get('/search',{
            params: {
                name: term
            }
        });

        const gameList = [];
        
        response.data.games.map((game) => {
            if(game.type==="game" && game.rank < 9999999) {
                gameList.push(game);
            } 
        });

        this.setState({
             games: gameList,
             selectedGame: gameList[0]
        });
    };

    onGameSelect = (game) => {
        this.setState({ selectedGame: game })
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <article>
                            <GameDetail game={this.state.selectedGame} />
                        </article>
                        <article>
                            <GameList onGameSelect={this.onGameSelect} games={this.state.games} />
                        </article>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default App;