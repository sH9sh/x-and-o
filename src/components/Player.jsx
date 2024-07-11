import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        setIsEditing((editing) => !editing);

        if (isEditing){
            onChangeName(symbol, playerName);
        }
        
    }

    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editPlayerName = <span className='player-name'>{playerName}</span>;
    // let btnCaption = 'Edit';

    if(isEditing){
        editPlayerName = <input type="text" required defaultValue={playerName} onChange={handleChange} />;
    }
    // test
    return (
        <li className={isActive ? 'active' : undefined}>
          <span className="player">
            {editPlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save': 'Edit'}</button>
        </li>
    )
}