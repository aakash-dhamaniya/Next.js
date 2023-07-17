import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";

export default function HomePage(props) {
  return <MeetupList meetups={props} />;
}
export async function getStaticProps() {
  //fetch api
  const client = await MongoClient.connect(
    "mongodb+srv://root:root@cluster0.mu3ylzf.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
