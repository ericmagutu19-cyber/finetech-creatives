import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaWhatsapp,
  FaEnvelope,
  FaFilePdf,
  FaFolderOpen,
  FaPhoneAlt,
  FaCalendarAlt,
} from "react-icons/fa";

export default function QuickActions({

    selectedLead,

    updateLead

}) {

    const navigate = useNavigate();

    return (

        <>

            <h3>⚡ Quick Actions</h3>

            <div className="quick-actions-grid">

                <button
                    className="quick-action whatsapp"
                    onClick={() =>
                        window.open(
                            `https://wa.me/${selectedLead.phone}`,
                            "_blank"
                        )
                    }
                >
                    <FaWhatsapp className="action-icon" />
                    <span>WhatsApp</span>
                </button>

                <button
                    className="quick-action email"
                    onClick={() =>
                        window.location.href =
                            `mailto:${selectedLead.email}`
                    }
                >
                    <FaEnvelope className="action-icon" />
                    <span>Email Client</span>
                </button>

                <button
                    className="quick-action proposal"
                    onClick={() =>
                        navigate("/proposal-generator-v2",{
                            state:{
                                lead:selectedLead
                            }
                        })
                    }
                >
                    <FaFilePdf className="action-icon" />
                    <span>Generate Proposal</span>
                </button>

                <button
                    className="quick-action project"
                    onClick={() =>
                        updateLead(selectedLead,{
                            status:"Won"
                        })
                    }
                >
                    <FaFolderOpen className="action-icon" />
                    <span>Convert Project</span>
                </button>

                <button
                    className="quick-action phone"
                    onClick={()=>{
                        navigator.clipboard.writeText(
                            selectedLead.phone
                        );
                        alert("Phone copied.");
                    }}
                >
                    <FaPhoneAlt className="action-icon" />
                    <span>Copy Phone</span>
                </button>

                <button
                    className="quick-action followup"
                    onClick={()=>{
                        const tomorrow=new Date();

                        tomorrow.setDate(
                            tomorrow.getDate()+1
                        );

                        updateLead(selectedLead,{
                            followUpDate:
                                tomorrow
                                .toISOString()
                                .split("T")[0]
                        });

                    }}
                >
                    <FaCalendarAlt className="action-icon" />
                    <span>Schedule Follow-up</span>
                </button>

            </div>

        </>

    );

}