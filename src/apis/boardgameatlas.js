import axios from 'axios';

const ID = 'ri1FSeePx7';

export default axios.create({
    baseURL: 'https://api.boardgameatlas.com/api',
    params: {
        client_id: ID,
        limit: 50,
        fuzzy_match: true
    }
});