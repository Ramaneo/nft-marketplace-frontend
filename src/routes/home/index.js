import "./../../App.css";
import NavBar from "./../../components/NavBar";
import { Outlet } from 'react-router-dom';


function Home() {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <div style={{marginTop: 90}}>
        <div style={{...styles.HomeContainer}}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const styles = {
  HomeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}

export default Home;
