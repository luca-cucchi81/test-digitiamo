import React, { Fragment, useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import "../styles/response.scss";

function Response() {
    const [responseInfo, setResponseInfo] = useState([]);

    function getResponseInfo() {
        const url = "https://api.npoint.io/23c5e269a08ecd961177/responses";
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => setResponseInfo(res))
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getResponseInfo();
    }, []);

    return (
        <Fragment>
            {responseInfo.map((info) => {
                return (
                    <Card key={info.id} className="response-info-card">
                        <CardHeader
                            title={info.title}
                            style={{
                                fontWeight: 700,
                                textAlign: "center",
                                textTransform: "uppercase",
                            }}
                        ></CardHeader>
                        <CardContent style={{ padding: 0 }}>
                            <p>{info.status}</p>
                            <p>{info.location}</p>
                            <p>{info.server}</p>
                        </CardContent>
                    </Card>
                );
            })}
        </Fragment>
    );
}

export default Response;
