import PlaceHolderImage from "../officerImages/PlaceHolder.png";
import BoardCards from "./BoardCards";
import { Container, Card, Header, Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: "Executive Board",
    render: () => (
      <Tab.Pane>
        <Container>
          <Card.Group itemsPerRow={5}>
            <Container textAlign="center">
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
          <Card.Group itemsPerRow={5}>
            <Container textAlign="center">
              {" "}
              <divider /> <Header as="h1"> Meet Our Chairs </Header>{" "}
            </Container>

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
            {BoardCards(
              PlaceHolderImage,
              "Sophia Keane",
              "Social",
              "email@GWC.com"
            )}
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
          </Card.Group>
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
    <Container>
      <Tab panes={panes} />
    </Container>
  );
}

export default ContactInfo;
