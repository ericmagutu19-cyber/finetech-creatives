import {
  FaUsers,
  FaMoneyBillWave,
  FaTrophy,
  FaFileSignature,
  FaChartLine,
  FaBriefcase
} from "react-icons/fa";
export default function DashboardStats({

  totalClients,

  totalRevenue,

  wonRevenue,

  conversionRate,

  averageDealSize,

  wonDeals,
  
  todayCount,

overdueCount

}) {

  const cards = [

  {
    title: "Total Leads",
    value: totalClients,
    icon: <FaUsers />,
    color: "#3B82F6"
  },

  {
    title:"Due Today",

    value:todayCount,

    icon:"📅"
},

{
    title:"Overdue",

    value:overdueCount,

    icon:"⚠️"
},

  {
    title: "Potential Revenue",
    value: `KES ${totalRevenue.toLocaleString()}`,
    icon: <FaMoneyBillWave />,
    color: "#22C55E"
  },

  {
    title: "Won Revenue",
    value: `KES ${wonRevenue.toLocaleString()}`,
    icon: <FaTrophy />,
    color: "#F59E0B"
  },

  {
    title: "Won Deals",
    value: wonDeals,
    icon: <FaFileSignature />,
    color: "#8B5CF6"
  },

  {
    title: "Conversion",
    value: `${conversionRate}%`,
    icon: <FaChartLine />,
    color: "#EF4444"
  },

  {
    title: "Avg Deal",
    value: `KES ${averageDealSize.toLocaleString()}`,
    icon: <FaBriefcase />,
    color: "#06B6D4"
  }

];

  return (

    <div className="stats-grid">

      {cards.map((card) => (

        <div
    className="stat-card"
    style={{
        borderTop:`5px solid ${card.color}`
    }}
>

    <div
        className="stat-icon"
        style={{
            color:card.color
        }}
    >
        {card.icon}
    </div>

    <h2>

        {card.value}

    </h2>

    <p>

        {card.title}

    </p>

</div>

      ))}

    </div>

  );

}