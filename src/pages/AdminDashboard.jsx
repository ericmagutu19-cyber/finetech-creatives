import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaFilePdf
} from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line
} from "recharts";

import AdminNavbar from "../components/AdminNavbar";
import { companyData } from "../config/companyData";
import { useNavigate } from "react-router-dom";
import LeadDetails from "../crm/LeadDetails";
import CRMNotes from "../crm/CRMNotes";
import ProjectPanel from "../crm/ProjectPanel";
import FinancePanel from "../crm/FinancePanel";
import LeadManagement from "../crm/LeadManagement";
import QuickActions from "../crm/QuickActions";
import SavePanel from "../crm/SavePanel";
import DashboardStats from "../proposal/components/DashboardStats";
import "../proposal/styles/proposalDashboard.css";

export default function AdminDashboard() {
  
  const navigate = useNavigate();
    const [authenticated,
  setAuthenticated] =
  useState(false);
    const [search, setSearch] =
  useState("");
    const [leads, setLeads] = useState([]);
    const [selectedLead, setSelectedLead] =
  useState(null);
  const [leadNotes, setLeadNotes] = useState("");
const [followUpDate, setFollowUpDate] = useState("");
const [projectStatus, setProjectStatus] = useState("");
const [projectStart, setProjectStart] = useState("");
const [assignedTo, setAssignedTo] = useState("");
const [projectValue, setProjectValue] = useState(0);
const [amountPaid, setAmountPaid] = useState(0);
const [paymentStatus, setPaymentStatus] = useState("");
const [deadline, setDeadline] = useState("");
const [priority, setPriority] = useState("");
const [leadScore, setLeadScore] = useState(50);
const [leadSource, setLeadSource] = useState("Website");
const [openCRM, setOpenCRM] = useState(true);
const [openProject, setOpenProject] = useState(false);
const [openFinance, setOpenFinance] = useState(false);
const [openLead, setOpenLead] = useState(false);
  const prices = {
  "Website Design": 35000,
  "E-Commerce Website": 75000,
  "SEO & Google Visibility": 25000,
  "Branding & Logo Design": 15000,
  "Social Media Marketing": 30000,
  "Complete Growth Package": 140000,
};

const potentialRevenue = leads.reduce(
  (total, lead) =>
    total + (prices[lead.service] || 0),
  0
);

const wonLeads = leads.filter(
  (lead) => lead.status === "Won"
);

const revenueWon = wonLeads.reduce(
  (total, lead) =>
    total + (prices[lead.service] || 0),
  0
);

const conversionRate =
  leads.length > 0
    ? (
        (wonLeads.length /
          leads.length) *
        100
      ).toFixed(1)
    : 0;

const calculateLeadScore = (lead) => {
  let score = 0;

  // Status
  switch (lead.status) {
    case "New":
      score += 15;
      break;

    case "Contacted":
      score += 35;
      break;

    case "Proposal Sent":
      score += 60;
      break;

    case "Won":
      score += 100;
      break;

    case "Lost":
      score += 0;
      break;

    default:
      score += 10;
  }

  // Internal Notes
  if (lead.notes && lead.notes.length > 10)
    score += 10;

  // Follow-up Date
  if (lead.followUp)
    score += 10;

  // Email
  if (lead.email && lead.email !== "N/A")
    score += 5;

  // Instagram
  if (lead.instagram)
    score += 5;

  return Math.min(score, 100);
};

const getLeadHealth = (score) => {

  if (score >= 80)
    return {
      label: "Hot",
      color: "#16C784",
    };

  if (score >= 50)
    return {
      label: "Warm",
      color: "#F59E0B",
    };

  return {
    label: "Cold",
    color: "#EF4444",
  };

};

const getFollowUpStatus = (lead) => {

    if (!lead.followUp) {

        return {
            label: "No Follow-up",
            color: "#666"
        };

    }

    const today = new Date();

    today.setHours(0,0,0,0);

    const followDate = new Date(lead.followUp);

    followDate.setHours(0,0,0,0);

    if (followDate < today) {

        return {
            label: "Overdue",
            color: "#EF4444"
        };

    }

    if (followDate.getTime() === today.getTime()) {

        return {
            label: "Today",
            color: "#F59E0B"
        };

    }

    return {
        label: "Upcoming",
        color: "#16C784"
    };

};

const overdueCount = leads.filter(lead => {

    if(!lead.followUp) return false;

    return new Date(lead.followUp) < new Date();

}).length;


const todayCount = leads.filter(lead => {

    if(!lead.followUp) return false;

    const today = new Date();

    const follow = new Date(lead.followUp);

    return today.toDateString() === follow.toDateString();

}).length;

const today = new Date();

today.setHours(0,0,0,0);

const todaysTasks = leads
.filter(lead=>{

    if(!lead.followUp) return false;

    const follow=new Date(lead.followUp);

    follow.setHours(0,0,0,0);

    return follow<=today;

})
.sort((a,b)=>{

const scoreA=calculateLeadScore(a);

const scoreB=calculateLeadScore(b);

return scoreB-scoreA;

});

const pipeline = {

    "New": leads.filter(
        lead => lead.status === "New"
    ),

    "Contacted": leads.filter(
        lead => lead.status === "Contacted"
    ),

    "Proposal Sent": leads.filter(
        lead => lead.status === "Proposal Sent"
    ),

    "Won": leads.filter(
        lead => lead.status === "Won"
    ),

    "Lost": leads.filter(
        lead => lead.status === "Lost"
    )

};

const averageDealSize =
  wonLeads.length > 0
    ? Math.round(
        revenueWon /
          wonLeads.length
      )
    : 0;

    const statusData = [
  {
    name: "New",
    value: leads.filter(
      lead => lead.status === "New"
    ).length,
  },

  {
    name: "Contacted",
    value: leads.filter(
      lead => lead.status === "Contacted"
    ).length,
  },

  {
    name: "Proposal Sent",
    value: leads.filter(
      lead => lead.status === "Proposal Sent"
    ).length,
  },

  {
    name: "Won",
    value: leads.filter(
      lead => lead.status === "Won"
    ).length,
  },

  {
    name: "Lost",
    value: leads.filter(
      lead => lead.status === "Lost"
    ).length,
  },
];
const serviceRevenue =
  Object.keys(prices)
    .map(service => ({

      service:
        service ===
        "Website Design"
          ? "Website"

        : service ===
          "E-Commerce Website"
          ? "E-Commerce"

        : service ===
          "SEO & Google Visibility"
          ? "SEO"

        : service ===
          "Branding & Logo Design"
          ? "Branding"

        : service ===
          "Social Media Marketing"
          ? "Social Media"

        : service ===
          "Complete Growth Package"
          ? "Growth Package"

        : service,

      revenue: leads
        .filter(
          lead =>
            lead.service === service
        )
        .reduce(
          total =>
            total + prices[service],
          0
        ),
    }))
    .filter(
      item => item.revenue > 0
    );
    const monthlyLeads = leads.reduce(
  (acc, lead) => {

    const month =
      new Date(lead.date)
        .toLocaleString(
          "default",
          { month: "short" }
        );

    const existing =
      acc.find(
        item =>
          item.month === month
      );

    if (existing) {

      existing.leads += 1;

    } else {

      acc.push({
        month,
        leads: 1,
      });

    }

    return acc;

  },
  []
);
const serviceCounts = leads.reduce(
  (acc, lead) => {

    if (!lead.service) return acc;

    acc[lead.service] =
      (acc[lead.service] || 0) + 1;

    return acc;

  },
  {}
);

const topService =
  Object.keys(serviceCounts).length
    ? Object.entries(serviceCounts)
        .sort(
          (a, b) => b[1] - a[1]
        )[0][0]
    : "No Data";
              const proposalsSent =
  leads.filter(
    lead =>
      lead.status ===
      "Proposal Sent"
  ).length;

const proposalSuccessRate =
  proposalsSent > 0
    ? (
        (wonLeads.length /
          proposalsSent) *
        100
      ).toFixed(1)
    : 0;
    const monthlyRevenue =
  leads
    .filter(
      lead =>
        lead.status === "Won"
    )
    .reduce(
      (acc, lead) => {

        const month =
          new Date(
            lead.date
          ).toLocaleString(
            "default",
            {
              month: "short",
            }
          );

        const existing =
          acc.find(
            item =>
              item.month === month
          );

        const value =
          prices[
            lead.service
          ] || 0;

        if (existing) {

          existing.revenue +=
            value;

        } else {

          acc.push({
            month,
            revenue: value,
          });

        }

        return acc;

      },
      []
    );
    useEffect(() => {

  const login = async () => {

    const password = prompt(
      "Enter Admin Password"
    );

    const response =
      await fetch(
        "https://script.google.com/macros/s/AKfycbz_loyVk8KGQNVLxEO8boE6xb-5ydeoJghnIgOPvaXgsTQ34vI39X0z1Y3GEsPst7TQ/exec",
        {
          method: "POST",

          body: JSON.stringify({
            action:
              "adminLogin",

            password,
          }),
        }
      );

    const result =
      await response.json();

    if (result.success) {

      setAuthenticated(true);

    } else {

      alert(
        "Invalid Password"
      );
    }
  };

  login();

}, []);
      const fetchLeads = () => {

  fetch(

    "https://script.google.com/macros/s/AKfycbz_loyVk8KGQNVLxEO8boE6xb-5ydeoJghnIgOPvaXgsTQ34vI39X0z1Y3GEsPst7TQ/exec"

  )

    .then(res => res.json())

    .then(data => setLeads(data))

    .catch(console.error);

};

useEffect(() => {

  fetchLeads();

}, []);
  const updateLead = async (lead, updates) => {

  const response = await fetch(

    "https://script.google.com/macros/s/AKfycbz_loyVk8KGQNVLxEO8boE6xb-5ydeoJghnIgOPvaXgsTQ34vI39X0z1Y3GEsPst7TQ/exec",

    {

      method: "POST",

      headers: {

        "Content-Type": "application/json"

      },

      body: JSON.stringify({

        action: "updateLead",

        clientId: lead.clientId,

        ...updates

      })

    }

  );

  const result = await response.json();

  if(result.success){

    // Refresh dashboard

    fetchLeads();

  }else{

    alert(result.message);

  }

};

    const emailProposal = async (
  lead
) => {

  await fetch(
    "https://script.google.com/macros/s/AKfycbz_loyVk8KGQNVLxEO8boE6xb-5ydeoJghnIgOPvaXgsTQ34vI39X0z1Y3GEsPst7TQ/exec",
    {
      method: "POST",
      body: JSON.stringify({
        action: "emailProposal",

        name: lead.name,

        email: lead.email,

        business:
          lead.business,

        service:
          lead.service,

        proposalNumber:
          lead.proposalNumber,
      }),
    }
  );

  alert(
    "Proposal email sent successfully"
  );
};
if (!authenticated) {

  return (
    <h2>
      Authenticating...
    </h2>
  );

}

const handleGenerateProposal = async (lead) => {

  let proposalNumber = lead.proposalNumber;

  // Generate one if missing
  if (!proposalNumber) {

    proposalNumber =
      `FTC-${new Date().getFullYear()}-${Date.now()
        .toString()
        .slice(-4)}`;

  }

  const proposalDate = new Date()
    .toISOString()
    .split("T")[0];

  const updatedLead = {

    ...lead,

    proposalNumber,

    proposalDate,

    status: "Proposal Sent",

    lastContact: proposalDate,

  };

  // Save to Google Sheet
  await updateLead(updatedLead);

  // Refresh dashboard
  fetchLeads();

  // Open proposal generator
  navigate("/proposal-generator-v2", {
    state: {
      lead: updatedLead,
    },
  });

};

  return (

<div className="crm-dashboard">

    <AdminNavbar />

    <div className="dashboard-content">

        <div className="dashboard-header">

            <div>

  

                <p>
                    Welcome back, Eric 👋
                </p>

            </div>

        </div>

        <DashboardStats

            totalClients={leads.length}

            totalRevenue={potentialRevenue}

            wonRevenue={revenueWon}

            conversionRate={conversionRate}

            averageDealSize={averageDealSize}

            wonDeals={wonLeads.length}

            todayCount={todayCount}

            overdueCount={overdueCount}

        />
        <div className="task-panel">

    <div className="task-header">

        <h2>📋 Today's Priorities</h2>

        <span>

            {todaysTasks.length} Tasks

        </span>

    </div>
    {todaysTasks.length===0 ? (

        <div className="task-empty">

            🎉 You're all caught up today.

        </div>

    ) : (

        todaysTasks.map((lead,index)=>(

            <div
                key={index}
                className="task-item"
                onClick={()=>setSelectedLead(lead)}
            >

                <div>

                    <strong>

                        {lead.name}

                    </strong>

                    <p>

                        {lead.business}

                    </p>

                </div>

                <div>

                    <span

className="task-status"

style={{

background:getFollowUpStatus(lead).color

}}

>

</span>

                </div>

            </div>

        ))

    )}

</div>
<div className="pipeline-container">

<h2 className="pipeline-title">

Sales Pipeline

</h2>

<div className="pipeline-grid">

{Object.entries(pipeline).map(([stage,items])=>(

<div
className="pipeline-column"
key={stage}
>

<div className="pipeline-header">

<h3>{stage}</h3>

<span>{items.length}</span>

</div>

{items.map((lead,index)=>(

<div

key={index}

className="pipeline-card"

onClick={()=>setSelectedLead(lead)}

>

<strong>

{lead.name}

</strong>

<p>

{lead.business}

</p>

<small>

{lead.service}

</small>

</div>

))}

</div>

))}

</div>

</div>


        <div className="quick-actions">

  <button
    className="quick-btn"
    onClick={() => navigate("/proposal")}
  >
    📄 New Proposal
  </button>

  <button
    className="quick-btn"
    onClick={() => navigate("/projects")}
  >
    📁 New Project
  </button>

  <button
    className="quick-btn"
    onClick={() => window.open("https://wa.me/254101709129")}
  >
    💬 WhatsApp Client
  </button>

  <button
    className="quick-btn"
    onClick={() => window.print()}
  >
    🖨 Export Report
  </button>

</div>
<div className="activity-card">

    <h2>Today's Activity</h2>

    <ul>

        <li>🟢 New Leads: {statusData[0].value}</li>

        <li>📄 Proposals Sent: {
            leads.filter(
                l=>l.status==="Proposal Sent"
            ).length
        }</li>

        <li>🏆 Won Deals: {wonLeads.length}</li>

        <li>💰 Potential Revenue:
            KES {potentialRevenue.toLocaleString()}
        </li>

    </ul>

</div>

        {/* Everything else stays below */}

 
</div>

    {/* Stats Cards */}

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(200px,1fr))",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      </div>
    {/* Search */}

    <input
      type="text"
      placeholder="Search leads..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "20px",
        borderRadius: "10px",
        border: "1px solid #333",
      }}
    />
    
