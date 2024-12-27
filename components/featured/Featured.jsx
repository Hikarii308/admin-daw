import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Requests</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={30} text={"30%"} strokeWidth={4} />
        </div>
        <p className="title">Total Requests of the week</p>
        <p className="amount">20</p>
        
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Declined</div>
            <div className="itemResult negative">
            
              <div className="resultAmount">6</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">pending</div>
            <div className="itemResult pending">
              <div className="resultAmount">6</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">accepted</div>
            <div className="itemResult positive">
              <div className="resultAmount">4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
