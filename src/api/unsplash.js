import axios from "axios";

/*axios.get({
    url,
    {
        params:{query:term},
        headers:{
             Authorization : 'Client-ID A1OoK-fx1Jm5L9zq_iyU1V4k3ZUfGgQ2fa0_GHWbH0A'



        }
    }
}) */
var unsplashClient = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID A1OoK-fx1Jm5L9zq_iyU1V4k3ZUfGgQ2fa0_GHWbH0A",
  },
});

export default unsplashClient;
