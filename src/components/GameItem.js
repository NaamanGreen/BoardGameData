import React from 'react';
import './GameItem.css';



const GameItem = ({game, onGameSelect}) => {

    function checkPublisher(){
        if(typeof game.primary_publisher != 'undefined'){
            return game.primary_publisher.name;
        } else {
            return 'Unknown';
        }
    }
  
    return (
        <div onClick={() => onGameSelect(game)} className="game-item item">
            <div className="content">
                <img alt={game.name} className="ui image" src={game.images.original} />
                <div>
                    <div className="header">
                        <p id="game-title">{game.name}</p>
                    </div>
                    <p>
                        <strong>Players:</strong> {game.min_players}-{game.max_players} <br/>
                        <strong>Play time:</strong> {game.min_playtime}-{game.max_playtime} minutes <br/>
                        <strong>Publisher:</strong> {checkPublisher()} <br/>
                        <strong>Year Published:</strong> {game.year_published} <br/>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GameItem;