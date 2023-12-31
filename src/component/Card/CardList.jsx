import React from "react";
import { useNavigate } from "react-router";
import "./Card.css";
import Card from "./Card";

export default function CardList(props) {
  const nav = useNavigate();

  const list = props.data.map(function (item) {
    const projectlink = () => {
      const url = item.link;
      window.open(url, "_blank");
    };
    return (
      <Card
        thumbnail={item.img || item.thumbnail}
        key={item.title}
        title={item.title}
        info={item.info}
        //메인 뉴스(가로로 긴거)타입 추가
        mainNews={item.mainNews}
        // 카드에게 type 전달 2024-01-05(22:41)
        type={props.type}
        onClick={function () {

          props.type === "project"
            ? projectlink()
            
            // award일때, award페이지로 이동
            : props.type === "award"
            ? nav("/award/" + item.title)
            
            // news일때, new 페이지로 이동
            : props.type === "news"
            ? nav("/news/" + item.title)
            
            : nav("/project/" + item.title);
        }}
      ></Card>
    );
  });

  return <div className={"maincontainer"}>{list}</div>;
}
