import Link from "next/link";

export const details = [
  { id: "1", name: "Yash", role: "Senior Developer" },

  { id: "2", name: "Vaibhav", role: "Backend Developer" },

  { id: "3", name: "Suresh", role: "Frontend Developer" },
];
function about() {
  const devloperName = details.map((item) => {
    return (
      <div key={item.id}>
        <Link href={`aboutus/${item.id}`}>
          <h1>{item.name}</h1>
        </Link>
      </div>
    );
  });
  return <div>{devloperName}</div>;
}

export default about;
