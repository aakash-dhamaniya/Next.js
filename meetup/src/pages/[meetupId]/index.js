import { useRouter } from "next/router";
import React from "react";
import { dummy_meetups } from "../index";
export default function MeetupDetails() {
  const router = useRouter();
  const details = dummy_meetups.find(
    (index) => index.id === router.query.meetupId
  );
  console.log(details);
  return (
    <>
      {details && (
        <section>
          <img
            style={{ width: "100%" }}
            src={details.image}
            alt={details.title}
          />
          <h1>{details.title}</h1>
          <address>{details.address}</address>
          <p>{details.description}</p>
        </section>
      )}
    </>
  );
}
