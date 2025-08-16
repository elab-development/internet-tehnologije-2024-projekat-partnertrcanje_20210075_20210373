import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./MainSection.css";
import { Button } from "./Button";
import Cards from "./Cards";
import Image1 from "../assets/marko.jpg";
import Image2 from "../assets/jasna.jpeg";
import Image3 from "../assets/milica.jpeg";
import Naslovna from "../assets/naslovnaTrkac.png";
import Counter from './Counter';
import { apiService } from "./ApiService";

function MainSection() {
  const navigate = useNavigate();
  const userRole = apiService.getLoginInfo().role;
  const clients = [
    {
      id: 1,
      name: "Marko",
      text: "Running Partner aplikacija mi je promenila život! Osim što sam pronašao fantastične trkače u mom kraju, osećam se kao deo globalne trkačke zajednice. Ovde sam otkrio neverovatne staze, stekao prijatelje iz drugih zemalja i podigao svoje trčanje na potpuno novi nivo!",
      src: Image1,
    },
    {
      id: 2,
      name: "Jasna",
      text: "Za mene, Running Partner nije samo aplikacija - to je avantura. Zahvaljujući njoj, trčim s ljudima iz cele Srbije. Osetio sam snagu zajedništva dok smo delili utiske, planirali trke i jednostavno uživali u svakom kilometru zajedno.",
      src: Image2,
    },
    {
      id: 3,
      name: "Milica",
      text: "Koristim Running Partner već neko vreme i mogu reći da je ovo mnogo više od obične fitness aplikacije. Ovde sam pronašao ne samo partnere za trčanje već i inspiraciju, motivaciju i pravu trkačku porodicu. Aplikacija koja stvara prijateljstva na putu ka ciljevima.",
      src: Image3,
    },
  ];


  return (
    <>
      <div className="main-container">
        <img src={Naslovna} alt="Running Partner" style={{ display: 'none' }} />
        <h1>Pronađi i ti svog idealnog partnera za trčanje</h1>


        {userRole === 'trkac' ? (
          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={() => {
              navigate("/kreiraj-plan");
            }}
          >
            KREIRAJ PLAN TRKE!
          </Button>
        ) : userRole === 'user' ? null : (
          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={() => {
              navigate("/login");
            }}
          >
            PRIDRUŽI SE TRKAČIMA!
          </Button>
        )}
        <div className="main-btns">
        </div>
      </div>
      <div className="main-text">

        <h3>Running-Partner aplikacija je tvoj idealan saputnik u trcanju!</h3>
        <Counter />

        <p>
          Sa Running-Partner, trčanje postaje još uzbudljivije - pridruži se zajednici koja te podržava i motiviše! 🏃‍♂️🌍✨
        </p>
      </div>
      <div className="main-clients">
        <Cards
          title="Šta su korisnici rekli o nama?"
          data1={clients}
          type="clients"></Cards>
      </div>

    </>
  );
}

export default MainSection;