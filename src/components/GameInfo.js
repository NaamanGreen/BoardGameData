import React from 'react';

const GameInfo = ({game}) => {

    if(!game) {
        return <div>No results.</div>
    } 

    function checkPublisher(){
        if(typeof game.primary_publisher != 'undefined'){
            return game.primary_publisher.name;
        } else {
            return 'Unknown';
        }
    }

    function numPlayersEqual(){
        if(game.min_players == game.max_players){
            return true;
        } else{
            return false;
        }
    }

    function minMaxPlaytimeEqual(){
        if(game.min_playtime== game.max_playtime){
            return true;
        } else{
            return false;
        }
    }

    return (
        <article className="info">
            <strong>Player(s):</strong> {numPlayersEqual() ? game.min_players : `${game.min_players}-${game.max_players}`} <br/>
            <strong>Play time:</strong> {minMaxPlaytimeEqual() ? game.min_playtime : `${game.min_playtime}-${game.max_playtime}`} minutes <br/>
            <strong>Publisher:</strong> {checkPublisher()} <br/>
            <strong>Year Published:</strong> {game.year_published} <br/>
        </article> 
    );

}

export default GameInfo;