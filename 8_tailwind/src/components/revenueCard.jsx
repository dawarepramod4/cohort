import React from "react";

export default function RevenueCard() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-3xl font-bold">$1,200</p>
            <p className="text-sm text-gray-500">+12% since last month</p>
        </div>
    );
}
