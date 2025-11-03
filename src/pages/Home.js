import { useEffect, useState } from "react";
import { getCanvasList } from "../request/canvas";
import { Card, Space } from "antd";
import { Link } from "react-router-dom";
import ShowPage from './ShowPage'

export default function Home(props) {
  const [list, setList] = useState([]);

  const fresh = () => {
    getCanvasList("", (res) => {
      let data = res.content;
      data = data.filter(
        (item) => item.id !== 23 && item.id !== 15 && item.id !== 17
      );
      setList(data);
    });
  };

  useEffect(() => {
    fresh();
  }, []);

  return (
    <Card title={<Link to={"/"}>新增</Link>}>
      <ShowPage />
    </Card>
  );
}
