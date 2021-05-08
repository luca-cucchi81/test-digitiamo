import InfoUrlCard from "./components/InfoUrlCard";
import Response from "./components/Response";
import Grid from "@material-ui/core/Grid";
/* Style */
import "./styles/App.scss";

function App() {
    return (
        <div className="app">
            <Grid container justify="center" alignItems="center">
                <Grid item xs lg={8} style={{ textAlign: "center" }}>
                    <h1>200</h1>
                    <p>Everything is fine!</p>
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
        </div>
    );
}

export default App;
