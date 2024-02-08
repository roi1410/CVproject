import "../styles/HomePage.css";
import Womancv from "../assets/image/womancv.png";
import { Typography, Button } from "@mui/material";
import Secondimg from "../assets/image/secondimg.jpg";
import Lottie from "react-lottie";
import animationData from "../assets/image/resumeanim.json"; // Import your Lottie animation JSON file
import steponeanim from "../assets/image/steponeanim.json"; // Import your Lottie animation JSON file
import steptwoanim from "../assets/image/fillanim.json"; // Import
import { useNavigate } from "react-router";
import Footer from "./Footer";

function HomePage() {
    const navigate = useNavigate();
  return (
    <>
      <div className="homepage">
        <div className="homepage-textdiv">
          <Typography
            style={{
              display: "flex",
              width: "70%",
              color: "white", // Set text color to white
            }}
            variant="h3"
          >
            <b>Create your winning CV in just 10 minutes!</b>
          </Typography>
          <div className="subtitledreamjob">
            <Typography
              className="dreamjob"
              style={{
                display: "flex",
                width: "70%",
                color: "white", // Set text color to white
              }}
              variant="h5"
            >
              Don’t miss out on your dream job
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/signin')}
            >
              Sign In
            </Button>
          </div>
        </div>
        <div className="homepage-img">
          <img src={Womancv} alt="Woman with CV" />
        </div>
      </div>
      <div className="secondnote">
        <div className="secondimg">
          <img src={Secondimg} />
        </div>
        <div className="secondtext">
          <Typography
            style={{
              display: "flex",
              width: "100%",
              color: "white", // Set text color to white
            }}
            variant="h4"
          >
            Create a resume to land your next job
          </Typography>
          <Typography
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              color: "white", // Set text color to white
            }}
            variant="h6"
          >
            We have developed a resume builder based on feedback from thousands
            of users, recruiter expertise, stellar template design and the best
            hiring practices. The goal is simple: help you land that dream job
            interview! Get an advantage in the modern professional environment.
          </Typography>
        </div>
      </div>
      <div className="mainsteps">
        <Typography
          style={{
            display: "flex",
            width: "70%",
            justifyContent: "center",
            color: "white", // Set text color to white
          }}
          variant="h3"
        >
          <b>Your CV in 3 steps</b>
        </Typography>
        <div className="steps">
          
       
          <div className="innerstep">
            <Typography
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                color: "white", // Set text color to white
              }}
              variant="h5"
            >
              Choose a template
            </Typography>
            <div style={{ width: "60%", height: "60%" }}>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: steponeanim,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={"120%"}
                width={"120%"}
              />
            </div>
            <Typography
              style={{
                display: "flex",
                width: "70%",
                justifyContent: "center",
                color: "white", // Set text color to white
              }}
              variant="h6"
            >
              Choose a suitable CV from our template library.
            </Typography>
          </div>
          <div className="innerstep">
            <Typography
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                color: "white", // Set text color to white
              }}
              variant="h5"
            >
              Fill in your details
            </Typography>
            
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: steptwoanim,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={"50%"}
                width={"50%"}
              />
           
            <Typography
              style={{
                display: "flex",
                width: "70%",
                justifyContent: "center",
                color: "white", // Set text color to white
              }}
              variant="h6"
            >
              Customize your application through our easy-to-use CV builder.
            </Typography>
          </div>
          <div className="innerstep">
            <Typography
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                color: "white", // Set text color to white
              }}
              variant="h5"
            >
              Download or share your CV
            </Typography>
            <div style={{ width: "60%", height: "60%" }}>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={"120%"}
                width={"120%"}
              />
            </div>
            <Typography
              style={{
                display: "flex",
                width: "70%",
                justifyContent: "center",
                color: "white", // Set text color to white
              }}
              variant="h6"
            >
             Send your outstanding CV to employers.
            </Typography>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default HomePage;
