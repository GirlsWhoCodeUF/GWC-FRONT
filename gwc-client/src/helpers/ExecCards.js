import PlaceHolderImage from "../officerImages/PlaceHolder.png";
import BoardCards from "./BoardCards";
import MayaHarrisImage from "../officerImages/MayaHarris.JPG"
import VictoriaDeAlbaExternalVPImage from "../officerImages/VictoriaDeAlbaExternalVP.jpeg"
import DishaGaonkerImage from "../officerImages/DishaGaonkar.jpg"

function ExecCards() {
  return (
    <>
      {BoardCards(
        MayaHarrisImage,
        "Maya Harris",
        "President",
        "email@GWC.com"
      )}

      {BoardCards(
        VictoriaDeAlbaExternalVPImage,
        "Victoria De Alba",
        "Vice-President External",
        "email@GWC.com"
      )}
      {BoardCards(
        DishaGaonkerImage,
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
