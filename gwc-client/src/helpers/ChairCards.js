import PlaceHolderImage from "../officerImages/PlaceHolder.png";
import BoardCards from "./BoardCards";
import JessBogartImage from "../officerImages/JessicaBogart.PNG"
import TanyaCharanImage from "../officerImages/TanyaCharan.jpeg"
import NandikaRegattiImage from "../officerImages/NandikaRegatti.PNG"
import KaylaMobergImage from "../officerImages/KaylaMoberg.jpeg"
import JuliaChanceyImage from "../officerImages/JuliaChancey.JPG"
import MirandaIngramImage from "../officerImages/MirandaIngram.jpg"
import SophiaKeaneImage from "../officerImages/SophiaKeane.jpg"
import BriannaRodriguezImage from "../officerImages/BriannaRodriguez.PNG"


function ChairCards() {
  return (
    <>
      {BoardCards(
        JessBogartImage,
        "Jess Bogart",
        "Organization",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Kimberly Montalvo",
        "Graphic Design",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        TanyaCharanImage,
        "Tanya Charan",
        "Communications",
        "tanyacharan@ufl.edu"
      )}
      {BoardCards(
        NandikaRegattiImage,
        "Nandika Regatti",
        "Membership (Recruitment)",
        "nandika.regatti@ufl.edu"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Ursa Pillay",
        "Membership (Room Lead)",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Samitha Kosanam",
        "Membership (Mentorship)",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        SophiaKeaneImage, 
        "Sophia Keane", 
        "Social", 
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        KaylaMobergImage,
        "Kayla Moberg",
        "Fundraiser",
        "Kaylamoberg@ufl.edu"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Megan Shah",
        "Sponsorship",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        JuliaChanceyImage,
        "Julia Chancey",
        "Scrum Master (WebDev)",
        "julia.chancey@ufl.edu"
      )}
      {BoardCards(
        BriannaRodriguezImage,
        "Brianna Rodriguez",
        "Project Manager",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        MirandaIngramImage,
        "Miranda Ingram",
        "Workshop",
        "miranda.ingram@ufl.edu"
      )}
    </>
  );
}

export default ChairCards;
