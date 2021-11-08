import axios from "axios";


export const LoginUser = async (username,password) => {
    const accessToken = await axios.post("http://localhost:5000/api/users/login",{username,password});
    const res = await fetch("http://localhost:5000/api/users/login", {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
      return res.json();
    }
