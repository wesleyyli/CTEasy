export const contactsColumns = [
  { field: "id", headerName: "ID", width: 170 },
  {
    field: "contact",
    headerName: "Contact",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "company",
    headerName: "Company",
    width: 160,
  },
];


