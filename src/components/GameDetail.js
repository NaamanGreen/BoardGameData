import React from 'react';
import GameInfo from './GameInfo';
import './GameDetail.css';

const GameDetail = ({game}) => {
    if(!game) {
        return <div>No results.</div>
    } 
    
    function createMarkup(){
        return {__html: `${game.description}`};
    }

    return (
        <div>
            <div className="ui segment">
                <div className="articles"> 
                    <article>
                        <img alt={game.name} className="ui image" src={game.images.small} />
                        <a href={game.official_url} style={ game.official_url != null ? { } : {display: 'none'}}><button className="ui button">Official Site</button></a>
                        <a href={game.rules_url} style={ game.rules_url != null ? { } : {display: 'none'}}><button className="ui button">Rules</button></a>
                    </article>
                    <GameInfo game={game} />
                </div>
                <h3 className="ui header">{game.name}</h3>
                <p dangerouslySetInnerHTML={createMarkup()}></p>
            </div>
        </div>
    );
};

export default GameDetail;

