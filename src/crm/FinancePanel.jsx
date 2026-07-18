import React from "react";

export default function FinancePanel({

    projectValue,
    setProjectValue,

    amountPaid,
    setAmountPaid,

    paymentStatus,
    setPaymentStatus

}){

const balance =
projectValue-amountPaid;

return(

<div className="crm-section">

<h3>💰 Finance</h3>

<label className="modal-label">
Project Value
</label>

<input
type="number"
className="crm-input"
value={projectValue}
onChange={(e)=>
setProjectValue(Number(e.target.value))
}
/>

<label className="modal-label">
Amount Paid
</label>

<input
type="number"
className="crm-input"
value={amountPaid}
onChange={(e)=>
setAmountPaid(Number(e.target.value))
}
/>

<label className="modal-label">
Balance
</label>

<input
readOnly
className="crm-input"
value={balance}
/>

<label className="modal-label">
Payment Status
</label>

<select
className="crm-select"
value={paymentStatus}
onChange={(e)=>
setPaymentStatus(e.target.value)}
>

<option>Pending</option>
<option>Deposit Paid</option>
<option>Partially Paid</option>
<option>Fully Paid</option>

</select>

</div>

);

}