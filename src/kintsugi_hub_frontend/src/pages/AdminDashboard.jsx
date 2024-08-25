// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { kintsugi_hub_backend } from 'declarations/kintsugi_hub_backend';

const AdminDashboard = () => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const fetchedReports = await kintsugi_hub_backend.fetch_reports();
        setReports(fetchedReports);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };
    fetchReports();
  }, []);

  const handleUpdatePriority = async (id, priority) => {
    try {
      const success = await kintsugi_hub_backend.update_priority(id, priority);
      if (success) {
        setReports(reports.map(report => 
          report.id === id ? { ...report, priority } : report
        ));
      }
    } catch (error) {
      console.error('Error updating priority:', error);
    }
  };

  const handleDeleteReport = async (id) => {
    try {
      const success = await kintsugi_hub_backend.delete_report(id);
      if (success) {
        setReports(reports.filter(report => report.id !== id));
      }
    } catch (error) {
      console.error('Error deleting report:', error);
    }
  };

  const handleMarkAsResolved = async (id) => {
    try {
      const success = await kintsugi_hub_backend.mark_report_as_resolved(id);
      if (success) {
        setReports(reports.filter(report => report.id !== id));
      }
    } catch (error) {
      console.error('Error marking report as resolved:', error);
    }
  };

  const handleViewDetails = (report) => {
    setSelectedReport(report);
    // Implement the logic to open a modal or navigate to a detailed view page
  };

  const handleEditReport = async (id, updatedData) => {
    try {
      const success = await kintsugi_hub_backend.update_report(id, updatedData);
      if (success) {
        setReports(reports.map(report => 
          report.id === id ? { ...report, ...updatedData } : report
        ));
      }
    } catch (error) {
      console.error('Error updating report:', error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Incident Type</th>
            <th>Description</th>
            <th>Date</th>
            <th>Location</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id.toString()}>
              <td>{report.id.toString()}</td>
              <td>{report.incident_type}</td>
              <td>{report.description}</td>
              <td>{report.date}</td>
              <td>{report.location}</td>
              <td>
                <input
                  type="number"
                  value={report.priority}
                  onChange={(e) => handleUpdatePriority(report.id, Number(e.target.value))}
                />
              </td>
              <td>
                <button onClick={() => handleViewDetails(report)}>View Details</button>
                <button onClick={() => handleEditReport(report.id, { /* updated data */ })}>Edit</button>
                <button onClick={() => handleMarkAsResolved(report.id)}>Mark as Resolved</button>
                <button onClick={() => handleDeleteReport(report.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedReport && (
        <div className="modal">
          {/* Modal content to display the selected report details */}
          <h2>Report Details</h2>
          <p>ID: {selectedReport.id.toString()}</p>
          <p>Incident Type: {selectedReport.incident_type}</p>
          <p>Description: {selectedReport.description}</p>
          <p>Date: {selectedReport.date}</p>
          <p>Location: {selectedReport.location}</p>
          <p>Priority: {selectedReport.priority}</p>
          <button onClick={() => setSelectedReport(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
