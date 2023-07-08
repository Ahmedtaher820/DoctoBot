import axios from 'axios'
import router from "../../router/main"
import {
  ERR_403,
  NOT_FOUND_CODE,
  SERVER_CODE,
  SUBSCRIPTION_ENDS,
  UNAUTHORIZED_CODE,
  VALIDATION_CODE,
  PAGE_EXPIRED
} from "../../Constants/constants"
const instance = axios.create({
    baseURL:'https://doctobot.onrender.com/doctobot'
})
instance.interceptors.request.use((request) => {
  const authToken = localStorage.getItem('token')

  if (authToken)
    request.headers.Authorization = `Bearer ${authToken}`

  return request
},
(error) => {
  return Promise.reject(error);
}
)
//  @ts-ignore
instance.interceptors.response.use((response)=>{
    if (response?.status === UNAUTHORIZED_CODE) {
        router.push({path:'/login'})
        return
      }
      return response
    },
    (error) => {
        if (error.response?.status === UNAUTHORIZED_CODE || error.response?.status === PAGE_EXPIRED) {
          localStorage.clear()
          router.push({ name: 'Login'})
          return
        }
        const errorData = error
        console.log(error)
        if (error.response?.status === VALIDATION_CODE) { throw { ...errorData } }
    
        // eslint-disable-next-line no-throw-literal
        throw { ...errorData }
      },
)
export default instance