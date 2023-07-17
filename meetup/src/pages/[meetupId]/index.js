import React from "react";
import { MongoClient, ObjectId } from "mongodb";
import { useRouter } from "next/router";
export default function MeetupDetails(props) {
  console.log(props.meetupData);

  return (
    <>
      <section>
        <img
          style={{ width: "100%" }}
          src={props.meetupData.image}
          alt={props.meetupData.title}
        />
        <h1>{props.meetupData.title}</h1>
        <address>{props.meetupData.address}</address>
        <p>{props.meetupData.description}</p>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://root:root@cluster0.mu3ylzf.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); //_id:1 is for only include id but not other one
  // console.log("meetupsids", meetups);
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  //fetch api
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  const client = await MongoClient.connect(
    "mongodb+srv://root:root@cluster0.mu3ylzf.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  console.log("selelcted", selectedMeetup);
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
      },
    },
  };
}
