import axios from 'axios';

const KEY = 'AIzaSyCCtdML-_fZ9yCnbxfe0T7YiH9ChCQZORI';

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxresults: 5,
        key: KEY,
    }
}); 

export default youtube;