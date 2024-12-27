import "./datatable.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { themeColumns, themeRows } from "../../datatablesourceThemes";

const Themes = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">Themes List</div>
          <DataGrid
            className="datagrid"
            rows={themeRows}
            columns={themeColumns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default Themes;
