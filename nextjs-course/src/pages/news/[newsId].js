import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();
  const id = router.query.newsId;
  console.log(id);
  return <div> DetailPage</div>;
}