<div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(450px,1fr))",
    gap: "20px",
    marginBottom: "30px",
  }}
>


  {/* Lead Pipeline */}

  <div className="crm-card">

    <h3>Lead Pipeline</h3>

    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <PieChart>

        <Pie
          data={statusData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={({ percent }) =>
  `${(percent * 100).toFixed(0)}%`
}
        >

          {statusData.map(
            (entry, index) => {

              const colors = [
                "#C8FF00",
                "#00A3FF",
                "#FFB000",
                "#00D26A",
                "#FF4D4D",
              ];
              return (
                <Cell
                  key={index}
                  fill={
                    colors[index]
                  }
                />
              );
            }
          )}

        </Pie>

        <Tooltip />
           <Legend />
      </PieChart>

    </ResponsiveContainer>

  </div>

  {/* Revenue Chart */}

  <div className="crm-card">

    <h3>
      Revenue By Service
    </h3>

    <ResponsiveContainer
      width="100%"
      height={300}
    >

      <BarChart
        data={serviceRevenue}
      >

        <CartesianGrid
          strokeDasharray="3 3"
        />

        <XAxis
  dataKey="service"
  tick={{
    fontSize: 12
  }}
/>

        <YAxis />

        <Tooltip
  formatter={(value) =>
    `KES ${value.toLocaleString()}`
  }
/>

        <Bar
          dataKey="revenue"
          radius={[6, 6, 0, 0]}
        />

      </BarChart>

    </ResponsiveContainer>

  </div>
  <div className="crm-card">

  <h3>
    Monthly Lead Trend
  </h3>

  <ResponsiveContainer
    width="100%"
    height={300}
  >

    <LineChart
      data={monthlyLeads}
    >

      <CartesianGrid
        strokeDasharray="3 3"
      />

      <XAxis
        dataKey="month"
      />

      <YAxis />

      <Tooltip />

      <Line
        type="monotone"
        dataKey="leads"
        stroke="#C8FF00"
        strokeWidth={3}
      />

    </LineChart>

  </ResponsiveContainer>

</div>
<div className="crm-card">

  <h3>
    Top Service
  </h3>

  <h2>
    {topService}
  </h2>

</div>
<div className="crm-card">

  <h3>
    Proposal Success
  </h3>

  <h2>
    {proposalSuccessRate}%
  </h2>

</div>
<div className="crm-card">

  <h3>
    Revenue by Month
  </h3>

  <ResponsiveContainer
    width="100%"
    height={300}
  >

    <BarChart
      data={monthlyRevenue}
    >

      <CartesianGrid
        strokeDasharray="3 3"
      />

      <XAxis
        dataKey="month"
      />

      <YAxis />

      <Tooltip
        formatter={(value) =>
          `KES ${value.toLocaleString()}`
        }
      />

      <Bar
        dataKey="revenue"
      />

    </BarChart>

  </ResponsiveContainer>

</div>
</div>

    {/* Table */}

    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Business</th>
          <th>Phone</th>
          <th>Service</th>
          <th>Proposal #</th>
            <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {leads
          .filter(
            (lead) =>
              lead.name
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                ) ||
              lead.business
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
          )
          .map((lead, index) => (
            <tr key={index}>
              <td>{lead.name}</td>

              <td>{lead.business}</td>

              <td>{lead.phone}</td>

              <td>{lead.service}</td>

              <td>{lead.proposalNumber}</td>
                
                <td>
  {lead.proposalDate
    ? new Date(
        lead.proposalDate
      ).toLocaleDateString()
    : ""}
</td>

              <td>
                <span
                  style={{
                    padding:
                      "5px 10px",
                    borderRadius:
                      "20px",
                    background:
                      lead.status ===
                      "New"
                        ? "#C8FF00"
                        : lead.status ===
                         "Contacted"
                        ? "#00A3FF"
                         : lead.status ===
                         "Proposal Sent"
                        ? "#FFB000"
                     : lead.status ===
                         "Won"
                        ? "#00D26A"
                        : lead.status === "Lost"
                        ? "#FF4D4D"
                        : "#666",
                    color: "#000",
                    fontWeight:
                      "600",
                  }}
                >
                  {lead.status}
                </span>
              </td>

              <td>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
         <button
  className="crm-btn proposal-btn"
  onClick={() => {

    setSelectedLead(lead);

    // CRM

    setLeadNotes(lead.notes || "");

    setFollowUpDate(
      lead.followUpDate || ""
    );

    // Project

    setProjectStatus(
      lead.projectStatus || "Not Started"
    );

    setAssignedTo(
      lead.assignedTo || "Eric"
    );

    setDeadline(
      lead.deadline || ""
    );

    // Finance

    setProjectValue(
      lead.projectValue || 0
    );

    setAmountPaid(
      lead.amountPaid || 0
    );

    setPaymentStatus(
      lead.paymentStatus || "Pending"
    );

    // Marketing

    setPriority(
      lead.priority || "Medium"
    );

    setLeadScore(
      lead.leadScore || 50
    );

  }}
>
  View
</button>

         <a
  className="crm-btn whatsapp-btn"
  href={`https://wa.me/${lead.phone}`}
  target="_blank"
  rel="noreferrer"
>
  <FaWhatsapp />
  &nbsp;WhatsApp
</a>

<button
  className="crm-btn proposal-btn"
  onClick={() => handleGenerateProposal(lead)}
>
  <FaFilePdf />
  &nbsp;Generate Proposal
</button>
                  
                
<button
  className="crm-btn email-btn"
  onClick={() => emailProposal(lead)}
>
  Email
</button>
                
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  {selectedLead && (
<div className="drawer-overlay">

  <div className="lead-drawer">

    <button
      className="crm-close"
      onClick={() => setSelectedLead(null)}
    >
      ✕
    </button>

    {/* ==========================
        LEAD DETAILS
    ========================== */}

    <div className="crm-section">

      <h2>Lead Details</h2>

      <LeadDetails
        selectedLead={selectedLead}
        calculateLeadScore={calculateLeadScore}
        getLeadHealth={getLeadHealth}
        getFollowUpStatus={getFollowUpStatus}
      />

    </div>

    {/* ==========================
        CRM NOTES
    ========================== */}

    <div className="crm-section">

      <CRMNotes
        selectedLead={selectedLead}
        leadNotes={leadNotes}
        setLeadNotes={setLeadNotes}
        followUpDate={followUpDate}
        setFollowUpDate={setFollowUpDate}
        updateLead={updateLead}
      />

    </div>

    {/* ==========================
        LEAD INTELLIGENCE
    ========================== */}

    <div className="crm-section">

      <LeadManagement
        priority={priority}
        setPriority={setPriority}
        leadScore={leadScore}
        setLeadScore={setLeadScore}
      />

    </div>

    {/* ==========================
        PROJECT MANAGEMENT
    ========================== */}

    <div className="crm-section">

      <ProjectPanel
        projectStatus={projectStatus}
        setProjectStatus={setProjectStatus}
        assignedTo={assignedTo}
        setAssignedTo={setAssignedTo}
        deadline={deadline}
        setDeadline={setDeadline}
      />

    </div>

    {/* ==========================
        FINANCE
    ========================== */}

    <div className="crm-section">

      <FinancePanel
        projectValue={projectValue}
        setProjectValue={setProjectValue}
        amountPaid={amountPaid}
        setAmountPaid={setAmountPaid}
        paymentStatus={paymentStatus}
        setPaymentStatus={setPaymentStatus}
      />

    </div>

    {/* ==========================
        QUICK ACTIONS
    ========================== */}

    <div className="crm-section">

      <QuickActions
        selectedLead={selectedLead}
        setSelectedLead={setSelectedLead}
        navigate={navigate}
        updateLead={updateLead}
      />

    </div>

    {/* ==========================
        SAVE PANEL
    ========================== */}

    <div className="crm-section">

      <SavePanel
        selectedLead={selectedLead}
        leadNotes={leadNotes}
        followUpDate={followUpDate}
        projectStatus={projectStatus}
        assignedTo={assignedTo}
        deadline={deadline}
        projectValue={projectValue}
        amountPaid={amountPaid}
        paymentStatus={paymentStatus}
        priority={priority}
        leadScore={leadScore}
        updateLead={updateLead}
      />
      </div>
    </div>

  </div>
)}
  </div>
);
}