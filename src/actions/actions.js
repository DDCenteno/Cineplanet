export const actionTypes = {
    NAVIGATION_TO : 'NAVIGATION_TO',
    GET_DATA : 'GET_DATA',
    GET_DATA_MOVIES: 'GET_DATA_MOVIES',
    GET_DATA_MOVIE: 'GET_DATA_MOVIE',
    BUYING_TICKET: 'BUYING_TICKET'
};
    
export const navigationTo = (page, id, idmovie) => ({
    type: actionTypes.NAVIGATION_TO,
    page,
    id,
    idmovie,
});
  
export const getDataCinemas = (payload) => ({
    type: actionTypes.GET_DATA,
    payload,
});

export const getDataMovies = (payload) => ({
    type: actionTypes.GET_DATA_MOVIES,
    payload,
})

export const getDataMovie = (payload) => ({
    type: actionTypes.GET_DATA_MOVIE,
    payload
})

export const buyingTicket = () => ({
    type: actionTypes.BUYING_TICKET
})