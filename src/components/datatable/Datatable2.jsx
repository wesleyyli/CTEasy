import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { contactsColumns } from "../../datatablesource2";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase"

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {
    // LISTEN (REALTIME)
    const unsub = onSnapshot(collection(db, "contacts"), (snapShot) => {
      let list = [];
      snapShot.docs.forEach(doc=>{
        list.push({id: doc.id, ...doc.data()})
      })
      setData(list)
    },(error)=> {
      console.log(error);
    });

    return () => {
      unsub();
    };
  },[])

  const handleDelete = async(id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (err) {
      console.log(err)
    }
    
    setData(data.filter((item) => item.id !== id));
  };


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={{pathname:`/contacts/${params.row.id}`, state:{test: true}}} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Contact
        <Link to="/contacts/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={contactsColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
