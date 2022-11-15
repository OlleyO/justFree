import type { NextPage } from "next";
import { useEffect, useState } from "react";

import Layout from "../components/common/layout";
import { pageData } from "../core/types";
import useInterval from "../hooks/use-interval";

import HomeView from "../views/home/index";

const Home: NextPage = () => {
  const [userPhotoUrl, setUserPhotoUrl] = useState("");

  const [data, setData] = useState<pageData | null>(null);

  useEffect(() => {
    fetch("https://random.imagecdn.app/121/121").then((res) =>
      setUserPhotoUrl(res.url)
    );

    fetchData().then((data) => setData(data));
  }, []);

  useInterval(async () => {
    const data = await fetchData();
    setData(data);
  }, 60000);

  const fetchData = async () => {
    const data = await fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json().then((data: pageData) => data));

    return data;
  };

  return (
    <Layout>
      {data && (
        <HomeView
          dataForGraph1={data.dataForGraph1 || []}
          dataForGraph3={data.dataForGraph3 || []}
          dataForGraph4={data.dataForGraph4 || []}
          dataForLastGraph={data.dataForLastGraph || []}
          clientHours={data.clientHours || []}
          projects={data.projects || []}
          totalInLastGraph={data.totalInLastGraph || ""}
          clientInformation={data.clientInformation || null}
          photoUrl={userPhotoUrl}
        />
      )}
    </Layout>
  );
};

export default Home;
