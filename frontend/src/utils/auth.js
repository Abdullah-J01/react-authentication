import { redirect } from "react-router-dom";

export const tokenDuration = () => {
    const storeExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storeExpirationDate);
    const now = new Date();

    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}

export const getAuthToken = () => {
    const token = localStorage.getItem('token');

    if(!token){
        return null;
    }

    const duration = tokenDuration();

    if(duration < 0){
        return "EXPIRED";
    }

    return token;
}

export const tokenLoader = () => {
    return getAuthToken();
}

export const checkAuthLoader = () => {
    const token = getAuthToken();
    if(!token){
        return redirect("/auth");
    }
    return null;
}