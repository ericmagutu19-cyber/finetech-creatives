import React from "react";

export default function ProjectPanel({

    projectStatus,
    setProjectStatus,

    assignedTo,
    setAssignedTo,

    deadline,
    setDeadline

}) {

    return (

        <div className="crm-section">

            <h3>📋 Project Management</h3>

            <label className="modal-label">
                Project Status
            </label>

            <select
                className="crm-select"
                value={projectStatus}
                onChange={(e)=>setProjectStatus(e.target.value)}
            >

                <option>Not Started</option>
                <option>Planning</option>
                <option>In Progress</option>
                <option>Review</option>
                <option>Completed</option>

            </select>

            <label className="modal-label">
                Assigned To
            </label>

            <input
                className="crm-input"
                value={assignedTo}
                onChange={(e)=>setAssignedTo(e.target.value)}
            />

            <label className="modal-label">
                Deadline
            </label>

            <input
                type="date"
                className="crm-input"
                value={deadline}
                onChange={(e)=>setDeadline(e.target.value)}
            />

        </div>

    );

}