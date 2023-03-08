import PlaceHolderImage from "../officerImages/PlaceHolder.png";
import BoardCards from "./BoardCards";
import JuliaChanceyImage from "c:/Users/bgaya/GWCgood/GWC-FRONT/gwc-client/src/officerImages/JuliaChancey.JPG"
import VictoriaDeAlbaExternalVPImage from "c:/Users/bgaya/GWCgood/GWC-FRONT/gwc-client/src/officerImages/VictoriaDeAlbaExternalVP.jpeg"
import NandikaRegattiImage from "c:/Users/bgaya/GWCgood/GWC-FRONT/gwc-client/src/officerImages/NandikaRegatti.PNG"
import GayatriBaskaranImage from "c:/Users/bgaya/GWCgood/GWC-FRONT/gwc-client/src/officerImages/GayatriBaskaran.jpg"
import VeronicaSodenImage from "c:/Users/bgaya/GWCgood/GWC-FRONT/gwc-client/src/officerImages/VeronicaSoden.JPG"

function WebTeamCards() {
  return (
    <>
      {BoardCards(
        JuliaChanceyImage,
        "Julia Chancey",
        "Scrum Master",
        "email@GWC.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Brianna Rodriguez",
        "Project Manager",
        "email@GWC.com"
      )}
      {BoardCards(
        VictoriaDeAlbaExternalVPImage,
        "Victoria De Alba",
        "External VP",
        "email@GWC.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Anushka Lakam",
        "Senior Developer",
        "email@GWC.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Aparna Nimmaggada",
        "Senior Developer",
        "email@GWC.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Kelly Chen",
        "Senior Developer",
        "email@GWC.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Sunayana Sattaru",
        "Senior Developer",
        "email@GWC.com"
      )}
      {BoardCards(
        VeronicaSodenImage,
        "Veronica Soden",
        "Senior Developer",
        "email@GWC.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Michelle Taing",
        "Junior Developer",
        "email@GWC.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Shaina Desroches",
        "Junior Developer",
        "email@GWC.com"
      )}
      {BoardCards(
        GayatriBaskaranImage,
        "Gayatri Baskaran",
        "Junior Developer",
        "email@GWC.com"
      )}
      {BoardCards(
        NandikaRegattiImage,
        "Nandika Regatti",
        "Junior Developer",
        "email@GWC.com"
      )}
    </>
  );
}

export default WebTeamCards;
