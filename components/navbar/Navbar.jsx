import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="wrapper">
       
        <div className="items">
          <div className="item">
            <img
              src="https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes_23-2149436185.jpg?w=360"
              alt="Profile"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
