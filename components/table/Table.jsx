import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1,
      product: "Norhane",
      img: "https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes_23-2149436185.jpg?w=360",
      teacher: "Bouramoul",
      date: "December",
      theme: "Master themes",
      status: "Approved",
    },
    {
      id: 2,
      product: "Borhane",
      img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid",
      teacher: "Benali Mohemed",
      date: " December",
      theme: "Food App",
      status: "Declined",
    },
    {
      id: 3,
      product: "Norhane",
      img: "https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes_23-2149436185.jpg?w=360",
      teacher: "Bouramoul",
      date: "December",
      theme: "Master themes",
      status: "Approved",
    },
    {
      id: 4,
      product: "Borhane",
      img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid",
      teacher: "Benali Mohemed",
      date: " December",
      theme: "Food App",
      status: "Pending",
    },
    {
      id: 5,
      product: "Norhane",
      img: "https://img.freepik.com/psd-gratuit/illustration-3d-personne-lunettes_23-2149436185.jpg?w=360",
      teacher: "Bouramoul",
      date: "December",
      theme: "Master themes",
      status: "Approved",
    },
    {
      id: 6,
      product: "Borhane",
      img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid",
      teacher: "Benali Mohemed",
      date: " December",
      theme: "Food App",
      status: "Declined",
    },
    
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell"> ID</TableCell>
            <TableCell className="tableCell">Student</TableCell>
            <TableCell className="tableCell">Teacher</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Theme </TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.teacher}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.theme}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
