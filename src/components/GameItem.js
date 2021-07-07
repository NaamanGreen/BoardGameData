import React from 'react';
import './GameItem.css';

const GameItem = ({game, onGameSelect}) => {
    return (
        <div onClick={() => onGameSelect(game)} className="game-item item">
            <img alt={game.name} className="ui image" src={game.images.original} />
            <div className="content">
                <div className="header">
                    {<p id="game-title">{game.name}</p>}
                </div>
                <div>
                    <p><strong>Publisher:</strong> {game.primary_publisher.name}</p>
                    <p><strong>Players:</strong> {game.min_players}-{game.max_players}</p>
                    <p><strong>Play time:</strong> {game.min_playtime}-{game.max_playtime} minutes</p>
                </div>
            </div>
        </div>
    );
};

export default GameItem;