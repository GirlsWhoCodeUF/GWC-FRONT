import PlaceHolderImage from "../officerImages/PlaceHolder.png";
import BoardCards from "./BoardCards";

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
        PlaceHolderImage,
        "Tanya Charan",
        "Communications",
        "email@GWC.com"
      )}
      {BoardCards(
        PlaceHolderImage,
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
      {BoardCards(PlaceHolderImage, "Sophia Keane", "Social", "email@GWC.com")}
      {BoardCards(
        PlaceHolderImage,
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
        PlaceHolderImage,
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
