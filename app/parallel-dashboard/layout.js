import React from "react";

export default function DashboardLayout({
  children,
  assignment,
  notifications,
  quiz,
}) {
  return (
    <>
      {children}
      <div className="grid gap-6 grid-cols-2 grid-rows-2 p-8">
        {assignment}
        {notifications}
        {quiz}
      </div>
    </>
  );
}
