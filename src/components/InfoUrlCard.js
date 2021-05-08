import React, { Fragment, useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import "../styles/url_info_card.scss";

function InfoUrlCard() {
    const [urlInfo, setUrlInfo] = useState([]);

    function getInfo() {
        const url = "https://api.npoint.io/23c5e269a08ecd961177/url-info";
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => setUrlInfo(res))
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <Fragment>
            <Card className="url-info-card">
                <CardHeader
                    title={urlInfo.title}
                    style={{
                        fontWeight: 700,
                        textAlign: "center",
                        textTransform: "uppercase",
                    }}
                ></CardHeader>
                <CardContent>
                    <div className="section">
                        <h3>Domain</h3>
                        <p>{urlInfo.domain}</p>
                    </div>
                    <div className="section">
                        <h3>Scheme</h3>
                        <p>{urlInfo.scheme}</p>
                    </div>
                    <div className="section">
                        <h3>Path</h3>
                        <p>{urlInfo.path}</p>
                    </div>
                </CardContent>
            </Card>
        </Fragment>
    );
}

export default InfoUrlCard;
