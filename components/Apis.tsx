import React from "react";

export default function Apis() {
  return (
    <section id="apis" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold">Developer API Platform</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded bg-white p-6 shadow">
            <h3 className="font-semibold">Recharge API</h3>
            <pre className="mt-3 overflow-x-auto rounded bg-gray-100 p-4 text-xs">
              {`POST /api/v1/recharge
{
  "mobile": "9876543210",
  "amount": 199,
  "operator": "Airtel"
}`}
            </pre>
          </div>
          <div className="rounded bg-white p-6 shadow">
            <h3 className="font-semibold">UPI API</h3>
            <pre className="mt-3 overflow-x-auto rounded bg-gray-100 p-4 text-xs">
              {`POST /api/v1/upi/collect
{
  "vpa": "merchant@upi",
  "amount": 5000,
  "currency": "INR"
}`}
            </pre>
          </div>
          <div className="rounded bg-white p-6 shadow">
            <h3 className="font-semibold">Webhook: Settlement Completed</h3>
            <pre className="mt-3 overflow-x-auto rounded bg-gray-100 p-4 text-xs">
              {`{
  "event": "settlement.completed",
  "amount": "32000000",
  "currency": "INR",
  "timestamp": "2026-07-13T03:27:00Z"
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
