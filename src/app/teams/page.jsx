import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Title from "../components/Title";

const Page = () => {
  return (
    <div className="w-full h-[90vh] grid place-items-center">
      <div className="w-full h-[90vh] grid place-items-center">
        <Title title="Our Teams" />
        <div className="w-full py-4 h-[auto] grid place-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
          <Card name="Om salunke" role="Web Developer" />
          <Card name="Jane Doe" role="App Developer" />
          <Card name="John Patil" role="Blockchain Developer" />
          <Card name="Sagar" role="Blockchain Developer" />
          <Card name="Sagar" role="Blockchain Developer" />
          <Card name="Sagar" role="Blockchain Developer" />
          <Card name="Sagar" role="Blockchain Developer" />
          <Card name="Sagar" role="Blockchain Developer" />
          <Card name="Sagar" role="Blockchain Developer" />
        </div>
      </div>
    </div>
  );
};

export default Page;
