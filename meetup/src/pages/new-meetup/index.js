import React from "react";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
export default function NewMeetupPage() {
  async function addMeetupHandler(endata) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(endata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
