"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BuyResidentialsPage from "@/template/BuyResidentialsPage";

function BuyResidential({ searchParams }) {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://next-js-real-state-project-fullstack.vercel.app/api/profile", {
        headers: {
          "Cache-Control": "no-store",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.error) {
            console.error("Server error:", result.error);
            return;
          }

          let finalData = result.data;

          if (searchParams.category) {
            finalData = finalData.filter((item) => item.category === searchParams.category);
          }

          setData(finalData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, [searchParams.category]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      router.refresh();
    }
  }, []);
  return (
    <div>
      {loading ? (
        <h3>Loading ...</h3>
      ) : data.length === 0 ? (
        <h3>can not found data</h3>
      ) : (
        <BuyResidentialsPage data={data} />
      )}
    </div>
  );
}

export default BuyResidential;
