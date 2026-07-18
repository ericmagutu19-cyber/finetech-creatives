import React from "react";

export default function LeadDetails({
  selectedLead,
  calculateLeadScore,
  getLeadHealth,
  getFollowUpStatus,
}) {
  if (!selectedLead) return null;

  const score = calculateLeadScore(selectedLead);
  const health = getLeadHealth(score);
  const follow = getFollowUpStatus(selectedLead);

  return (
    <>

      {/* ==========================================
            CLIENT SUMMARY
      ========================================== */}

      <div className="lead-summary-card">

        <div className="lead-summary-top">

          <div>

            <h2>{selectedLead.name}</h2>

            <p>{selectedLead.business}</p>

          </div>

          <div className="lead-score-circle">

            {score}%

          </div>

        </div>

        <div className="summary-tags">

          <span className="client-id">

            {selectedLead.clientId}

          </span>

          <span className="status-tag">

            {selectedLead.status}

          </span>

          <span
            className="health-tag"
            style={{
              background: health.color,
            }}
          >
            {health.label}
          </span>

        </div>

      </div>

      {/* ==========================================
            CONTACT DETAILS
      ========================================== */}

      <div className="contact-card">

        <div className="contact-item">

          <span>📧</span>

          <div>

            <strong>Email</strong>

            <p>{selectedLead.email}</p>

          </div>

        </div>

        <div className="contact-item">

          <span>📱</span>

          <div>

            <strong>Phone</strong>

            <p>{selectedLead.phone}</p>

          </div>

        </div>

        <div className="contact-item">

          <span>📷</span>

          <div>

            <strong>Instagram</strong>

            <p>{selectedLead.instagram}</p>

          </div>

        </div>

        <div className="contact-item">

          <span>💼</span>

          <div>

            <strong>Service</strong>

            <p>{selectedLead.service}</p>

          </div>

        </div>

      </div>

      {/* ==========================================
            CLIENT MESSAGE
      ========================================== */}

      <div className="message-card">

        <h3>💬 Client Brief</h3>

        <div className="crm-message-box">

          <p>{selectedLead.message}</p>

        </div>

      </div>

      {/* ==========================================
            LEAD INTELLIGENCE
      ========================================== */}

      <div className="intelligence-card">

        <div className="intel-box">

          <h4>Lead Health</h4>

          <span
            className="intel-badge"
            style={{
              background: health.color,
            }}
          >
            {health.label}
          </span>

        </div>

        <div className="intel-box">

          <h4>Next Follow-up</h4>

          <span
            className="intel-badge"
            style={{
              background: follow.color,
            }}
          >
            {follow.label}
          </span>

        </div>

      </div>

    </>
  );
}