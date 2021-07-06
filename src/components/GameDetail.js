import React from 'react';

const GameDetail = ({game}) => {
    if(!game) {
        return <div>No results.</div>
    } 
    
    return (
        <div>
            <div className="ui segment">
                <img alt={game.name} className="ui image" src={game.images.small} />
                <h4 className="ui header">{game.name}</h4>
                <button className="ui button">Check Guild Collection</button>
                <button className="ui button">Add to Personal Collection</button>
                <p>{game.description}</p>
            </div>
        </div>
    );
};

export default GameDetail;

