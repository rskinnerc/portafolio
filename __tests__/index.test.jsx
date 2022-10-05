const { render, screen, getByText } = require("@testing-library/react");
import Home from "../pages/index";

describe("the home page", () => {
  it("should render the index page and heading section", () => {
    render(<Home />);
    expect(screen.getByText("I am")).toBeInTheDocument();
    expect(screen.getByText("Ronald Skinner Cardenas")).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Web Developer")).toBeInTheDocument();
    expect(
      screen.getByText("Empowering your company with my ideas!")
    ).toBeInTheDocument();
  });

  it ('should render the navigation menu', () => {
    const home = render(<Home />);
    const navbar = home.getByRole('navigation');
    expect(getByText(navbar, 'Home')).toBeInTheDocument();
    expect(getByText(navbar, 'About')).toBeInTheDocument();
    expect(getByText(navbar, 'Skills')).toBeInTheDocument();
    expect(getByText(navbar, 'Projects')).toBeInTheDocument();
    expect(getByText(navbar, 'Contact')).toBeInTheDocument();
  });

  it("should render the index page and about section", () => {
    render(<Home />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("should render the index page and skills section", () => {
    render(<Home />);
    expect(screen.getByText("My Skills")).toBeInTheDocument();
  });

  it("should render the index page and projects section", () => {
    render(<Home />);
    expect(screen.getByText("My Projects")).toBeInTheDocument();
  });

  it("should render the index page and contact section", () => {
    render(<Home />);
    expect(screen.getByText("Contact Me")).toBeInTheDocument();
  });
});
