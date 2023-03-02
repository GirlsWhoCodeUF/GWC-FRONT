import PlaceHolderImage from "../officerImages/PlaceHolder.png";
import BoardCards from "./BoardCards";

function WebTeamCards() {
  return (
    <>
      {BoardCards(
        PlaceHolderImage,
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
        PlaceHolderImage,
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
        PlaceHolderImage,
        "Gayatri Baskaran",
        "Junior Developer",
        "email@GWC.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Nandika Regatti",
        "Junior Developer",
        "email@GWC.com"
      )}
    </>
  );
}

export default WebTeamCards;
