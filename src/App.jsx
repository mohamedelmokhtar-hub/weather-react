import { Button, Container, Typography } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [temp, setemp] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=35.6&lon=-0.6&appid=074eec0b5bd92e07371a5a424298b0fe",
      )
      .then(function (res) {
        const tempoTemp = Math.round(res.data.main.temp - 272.15);
        setemp(tempoTemp);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Container maxWidth="sm">
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* CARD */}
          <div
            style={{
              width: "100%",
              background: "rgb(28 52 91 /36%)",
              color: "white",
              padding: "10px",
              borderRadius: "15px",
              boxShadow: "0px 11px 1px rgba(0,0,0,0.05)",
            }}
          >
            {/* CONTENT */}
            <div>
              {/* CITY AND TIME */}
              <div
                dir="rtl"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "end",
                }}
              >
                <Typography variant="h2" sx={{ color: "inherit" }}>
                  الجزائر{" "}
                </Typography>
                <Typography variant="h5" sx={{ paddingX: 2 }}>
                  الاربعاء 30-09-2026
                </Typography>
              </div>
              <hr />
              {/* DEGREE AND DESCRIPTION */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  {/* TEMP */}
                  <div>
                    <Typography
                      variant="h1"
                      sx={{ textAlign: "right", color: "inherit" }}
                    >
                      {temp}
                    </Typography>
                    {/* TODO:TEMP IMAGE */}
                  </div>
                  <Typography variant="h6">Broken clouds</Typography>
                  {/* MIN AND  MAX */}
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h5> الصغرى:34</h5>
                    <h5>|</h5>
                    <h5>الكبرى:34</h5>
                  </div>
                </div>
                <CloudIcon style={{ fontSize: "200px" }}></CloudIcon>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <Button sx={{ color: "white" }} variant="text">
              إنجليزي
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
