export const userColumns = [
  { field: "id", headerName: "ID 1", width: 70 }, 
  { field: "id2", headerName: "ID 2", width: 70 }, 
  {
    field: "user1",
    headerName: "Student 1",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img1} alt="avatar" />
          {params.row.username1}
        </div>
      );
    },
  },
  {
    field: "user2",
    headerName: "Student 2",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img2} alt="avatar" />
          {params.row.username2}
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    id2: 101,
    username1: "norhane1",
    img1: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    username2: "norhane2",
    img2: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    status: "active",
  },
  {
    id: 2,
    id2: 102,
    username1: "user1",
    img1: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    username2: "user2",
    img2: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611740.jpg?semt=ais_hybrid",
    status: "inactive",
  },
];
