import React from "react";
import Content from "./Content";
import Nav from "./Nav";

const url = "https://course-api.com/react-tabs-project";

declare global {
  interface Experiences {
    id: string;
    order: number;
    title: string;
    dates: string;
    duties: string[];
    company: string;
  }
}

function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <Nav data={data} active={active} setActive={setActive} />
        <Content data={data[active]} />
      </div>
    </section>
  );
}

export default App;
