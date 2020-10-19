const APIKEY = "6d404d12c97272d1be9b5ebdb6208b8c";

const requests = {
    fetchTrending : `/trending/all/day?api_key=${APIKEY}`,
    fetchOriginals : `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`,
}

export default requests
