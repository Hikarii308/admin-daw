import "./widget.scss";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EngineeringIcon from '@mui/icons-material/Engineering';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const Widget = ({ type }) => {
  let data;

  const amount = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
             
              backgroundColor: "rgba(212, 176, 176, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    case "req":
      data = {
        title: "Requests",
        link: "View all requets",
        icon: (
          <BorderColorIcon
            className="icon"
            style={{
              backgroundColor: "rgba(212, 176, 176, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    case "projects":
      data = {
        title: "Projects",
        link: "View ongoing projects",
        icon: (
          <EngineeringIcon
            className="icon"
            style={{ backgroundColor: "rgba(212, 176, 176, 0.2)",
              color: "purple", }}
          />
        ),
      };
      break;
    case "themes":
      data = {
        title: "Themes",
        link: "See details",
        icon: (
          <ReceiptLongIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
       
        {data.icon}
      </div>
    </div>
  );
};
export default Widget;
