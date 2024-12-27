export const themeColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "teacher",
      headerName: "Teacher",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.teacherName}
          </div>
        );
      },
    },
    {
      field: "theme",
      headerName: "Theme",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="approveButton"
              onClick={() => console.log("Approved", params.row.id)}
            >
              Approve
            </div>
            <div
              className="deleteButton"
              onClick={() => console.log("Deleted", params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  
  export const themeRows = [
    {
      id: 1,
      teacherName: "Mr. Bouramoul",
      img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid",
      theme: "Master Themes",
    },
    {
      id: 2,
      teacherName: "Ms. Benali",
      img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid",
      theme: "Educational Design",
    },
    {
      id: 3,
      teacherName: "Dr. Norhane",
      img: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611704.jpg?semt=ais_hybrid",
      theme: "Food App Development",
    },
  ];
  