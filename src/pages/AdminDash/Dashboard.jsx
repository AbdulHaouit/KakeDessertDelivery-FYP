// This is the dashboard page for the admin panel
import React, { useEffect, useState } from "react";
import "../../styles/AdminDash/panel.css";

//This is used to import the react-router-dom components
import { useNavigate } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.js";

//This is used to import the reactstrap components
const Dashboard = () => {

  //This is used to navigate to the admin page
  const navigate = useNavigate();

  const [numOrders, setNumOrders] = useState(0); //This is used to store the number of orders
  const [numUsers, setNumUsers] = useState(0); //This is used to store the number of users
  //This is used to check if the user is authenticated
  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) { // If the user is not authenticated
      navigate("/admin"); // Navigate to the admin page
    }

     // Fetch the number of orders
     const fetchNumOrders = async () => {
      const querySnapshot = await getDocs(collection(db, "Orders")); //This is used to get the orders from the database
      const querySnapshot1 = await getDocs(collection(db, "Users")); //This is used to get the users from the database
      setNumOrders(querySnapshot.size); //This is used to set the number of orders
      setNumUsers(querySnapshot1.size); //This is used to set the number of users
    };
    fetchNumOrders();
  }, [navigate]);// eslint-disable-line react-hooks/exhaustive-deps

  //This is used to display the dashboard page
  return (
    <React.Fragment>
        <div className="admin-content">
    <div className="admin-wrapper">
      <div className="dashboard-widgets row">
        <div className="col-lg-6">
          <div className="card-widget widget-user mb-2">
            <div className="widget-user-decore">
              <div className="widget-decore-left">
                {/* <img src={Decoreleft} alt={Decoreleft} /> */}
              </div>
              <div className="widget-decore-right">
                {/* <img src={Decoreright} alt={Decoreright} /> */}
              </div>
            </div>
            <div className="card-widget-header">
              <div className="widget-icon">
                <i className="bx bxs-user-badge"></i>
              </div>
            </div>
            <div className="card-widget-body">
              <div className="widget-user-details">
                <h1 className="widget-user-title">
                  Welcome back !
                </h1>
                <p className="widget-user-description">
                  Here you'll find, number of orders made to date, live orders, 
                  different users signed up for the newsletter/promotions and many more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <div className="card-widget mb-2">
                <div className="widget-flex">
                  <div className="widget-icon">
                  <i class='bx bx-user-circle'></i>
                  </div>
                  <div className="card-widget-body">
                    {/* //This is used to display the number of users */}
                    <h1 className="widget-count">{numOrders}</h1> 
                    <p className="widget-name">Users</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card-widget mb-2">
                <div className="widget-flex">
                  <div className="widget-icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <div className="card-widget-body">
                    {/* //This is used to display the number of orders */}
                    <h1 className="widget-count">{numUsers}</h1>
                    <p className="widget-name">Orders Received</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
