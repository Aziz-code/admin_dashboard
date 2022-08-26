import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import photo from "../../assets/photo.jpeg";
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
            <div className="title">Information</div>
            <div className="item">
              <img src={photo} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Aziz Hussain</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">azizsogiyawala@gmail.com</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+919302284856</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Eden gardens. New Jersey
                  </span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ((Last 6 months))" />
          </div>
        </div>
        <div className="bottom">
          <div className="title">Last Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};
export default Single;
