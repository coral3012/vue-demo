export function isLogined() {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
}

export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(v) {
  return localStorage.setItem("token", v);
}

export function removeToken() {
  return localStorage.removeItem("token")
}

export const serverUrl = "http://localhost:3009";
