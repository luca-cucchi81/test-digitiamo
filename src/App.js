import InfoUrlCard from "./components/InfoUrlCard";
import Response from "./components/Response";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

/* Style */
import "./styles/App.scss";
import ResponsiveButton from "./components/ResponsiveButton";
import Timing from "./components/Timing";

function App() {
    return (
        <div className="app">
            <Grid
                container
                justify="center"
                alignItems="center"
                className="app-grid-container"
            >
                <Grid
                    item
                    xs
                    lg={8}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginBottom: 30,
                    }}
                >
                    <h1>200</h1>
                    <p>Everything is fine!</p>
                    <Grid item xs={11} md={8} className="input-submit">
                        <Select
                            variant="outlined"
                            defaultValue={1}
                            style={{
                                width: "25%",
                                maxHeight: "40px",
                            }}
                        >
                            <MenuItem value={1}>GET</MenuItem>
                            <MenuItem value={2}>POST</MenuItem>
                            <MenuItem value={3}>PUT</MenuItem>
                            <MenuItem value={4}>DELETE</MenuItem>
                        </Select>
                        <Input
                            defaultValue="www.yoursite.com/home/index.php"
                            disableUnderline={true}
                            style={{
                                width: "55%",
                            }}
                        ></Input>
                        <ResponsiveButton />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid
                    item
                    xs={11}
                    lg={8}
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <InfoUrlCard />
                    <Response />
                </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center">
                <Grid
                    item
                    xs
                    lg={8}
                    style={{ textAlign: "center", marginBottom: "10vh" }}
                >
                    <h3>Share</h3>
                    <span className="share-text">
                        httprequest.com/1a54da684864
                    </span>
                </Grid>
            </Grid>
            <Grid container>
                <Timing />
            </Grid>
        </div>
    );
}

export default App;
