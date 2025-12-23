

let initialState = {
    usersData: [
        {
            id: 1,
            fname: 'Diana',
            lname: 'Raeva',
            country: 'Belarus',
            city: 'Grodno'
        },
        {
            id: 2,
            fname: 'Vitaliy',
            lname: 'Raev',
            country: 'Belarus',
            city: 'Grodno'
        },
        {
            id: 3,
            fname: 'Olga',
            lname: 'Raeva',
            country: 'Belarus',
            city: 'Grodno'
        },
        {
            id: 4,
            fname: 'Vera',
            lname: 'Raeva',
            country: 'Belarus',
            city: 'Grodno'
        },
        {
            id: 5,
            fname: 'Timofei',
            lname: 'Raev',
            country: 'Belarus',
            city: 'Grodno'
        },
        {
            id: 6,
            fname: 'Vanya',
            lname: 'Batchkovich',
            country: 'Ukrain',
            city: 'Shepetivka'
        },
    ],
}

const userReducer = (state = initialState) => {
    return state;
}

export default userReducer;