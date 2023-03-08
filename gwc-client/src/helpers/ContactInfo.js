import PlaceHolderImage from "../officerImages/PlaceHolder.png";
import BoardCards from "./BoardCards";
import { Container, Card, Header, Tab, Segment } from "semantic-ui-react";
import WebTeamCards from "../../src/helpers/WebTeamCards";
import ExecCards from "../../src/helpers/ExecCards";
import ChairCards from "./ChairCards";

import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    computer: 992,
  },
});
const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const panes = [
  {
    menuItem: "Executive Board",
    render: () => ( 
      <Tab.Pane>
        <Container>
          <Container textAlign="center">
            {" "}
            <divider /> <Header as="h1">
              {" "}
              <divider /> <Header as="h1"> Meet Our E-Board </Header>{" "}
            </Container>
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
          </Card.Group>
        </Container>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Chairs",
    render: () => (
      <Tab.Pane>
        <Container>
          <Container textAlign="center">
            {" "}
            <divider /> <Header as="h1">
              {" "}
              Meet Our Chairs{" "}
            </Header> <divider /> <Header as="h2"> </Header>{" "}
          </Container>
          <MediaContextProvider>
            <Segment as={Media} at="computer">
              <Card.Group itemsPerRow={3}>
                <ChairCards />
              </Card.Group>
            </Segment>
          </MediaContextProvider>
          <MediaContextProvider>
            <Segment as={Media} at="mobile">
              <Card.Group itemsPerRow={1}>
                <ChairCards />
              </Card.Group>
            </Segment>
          </MediaContextProvider>
        </Container>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Web Development Team",
    render: () => (
      <Tab.Pane>
        <Container>
          <Card.Group itemsPerRow={5}>
            <Container textAlign="center">
              {" "}
              <divider /> <Header as="h1"> Meet Our Web Dev Team </Header>{" "}
            </Container>

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
          </Card.Group>
        </Container>
      </Tab.Pane>
    ),
  },
];

function ContactInfo() {
  return (
    <Container className={styles.container}>
      <Tab panes={panes} />
    </Container>
  );
}

const CardExampleFluid = () => (
  <Card.Group>
    <Card fluid color='red' header='Option 1' />
    <Card fluid color='orange' header='Option 2' />
    <Card fluid color='yellow' header='Option 3' />
  </Card.Group>
)

export default ContactInfo;
