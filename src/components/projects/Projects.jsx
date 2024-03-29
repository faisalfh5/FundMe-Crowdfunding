import React, { useEffect, useState } from "react";
import "../../cssfiles/projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { Portfolio1 } from "../../assets";
import { Card, Button } from "react-bootstrap";
import { getallCampaign } from "../../Web3/contractFunction";

const Projects = () => {
  // const [isEdit, setIsEdit] = useState();
  const [tx, setTx] = useState();

  const fetchData = async () => {
    console.log("here");
    const tx = await getallCampaign();
    console.log("tx--->", tx);
    setTx(tx);
  };

  useEffect(() => {
    fetchData();
  }, [!tx]);
  console.log("settx record", tx);

  return (
    <>
      <div className="layout">
        {tx?.map((item) => {})}
        <Card className="card-container">
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/user/erondu/600x400"
          />
          <Card.Body>
            <Card.Title>Medical</Card.Title>
            <Card.Text>Some Custom text one can write here</Card.Text>
            <Card.Text>Wallet Address: 123456</Card.Text>

            <Button className="btn" variant="primary">
              Start Investing
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Projects;
