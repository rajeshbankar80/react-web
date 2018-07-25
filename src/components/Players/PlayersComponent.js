import React from 'react';
import PLAYER_API from '../../mock-api/playersApi';
import { Link } from 'react-router-dom'
const PlayersComponent = () => (
    <div>
        {
            PLAYER_API.getAllPlayers().map(p => (
                <h1 key={p.number}>
                    <Link to={`/roster/${p.number}`}>{p.name}</Link>
                </h1>
            ))
        }
    </div>
)

export default PlayersComponent