import { ADD_SEASON,REMOVE_SEASON,MARK_COMPLETE } from './action.types'

export const addSeason = (seasons) => ({
    type: ADD_SEASON,
    paylod: season
})


export const removeSeason = (id) => ({
    type: REMOVE_SEASON,
    payload: id
})

export const markComplete = (id) =>({
    type: MARK_COMPLETE,
    payload: id
})