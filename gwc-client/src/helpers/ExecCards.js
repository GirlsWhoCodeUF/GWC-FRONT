import PlaceHolderImage from "../officerImages/PlaceHolder.png";
import BoardCards from "./BoardCards";
import MayaHarrisImage from "../officerImages/MayaHarris.JPG";
import VictoriaDeAlbaImage from "../officerImages/VictoriaDeAlbaExternalVP.jpeg";
import DishaGaonkarImage from "../officerImages/DishaGaonkar.jpg";
import MaiaGervasoneImage from "../officerImages/MaiaGervasone.jpg";

function ExecCards() {
  return (
    <>
      {BoardCards(
        MayaHarrisImage,
        "Maya Harris",
        "President",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        VictoriaDeAlbaImage,
        "Victoria De Alba",
        "Vice-President External",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        DishaGaonkarImage,
        "Disha Gaonkar",
        "Vice-President Internal",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        PlaceHolderImage,
        "Lexi Watson",
        "Secretary",
        "girlswhocodeuf@gmail.com"
      )}
      {BoardCards(
        MaiaGervasoneImage,
        "Maia Gervasone",
        "Treasurer",
        "maiagervasone@ufl.edu"
      )}
    </>
  );
}

export default ExecCards;
