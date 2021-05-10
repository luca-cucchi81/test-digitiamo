import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

/* Style */
import "../styles/timing.scss";

function Timing() {
    const [height, setHeight] = useState("6vh");
    const [timing, setTiming] = useState("");

    function getTiming() {
        const url = "https://api.npoint.io/23c5e269a08ecd961177/timing";
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => setTiming(res))
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getTiming();
    }, []);

    function handleHeight() {
        setHeight("100%");
        if (height === "100%") {
            setHeight("6%");
        }
    }

    return (
        <div style={{ height: height }} className="timing">
            <Button
                variant="outlined"
                color="primary"
                size="medium"
                onClick={handleHeight}
                className="button"
            ></Button>
            <h3>Timing Analysis</h3>
            <div className="content">
                <Box position="relative" display="inline-flex" className="box">
                    <CircularProgress
                        variant="determinate"
                        color="primary"
                        value={100}
                        size={150}
                    />
                    <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <span
                            style={{
                                fontWeight: 500,
                            }}
                        >
                            {timing.value}
                        </span>
                        <span
                            style={{
                                fontWeight: 500,
                                textTransform: "capitalize",
                            }}
                        >
                            {timing.result}
                        </span>
                    </Box>
                </Box>
                <div>
                    <p
                        style={{
                            marginBottom: 5,
                            fontSize: "1.5em",
                            fontWeight: 500,
                            color: "lightgray",
                        }}
                    >
                        Page Load
                    </p>
                    <p
                        style={{
                            marginTop: 0,
                        }}
                    >
                        0.4s
                    </p>
                </div>

                <Box position="relative" display="inline-flex">
                    <CircularProgress
                        variant="determinate"
                        color="secondary"
                        value={100}
                        size={150}
                    />
                    <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <span
                            style={{
                                fontWeight: 500,
                            }}
                        >
                            {timing.value}
                        </span>
                        <span
                            style={{
                                fontWeight: 500,
                                textTransform: "capitalize",
                            }}
                        >
                            {timing.result}
                        </span>
                    </Box>
                </Box>
                <div>
                    <p
                        style={{
                            marginBottom: 5,
                            fontSize: "1.5em",
                            fontWeight: 500,
                            color: "lightgray",
                        }}
                    >
                        First Interaction
                    </p>
                    <p
                        style={{
                            marginTop: 0,
                        }}
                    >
                        0.9s
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Timing;
