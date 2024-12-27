import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import GroupIcon from "@mui/icons-material/Group";
import ListIcon from "@mui/icons-material/List";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        {/* Edulink navigates to homepage */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Edulink</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          {/* Main option navigates to homepage */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <HomeIcon className="icon" />
              <span>Main</span>
            </li>
          </Link>

          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <p className="title">STUDENTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <ListIcon className="icon" />
              <span>Students List</span>
            </li>
          </Link>
          <Link to="/teams" style={{ textDecoration: "none" }}>
  <li>
    <GroupIcon className="icon" />
    <span>Teams</span>
  </li>


          </Link>
          <Link to="/applications" style={{ textDecoration: "none" }}>
  <li>
    <BorderColorIcon className="icon" />
    <span>Applications</span>
  </li>
</Link>

          <p className="title">TEACHERS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <ListIcon className="icon" />
              <span>Teacher List</span>
            </li>
          </Link>
          <Link to="/themes" style={{ textDecoration: "none" }}>
  <li>
    <BorderColorIcon className="icon" />
    <span>Themes</span>
  </li>
</Link>


          <p className="title">USER</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/
          " style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
