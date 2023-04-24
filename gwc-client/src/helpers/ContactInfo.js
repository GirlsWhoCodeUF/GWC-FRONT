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
      <Tab.Pane inverted='true'>
        <divider /> <Header as="h1">Meet Our E-Board</Header> <divider />{" "}
        <Header as="h2"> </Header>
        <MediaContextProvider>
          <Segment as={Media} at="computer" inverted='true'>
            <Card.Group itemsPerRow={3} inverted='true'>
              <ExecCards />
            </Card.Group>
          </Segment>
        </MediaContextProvider>
        <MediaContextProvider>
          <Segment as={Media} at="mobile" inverted='true'>
            <Card.Group itemsPerRow={1}>
              <ExecCards />
            </Card.Group>
          </Segment>
        </MediaContextProvider>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Chairs",
    render: () => (
      <Tab.Pane inverted='true'>
        <divider /> <Header as="h1"> Meet Our Chairs </Header> <divider />
        <Header as="h2"> </Header>
        <MediaContextProvider>
          <Segment as={Media} at="computer" inverted='true'>
            <Card.Group itemsPerRow={3} inverted='true'>
              <ChairCards />
            </Card.Group>
          </Segment>
        </MediaContextProvider>
        <MediaContextProvider>
          <Segment as={Media} at="mobile" inverted='true'>
            <Card.Group itemsPerRow={1} inverted='true'>
              <ChairCards />
            </Card.Group>
          </Segment>
        </MediaContextProvider>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Web Dev Team",
    render: () => (
      <Tab.Pane inverted='true'>
        <divider /> <Header as="h1">Meet Our Web Development Team</Header>
        <divider /> <Header as="h2"> </Header>
        <MediaContextProvider>
          <Segment as={Media} at="computer" inverted='true'>
            <Card.Group itemsPerRow={3} inverted='true'>
              <WebTeamCards />
            </Card.Group>
          </Segment>
        </MediaContextProvider>
        <MediaContextProvider>
          <Segment as={Media} at="mobile" inverted='true'>
            <Card.Group itemsPerRow={1} inverted='true'>
              <WebTeamCards />
            </Card.Group>
          </Segment>
        </MediaContextProvider>
      </Tab.Pane>
    ),
  },
];

function ContactInfo() {
  return (
    <Container className="container" inverted='true'>
      <Tab
        panes={panes}
        menu={{ inverted: true }}
      />
    </Container>
  );
}

const CardExampleFluid = () => (
  <Card.Group>
    <Card fluid color="red" header="Option 1" />
    <Card fluid color="orange" header="Option 2" />
    <Card fluid color="yellow" header="Option 3" />
  </Card.Group>
);

export default ContactInfo;
