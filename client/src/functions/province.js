import axios from 'axios'

const baseUrl = 'https://thaiaddressapi-thaikub.herokuapp.com/'


export const getProvince = async () =>
    await axios.get(`${baseUrl}v1/thailand/provinces`)


export const getDistrict = async (province) =>
    await axios.get(baseUrl + "v1/thailand/provinces/" + province + "/district")

export const getSubDistrict = async (province, district) =>
    await axios.get(baseUrl + "v1/thailand/provinces/" + province + "/district/" + district)