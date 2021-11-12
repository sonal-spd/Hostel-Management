// import { asyncLocalStorage } from "./localStorage";
export function getUser() {
  if (typeof window !== 'undefined'){
  const userStr = window.localStorage.getItem("user");
  console.log(userStr);
  
  if(userStr) return JSON.parse(userStr);
  else return null;
  }
}

export function getToken() {
  if (typeof window !== 'undefined'){
  
  return window.localStorage.getItem("token") || null;
  }
}

export function setUserSession(token,user) {
  if (typeof window !== 'undefined'){
    
  window.localStorage.setItem("token",token);
  window.localStorage.setItem("user",JSON.stringify(user));
  }
}

export function removeUserSession() {
  if (typeof window !== 'undefined'){
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("user");
  }
}