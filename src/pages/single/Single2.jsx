import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase"
import { useEffect, useState } from "react";

const Single = (props) => {
  const [contact, setContact] = useState([]);
  const pathname = window.location.pathname;
  const id = pathname.substring(10);



  useEffect(()=> {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDoc(doc(db, "contacts", id));
        setContact(querySnapshot.data())
    } catch (err) {
      console.log(err);
    }
    };
    fetchData();
  }, []);

  console.log(contact)
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
                src={contact.img}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{contact.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{contact.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{contact.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Company:</span>
                  <span className="itemValue">
                    {contact.company}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Field of Interest:</span>
                  <span className="itemValue">{contact.field}</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
        {/* <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div> */}
      </div>
    </div>
  );
};

export default Single;
