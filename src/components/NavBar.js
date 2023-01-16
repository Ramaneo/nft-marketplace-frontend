import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#fff",
        padding: "25px 80px",
        height: 40,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      <Link to="/"></Link>
      <div
        style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
      >
        <div style={{ ...styles.NavbarButtonsContainer }}>
          <div style={{ ...styles.NavbarButtonContainer }}>
            <Link to="/Profile/nufer">
              <img
                style={{ ...styles.NavbarButtonProfile }}
                src="https://picsum.photos/200"
                alt="profile"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  NavbarButtonsContainer: {
    display: "flex",
    alignItems: "center",
  },
  NavbarButtonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "1rem",
  },
  NavbarButtonProfile: {
    height: "2rem",
    width: "2rem",
    borderRadius: "9999px",
  },
  NavbarButtonIcon: {
    height: "2rem",
    width: "2rem",
  },
};
export default NavBar;
