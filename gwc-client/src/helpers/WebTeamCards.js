import PlaceHolderImage from "../officerImages/PlaceHolder.png";
import BoardCards from "./BoardCards";
import JuliaChanceyImage from "../officerImages/JuliaChancey.JPG";
import VictoriaDeAlbaExternalVPImage from "../officerImages/VictoriaDeAlbaExternalVP.jpeg";
import NandikaRegattiImage from "../officerImages/NandikaRegatti.PNG";
import GayatriBaskaranImage from "../officerImages/GayatriBaskaran.jpg";
import VeronicaSodenImage from "../officerImages/VeronicaSoden.JPG";
import KellyChenImage from "../officerImages/kelly_chen.jpg";
import AparnaNimmagaddaImage from "../officerImages/AparnaNimmagadda.jpg";
import BriannaRodriguezImage from "../officerImages/BriannaRodriguez.PNG";
import MichelleTaingImage from "../officerImages/MichelleTaing.JPG";
import SunayanaSattaruImage from "../officerImages/SunayanaSattaru.jpg";

function WebTeamCards() {
  return (
    <>
      {BoardCards(
        JuliaChanceyImage,
        "Julia Chancey",
        "Scrum Master",
        "julia.chancey@ufl.edu"
      )}
      {BoardCards(
        BriannaRodriguezImage,
        "Brianna Rodriguez",
        "Project Manager",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        VictoriaDeAlbaExternalVPImage,
        "Victoria De Alba",
        "External VP",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Anushka Lakam",
        "Senior Developer",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        AparnaNimmagaddaImage,
        "Aparna Nimmaggada",
        "Senior Developer",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        KellyChenImage,
        "Kelly Chen",
        "Senior Developer",
        "kellychen@ufl.edu"
      )}
      {BoardCards(
        SunayanaSattaruImage,
        "Sunayana Sattaru",
        "Senior Developer",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        VeronicaSodenImage,
        "Veronica Soden",
        "Senior Developer",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        MichelleTaingImage,
        "Michelle Taing",
        "Junior Developer",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Shaina Desroches",
        "Junior Developer",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        GayatriBaskaranImage,
        "Gayatri Baskaran",
        "Junior Developer",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        NandikaRegattiImage,
        "Nandika Regatti",
        "Junior Developer",
        "girlswhocodeuf@gmail.com"
      )}
    </>
  );
}

export default WebTeamCards;
