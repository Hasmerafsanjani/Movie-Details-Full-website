import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTRjMTkyYjdjZWI5ZTViMTY4Njc3NTlhYTJmNmNhZSIsInN1YiI6IjY1NjhjZmEzNmU5MzhhMDBjNmNlNWI0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tj7p4mZ7dhqPCn1BEOzHZM9v3tIC0L5vTu__XBEm5Lk";

// we can use by direct url-  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTRjMTkyYjdjZWI5ZTViMTY4Njc3NTlhYTJmNmNhZSIsInN1YiI6IjY1NjhjZmEzNmU5MzhhMDBjNmNlNWI0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tj7p4mZ7dhqPCn1BEOzHZM9v3tIC0L5vTu__XBEm5Lk"

const headers = {
    Authorization:"bearer " +TMDB_TOKEN,
};

export const fetchDataFromApi = async(url , params) => {
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    } catch (err){
        console.log(err);
        return err;
    }
}