import PlaceHolderImage from "../officerImages/PlaceHolder.png";
import BoardCards from "./BoardCards";
import TanyaCharanImage from "../officerImages/TanyaCharan.jpeg"
import NandikaRegattiImage from "../officerImages/NandikaRegatti.PNG"
import KaylaMobergImage from "../officerImages/KaylaMoberg.jpeg"
import SophiaKeaneImage from "../officerImages/SophiaKeane.jpg"
import JuliaChanceyImage from "../officerImages/JuliaChancey.JPG"

function ChairCards() {
  return (
    <>
      {BoardCards(
        PlaceHolderImage,
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
        "email@GWC.com"
      )}
      {BoardCards(
        NandikaRegattiImage,
        "Nandika Regatti",
        "Membership (Recruitment)",
        "email@GWC.com"
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
        "email@GWC.com"
      )}
      {BoardCards(
        KaylaMobergImage,
        "Kayla Moberg",
        "Fundraiser",
        "email@GWC.com"
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
        "email@GWC.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Brianna Rodriguez",
        "Project Manager",
        "email@GWC.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Miranda Ingram",
        "Workshop",
        "email@GWC.com"
      )}
    </>
  );
}

export default ChairCards;
