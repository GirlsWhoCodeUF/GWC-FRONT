import PlaceHolderImage from "../officerImages/PlaceHolder.png";
import BoardCards from "./BoardCards";

function ExecCards() {
  return (
    <>
      {BoardCards(
        PlaceHolderImage,
        "Maya Harris",
        "President",
        "email@GWC.com"
      )}

      {BoardCards(
        PlaceHolderImage,
        "Victoria De Alba",
        "Vice-President External",
        "email@GWC.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Disha Gaonkar",
        "Vice-President Internal",
        "email@GWC.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Maia Gervasone",
        "Secretary",
        "email@GWC.com"
      )}

      {BoardCards(
        PlaceHolderImage,
        "Lexi Watson",
        "Treasurer",
        "email@GWC.com"
      )}
    </>
  );
}

export default ExecCards;
