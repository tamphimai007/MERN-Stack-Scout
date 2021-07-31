import axios from 'axios';

export const createCamp = async (values, authtoken) =>
    await axios.post(process.env.REACT_APP_API + '/camp', values,
        {
            headers: {
                authtoken
            }
        })