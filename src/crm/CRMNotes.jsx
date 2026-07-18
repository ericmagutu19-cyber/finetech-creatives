import React from "react";

export default function CRMNotes({

    selectedLead,

    leadNotes,
    setLeadNotes,

    followUpDate,
    setFollowUpDate,

    updateLead

}) {

    if (!selectedLead) return null;

    return (

        <>

            <div className="crm-section">

                <h3>📝 CRM Notes</h3>

                <label className="modal-label">

                    Lead Status

                </label>

                <select

                    className="crm-select"

                    value={selectedLead.status}

                    onChange={async (e) => {

                        const status = e.target.value;

                        await updateLead(selectedLead, {

                            status

                        });

                    }}

                >

                    <option value="New">New</option>

                    <option value="Contacted">Contacted</option>

                    <option value="Proposal Sent">Proposal Sent</option>

                    <option value="Won">Won</option>

                    <option value="Lost">Lost</option>

                </select>

                <label className="modal-label">

                    Internal Notes

                </label>

                <textarea

                    className="crm-textarea"

                    value={leadNotes}

                    onChange={(e)=>setLeadNotes(e.target.value)}

                    placeholder="Write client notes..."

                />

                <label className="modal-label">

                    Next Follow-up

                </label>

                <input

                    type="date"

                    className="crm-input"

                    value={followUpDate}

                    onChange={(e)=>setFollowUpDate(e.target.value)}

                />

            </div>

        </>

    );

}