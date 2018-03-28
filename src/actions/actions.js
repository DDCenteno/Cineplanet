export const actionTypes = {
    NAVIGATION_TO : 'NAVIGATION_TO',
    GET_DATA : 'GET_DATA',
    BUYING_TICKET: 'BUYING_TICKET'
};
    
export const navigationTo = (page) => ({
    type: actionTypes.NAVIGATION_TO,
    page,
});
  
export const getDataCinemas = (payload) => ({
    type: actionTypes.GET_DATA,
    payload,
});

export const buyingTicket = () => ({
    type: actionTypes.BUYING_TICKET
})