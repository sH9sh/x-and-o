import { useState } from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        setIsEditing(true);
    }

    let playerName = <span className='player-name'>{name}</span>;
    // let btnCaption = 'Edit';

    if(isEditing){
        playerName = <input type="text" required value={name} />;
    }
    // test
    return (
        <li>
          <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save': 'Edit'}</button>
        </li>
    )
}