import React from 'react';
import SearchBar from './SearchBar';
import boardgameatlas from '../apis/boardgameatlas';
import GameList from './GameList';
import GameDetail from './GameDetail';

class App extends React.Component {

    state = { games: [], selectedGame: null };

    onTermSubmit = async (term) => {
        const response = await boardgameatlas.get('/search',{
            params: {
                name: term
            }
        });

        this.setState({
             games: response.data.games, 
             selectedGame: response.data.games[0]
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
                        <div className="nine wide column">
                            <GameDetail game={this.state.selectedGame} />
                        </div>
                        <div className="seven wide column">
                            <GameList onGameSelect={this.onGameSelect} games={this.state.games} />
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default App;