import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "./Store";
import DataTable from "react-data-table-component";

function App() {
  const { userData } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
    age: "",
    fatherName: "",
  });

  const [editableRowId, setEditableRowId] = useState(null); // For tracking which row is being edited

  useEffect(() => {
    setUserDetails(userData);
  }, [userData]);

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (editableRowId !== null) {
      // Update if in edit mode
      dispatch(
        counterAction.updateForm({
          index: editableRowId,
          updatedData: userDetails,
        })
      );
    } else {
      // Add new user if not editing
      dispatch(counterAction.addForm(userDetails));
    }
  
    resetForm();
  };
  
  const handleUpdate = (index) => {
    setEditableRowId(index); // Set the row being edited
    setUserDetails(userData[index]); // Load the existing data into the form
  };
  
  const handleDelete = (index) => {
    dispatch(counterAction.deleteForm(index)); // Dispatch the delete action
  };
  
  const resetForm = () => {
    setUserDetails({
      name: "",
      email: "",
      address: "",
      age: "",
      fatherName: "",
    });
    setEditableRowId(null); // Exit edit mode
  };
  const handleClearData = () => {
    dispatch(counterAction.clearData());
  };

  // Columns for the DataTable
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "Age",
      selector: (row) => row.age,
    },
    {
      name: "Father's Name",
      selector: (row) => row.fatherName,
    },
    {
      name: "Actions",
      cell: (row, index) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => handleUpdate(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div
        className="user-form"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h4>{editableRowId !== null ? "Edit User" : "Add User"}</h4>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Address:</label>
            <textarea
              name="address"
              value={userDetails.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={userDetails.age}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Father's Name:</label>
            <input
              type="text"
              name="fatherName"
              value={userDetails.fatherName}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">{editableRowId !== null ? "Update" : "Submit"}</button>


          <button onClick={handleClearData}>Clear All Data</button>
        </form>
      </div>
      <h3 style={{ marginTop: "20px" }}>Submitted Details:</h3>
      <DataTable
        columns={columns}
        data={userData}
        pagination
        highlightOnHover
        theme="default"
        style={{ width: "80%", marginTop: "20px" }}
      />
    </>
  );
}

export default App;
