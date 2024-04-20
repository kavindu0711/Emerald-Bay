import React from "react";
import { useEmployeeCount } from "../../../hooks/useEmployeeData";
import { useAttendanceCount } from "../../../hooks/useAttendanceData";
import { useAuthStore } from "../../../store/useAuthStore";

const Index = () => {
  const { user } = useAuthStore((state) => ({
    user: state.user,
  }));
  
  // Get the data from the react-query hook
  const { data: employeeData } = useEmployeeCount();
  const { data: attendanceData } = useAttendanceCount();
  
  return (
    <div className="container mt-4">
      {user && (
        <div className="alert alert-primary" role="alert">
          You are logged in as <strong>{user.role}</strong>
        </div>
      )}

      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <h5 className="card-title">👨‍💼 Total Employees</h5>
              <p className="card-text fs-4 fw-bold">
                {employeeData?.employeeCount || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <h5 className="card-title">📅 Total Attendance</h5>
              <p className="card-text fs-4 fw-bold">
                {attendanceData?.attendanceCount || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
