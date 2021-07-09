import React from 'react';
import './GameDetail.css';

const GameDetail = ({game}) => {
    if(!game) {
        return <div>No results.</div>
    } 
    
    function createMarkup(){
        return {__html: `${game.description}`};
    }

    function checkPublisher(){
        if(typeof game.primary_publisher != 'undefined'){
            return game.primary_publisher.name;
        } else {
            return 'Unknown';
        }
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
                    <article className="info">
                        <strong>Players:</strong> {game.min_players}-{game.max_players} <br/>
                        <strong>Play time:</strong> {game.min_playtime}-{game.max_playtime} minutes <br/>
                        <strong>Publisher:</strong> {checkPublisher()} <br/>
                        <strong>Year Published:</strong> {game.year_published} <br/>
                    </article>
                </div>
                <h3 className="ui header">{game.name}</h3>
                <p dangerouslySetInnerHTML={createMarkup()}></p>
            </div>
        </div>
    );
};

export default GameDetail;

