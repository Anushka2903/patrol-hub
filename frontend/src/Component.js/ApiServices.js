import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5800";

export function signup(data)
{
    return axios.post(`${API_BASE_URL}/register`,data)
}
export function verifyotp(data)
{
    return  axios.post(`${API_BASE_URL}/register/verify`,data)
}
export function signin(data)
{
    return axios.post(`${API_BASE_URL}/login`,data)
}
export function savecomplaints(data)
{
    return axios.post(`${API_BASE_URL}/vehiclecomplaints`,data)
}
export function updateComplaints(id,obj)
{
    return axios.put(`${API_BASE_URL}/update/compaintsvehicle/${id}/${obj}`)
}
export function saveKidnapingReport(data)
{
    return axios.post(`${API_BASE_URL}/compalint/kidnapingreport`,data)
}
export function saveGenralTheftReport(data)
{
    return axios.post(`${API_BASE_URL}/complaint/generaltheft`,data)
}
export function saveCharcterInfo(data)
{
       return axios.post(`${API_BASE_URL}/save/charcterverify`,data)
}
export function saveAddress(data)
{
    return axios.post(`${API_BASE_URL}/save/address`,data)
}
export function saveWitness(data)
{
      return axios.post(`${API_BASE_URL}/save/witness`,data)
}
export function savePgtenant(data)
{
    return axios.post(`${API_BASE_URL}/save/pgverify`,data)
}
export function updateuserKidnapingReport(id,obj)
{
    return axios.put(`${API_BASE_URL}/complaint/user/kdinapingreport/${id}/${obj}`)
}
export async function updatePoliceStationTOuser(id,obj)
{
    return axios.put(`${API_BASE_URL}/update/policestation/user/${id}/${obj}`)
}

export function updateuserGeneralThiftFir(id,obj)
{
    return axios.put(`${API_BASE_URL}/complaint/user/generaltheft/${id}/${obj}`)
}
export function updatePoliceStationToCharcter(id,obj)
{
    return axios.put(`${API_BASE_URL}/update/policestation/characterverify/${id}/${obj}`)
}
export function updateCharcterToAddress(id,obj)
{
    return axios.put(`${API_BASE_URL}/update/charcter/address/${id}/${obj}`)
}

export function updateCharcterToWitnes(id,obj)
{
    return axios.put(`${API_BASE_URL}/update/charcter/witness/${id}/${obj}`)
}
export function updatePgPoliceStation(id,obj)
{
    return axios.put(`${API_BASE_URL}/update/policestation/pgverify/${id}/${obj}`)
}
export function getDepartementData()
{
    return axios.get(`${API_BASE_URL}/`);
}
