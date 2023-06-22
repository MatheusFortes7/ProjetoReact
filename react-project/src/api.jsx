export const API_URL = "https://dogsapi.origamid.dev/json";

export function TOKEN_POST(body) {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDADE_POST(token) {
  return {
    url: API_URL + "/jwt-auth/v1/token/validade",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}


export function USER_GET (token){
    return {
        url: API_URL + "/api/user",
        options: {
          method: "get",
          headers: {
            Authorization: "Bearer " + token,
          },
        },
      };
}

export function USER_POST (body){
  return {
      url: API_URL + "/api/user",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        },
      };
}

export function PHOTO_POST (formData, body){
  return {
      url: API_URL + "/api/user",
      options: {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
        },
      };
}