import React from 'react';
import GameItem from './GameItem';

const GameList = ({games, onGameSelect}) => {

    const renderedList = games.map((game) => {

        if(game.type==="game"  && game.rank < 9999999) {
            return <GameItem key={game.id} onGameSelect={onGameSelect} game={game} />;
        } 
    });

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
};

export default GameList;