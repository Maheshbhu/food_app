import axios from "axios"
const axiosInstance=axios.create({
    baseURL:"http://localhost:8080/api"
});

axiosInstance.interceptors.request.use((config)=>{
    const userInfo=localStorage.getItem("userInfo");
    if(userInfo){
        const token=JSON.parse(userInfo).token;
        if(token){
            config.headers.Authorization=`Bearer ${token}`
        }
    }
    return config
},
(error)=>Promise.reject(error)

);
axiosInstance.interceptors.response.use((response)=>response,(error)=>{
    if(error.response && error.response.status===401){
        console.warn("Token expired or anauthorized user.");
        localStorage.removeItem("userInfo");
        window.location.href="/login"

    }
    return Promise.reject(error)
})


export default axiosInstance;