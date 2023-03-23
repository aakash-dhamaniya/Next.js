import { useEffect } from "react";
import { useRouter } from "next/router";
const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <div>
        <h1>We are sorry ,page not found</h1>
      </div>
      <div>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temprarily unavailable.
        </p>
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          Click here to home page
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
