const initialState = {
    album: []
}

const GET_ALBUM = "GET_ALBUM";

export function getAlbum(data) {
    return {
        type: GET_ALBUM,
        payload: data
    }
}

export default function (state = initialState, action){
    switch(action.type){
        case GET_ALBUM:
            return {...state, album: action.payload}
        default:
            return state
    }
}