// import axios from 'axios'

//devTools
// import { devLog } from './toolBox'

const fetchingJson = async () => {
    let resp = await fetch('/localCFG.json')
    let dataJson = await resp.json();
    return dataJson

}

// const fetchingWithAxios = async () => {
//     let res = await axios.get('/localCFG.json')
//     return res.data
// }

export { fetchingJson }

