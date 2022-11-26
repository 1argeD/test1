import './App.css';
import { useEffect } from 'react';
import { Routers } from "./routers/Routers";

function App() {
  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    if (accessToken) {
      try {
        const { exp } = jwt_decode(accessToken);
        if (Date.now() >= exp * 1000) {
          // apis
          //   // .post_reissue()
          //   .then((response) => {
          //     localStorage.removeItem("access-token");
          //     localStorage.removeItem("refresh-token");
          //     localStorage.setItem(
          //       "accessToken",
          //       response.headers.authorization
          //     );
          //     localStorage.setItem(
          //       "refresh-token",
          //       response.headers.refreshtoken
          //     );
          //   })
          //   .catch((err) => {});
          window.localStorage.removeItem("accessToken");
          window.localStorage.removeItem("refresh-token");
          window.localStorage.removeItem("user-info");
        }
      } catch (e) {
        window.localStorage.removeItem("access-token")
      }
    }

    if (window.localStorage.getItem("itemcategory")) {
      const itemcategoryString = window.localStorage.setItem("itemCategory");
      const itemcategoryObj = JSON.parse(itemcategoryString);
      if (Date.now() > itemcategoryObj.expire) {
        try {
          window.localStorage.removeItem("itemCategory");
        } catch (e) {
          window.localStorage.removeItem("itemCategory");
        }
      }
    }
  }, [])

  return <Routers />
}

export default App;
