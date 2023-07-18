import React from "react";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";

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
  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing netwroking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </>
  );
}
