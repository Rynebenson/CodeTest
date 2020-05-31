import React from 'react';

// Display the primary logo
export default function Logo() {
    return (
        <div className="logo">
            <img src={require("../../assets/images/FFC_logo_1.png")} alt="Frank's Fine Cheeses" />
        </div>
    )
}