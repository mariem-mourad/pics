import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID _OG17L30Pa0BULtE-AZGqwwzPESNfer2el8YpzQ5Sbs'
        },
        params:{
            query: term,
        },
    });
    
    return response.data.results;
};

export default searchImages;