import PlaceHolderImage from "../officerImages/PlaceHolder.png";
import BoardCards from "./BoardCards";
import JessBogartImage from "../officerImages/JessicaBogart.PNG"
import TanyaCharanImage from "../officerImages/TanyaCharan.jpeg"
import NandikaRegattiImage from "../officerImages/NandikaRegatti.PNG"
import KaylaMobergImage from "../officerImages/KaylaMoberg.jpeg"
import JuliaChanceyImage from "../officerImages/JuliaChancey.JPG"
import MirandaIngramImage from "../officerImages/MirandaIngram.HEIC"
import SophiaKeaneImage from "../officerImages/SophiaKeane.jpg"


function ChairCards() {
  return (
    <>
      {BoardCards(
        JessBogartImage,
        "Jess Bogart",
        "Organization",
        "email@GWC.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Kimberly Montalvo",
        "Graphic Design",
        "email@GWC.com"
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
        "email@GWC.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Samitha Kosanam",
        "Membership (Mentorship)",
        "email@GWC.com"
      )}
      {BoardCards(
        SophiaKeaneImage, 
        "Sophia Keane", 
        "Social", 
        "sophia.keane@ufl.edu")}

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
        "email@GWC.com"
      )}
      {BoardCards(
        JuliaChanceyImage,
        "Julia Chancey",
        "Scrum Master (WebDev)",
        "julia.chancey@ufl.edu"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Brianna Rodriguez",
        "Project Manager",
        "email@GWC.com"
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
