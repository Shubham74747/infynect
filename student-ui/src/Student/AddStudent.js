import { useState } from "react";
import "./AddStudent.css";
import axios from "axios";

function AddStudent() {
  const initialState = {
    name: "",
    department: "",
    email: "",
    mobile: "",
    address: "",
  };
  const [student, setStudent] = useState(initialState);
  const [isCreated, setIsCreated] = useState(false);

  const addStudent = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/student", student)
      .then(function (response) {
        setIsCreated(true);
        setStudent(initialState);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="add-student">
      <form>
        <div className="row">
          <label>Name:</label>
          <input
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
            type="text"
            value={student.name}
            id="fname"
            name="fname"
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            onChange={(e) =>
              setStudent({ ...student, department: e.target.value })
            }
            value={student.department}
            id="fdepartment"
            name="fdepartment"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
            value={student.email}
            id="femail"
            name="femail"
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            onChange={(e) => setStudent({ ...student, mobile: e.target.value })}
            value={student.mobile}
            id="fnumber"
            name="fnumbar"
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            onChange={(e) =>
              setStudent({ ...student, address: e.target.value })
            }
            value={student.address}
            id="faddress"
            name="faddress"
          />
        </div>
        <div>
          <input type="submit" onClick={addStudent} value="Add Student" />
        </div>
        <div>
          <h3>{isCreated && `Record created!`}</h3>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;
