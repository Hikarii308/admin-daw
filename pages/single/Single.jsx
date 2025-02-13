import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Norhane Benf</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">norhanebenf@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+21312345</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Constantine
                  </span>
                </div>
                
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Projects ( Last 4 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Update</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
