import axios from './axios'
import { AxiosError } from 'axios';
interface IResponse<T> {
    message: string,
    code: number,
    result: T
}
export default function<T>(url: string, data={}, type='GET'): Promise<IResponse<T>> {
    return new Promise((resolve: (response: IResponse<T>) => void, reject: (error: AxiosError) => void) => {
        let promise
        if (type === 'GET') {  
            let dataStr = '' 
            Object.keys(data).forEach(key => {    
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {   
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            promise = axios.get(url)
        } else {
            promise = axios.post(url, {...data, token: window.sessionStorage.getItem('token')})
        }
        promise.then((response) => {
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
    })
}