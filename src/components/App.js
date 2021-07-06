import React from 'react';
import SearchBar from './SearchBar';
import boardgameatlas from '../apis/boardgameatlas';

class App extends React.Component {


    onTermSubmit = async (term) => {
        const response = await boardgameatlas.get('/search',{
            params: {
                name: term
            }
        });

        console.log(response);
    };

    render() {
        return (
            <div>
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}

export default App;