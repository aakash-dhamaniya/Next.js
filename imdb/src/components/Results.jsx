export default function Results({ results }) {
  return (
    <div className="">
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
}
