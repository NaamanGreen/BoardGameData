import React from 'react';
import GameInfo from './GameInfo';
import './GameItem.css';


const GameItem = ({game, onGameSelect}) => {
  
    return (
        <div onClick={() => onGameSelect(game)} className="game-item item">
            <div className="content">
                <img alt={game.name} className="ui image" src={game.images.original} />
                <div>
                    <div className="header">
                        <p id="game-title">{game.name}</p>
                    </div>
                    <GameInfo game={game}/>
                </div>
            </div>
        </div>
    );
};

export default GameItem;