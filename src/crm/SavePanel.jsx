import React from "react";

export default function SavePanel({

selectedLead,

leadNotes,

followUpDate,

projectStatus,

assignedTo,

deadline,

projectValue,

amountPaid,

paymentStatus,

priority,

leadScore,

updateLead

}){

return(

<button

className="btn-primary"

onClick={async()=>{

await updateLead(

selectedLead,

{

notes:leadNotes,

followUpDate,

projectStatus,

assignedTo,

deadline,

projectValue,

amountPaid,

paymentStatus,

priority,

leadScore

}

);

alert("CRM updated successfully.");

}}

>

💾 Save CRM Changes

</button>

);

}