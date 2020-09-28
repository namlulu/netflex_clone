import axios from 'axios';

//엑시오 기본 셍팅
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '186f010e2b61df97fab596fb996f9286',
        language: 'en-US',
    },
});

export const moviesApi = {
    nowPlaying: () => api.get('movie/now_playing'),
    upcoming: () => api.get('movie/upcoming'),
    popluar: () => api.get('movie/popular'),
    movieDetail: (id) =>
        api.get(`movie/${id}`, {
            params: {
                append_to_response: 'videos',
            },
        }),
    search: (term) =>
        api.get('search/movie', {
            params: {
                query: encodeURIComponent(term),
            },
        }),
};

export const tvApi = {
    topRated: () => api.get('tv/top_rated'),
    popluar: () => api.get('tv/popular'),
    airingToday: () => api.get('tv/airing_today'),
    showDetail: (id) =>
        api.get(`tv/${id}`, {
            params: {
                append_to_response: 'videos',
            },
        }),
    search: (term) =>
        api.get('search/tv', {
            params: {
                query: encodeURIComponent(term),
            },
        }),
};
