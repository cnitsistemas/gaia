export const actionTypes = {
    SET_NEW_NOTIFICATION: 'SET_NEW_NOTIFICATION',
    CLEAR_NOTIFICATIONS: 'CLEAR_NOTIFICATIONS',
    SET_PENDING_NOTIFICATION: 'SET_PENDING_NOTIFICATION',
}

export const setNewNotification = (notification) => async (dispatch) => {
    dispatch({
        type: actionTypes.SET_NEW_NOTIFICATION,
        payload: notification
    })
}

export const setPendingNotification = (pending) => async (dispatch) => {
    dispatch({
        type: actionTypes.SET_PENDING_NOTIFICATION,
        payload: pending
    })
}

export const setClearNotifications = () => async (dispatch) => {
    dispatch({
        type: actionTypes.CLEAR_NOTIFICATIONS,
        payload: []
    })
}
