import "./StudentList.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

function StudentList() {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then(function (response) {
        dispatch({ type: "GET_STUDENTS", data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [dispatch]);
  return (
    <div className="student-list">
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.map((student) => (
              <tr key={student.email}>
                <td>{student.name}</td>
                <td>{student.department}</td>
                <td>{student.email}</td>
                <td>{student.mobile}</td>
                <td>{student.address}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
