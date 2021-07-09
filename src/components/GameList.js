import React from 'react';
import GameItem from './GameItem';

const GameList = ({games, onGameSelect}) => {

    const renderedList = games.map((game) => {
        return <GameItem key={game.id} onGameSelect={onGameSelect} game={game} />;
    });

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
};

export default GameList;