import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Clock from "./components/Clock";
import Game from "./components/Game";
import Header from "./components/Header";
import Home from "./components/Home";
import Play from "./components/Play";
function App() {
  const testUser = "Miguel"
  const testJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  const [user, setUser] = useState(testUser);
  const [jwt, setJwt] = useState(testJwt);

  return (
    <div>
      <Header/>
      <Routes href="https://th.bing.com/th/id/R.db44bf29c16cebecd6592b34dab85a52?rik=PcV2Dl135qBx4A&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f9%2f0%2f883392-shiny-chrome-wallpaper-1920x1080-smartphone.jpg&ehk=txtffGMVFxieZ9W41KyV%2fKLwR7smb03MdGyzbnuokvI%3d&risl=&pid=ImgRaw&r=0">
        <Route path="/" exact  element={<Home/>}/>
        {/*<Route path="/login" element={<Login setJwt/>}/>*/}
        <Route path={"/play"} element={<Play jwt={jwt} />}/>


      </Routes>
    </div>
  );
}

export default App;
