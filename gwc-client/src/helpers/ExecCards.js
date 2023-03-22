import PlaceHolderImage from "../officerImages/PlaceHolder.png";
import BoardCards from "./BoardCards";
import MayaHarrisImage from "../officerImages/MayaHarris.JPG"
import VictoriaDeAlbaImage from "../officerImages/VictoriaDeAlbaExternalVP.jpeg"
import DishaGaonkarImage from "../officerImages/DishaGaonkar.jpg"
import MaiaGervasoneImage from "../officerImages/MaiaGervasone.jpg"

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
        VictoriaDeAlbaImage,
        "Victoria De Alba",
        "Vice-President External",
        "victoriadealba@ufl.edu"
      )}
      {BoardCards(
        DishaGaonkarImage,
        "Disha Gaonkar",
        "Vice-President Internal",
        "dishagaonkar@ufl.edu"
      )}
      {BoardCards(
        MaiaGervasoneImage,
        "Maia Gervasone",
        "Secretary",
        "maiagervasone@ufl.edu"
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
