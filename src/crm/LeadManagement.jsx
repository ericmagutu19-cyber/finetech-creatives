import React from "react";

export default function LeadManagement({

priority,
setPriority,

leadScore,
setLeadScore

}){

return(

<div className="crm-section">

<h3>🎯 Lead Intelligence</h3>

<label className="modal-label">
Priority
</label>

<select
className="crm-select"
value={priority}
onChange={(e)=>
setPriority(e.target.value)}
>

<option>Low</option>
<option>Medium</option>
<option>High</option>
<option>Urgent</option>

</select>

<label className="modal-label">
Lead Score
</label>

<input

type="range"

min="0"

max="100"

value={leadScore}

onChange={(e)=>
setLeadScore(Number(e.target.value))
}

/>

<div className="lead-score">

<h4>Lead Score</h4>

<span>{leadScore}/100</span>

</div>

</div>

);

}