import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@heroui/react";
import { Link } from "react-router";
import  ToggleBtn from "./ToggleBtn.js";
// import {useTheme} from "@heroui/use-theme";


export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function NavbarComp({ setTheme }) {
  // const { theme, setTheme } = useTheme()
  const navBarContent = [
    { "title": "Home", "link": "/" },
    { "title": "Projects", "link": "/projects" },
    { "title": "Skills", "link": "/skills" },
    { "title": "Snippets", "link": "/snippets" },
    { "title": "Blog", "link": "/blog" },
    { "title": "Statistic", "link": "/statistic" },
    { "title": "Certifications", "link": "/certifications" },
    { "title": "Anime", "link": "/anime" },
  ];

  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      {/* The current theme is: {theme} */}
      <NavbarContent className="sm:flex gap-4" justify="center">
        {navBarContent?.map((item, index) => (
          <NavbarItem>
            <Link color="foreground" to={item.link}>
              {item.title}
            </Link>
          </NavbarItem>
        ))
        }

        <NavbarItem isActive>
          <Link aria-current="page" to="/about">
            about
          </Link>
        </NavbarItem>

      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
        <Button onPress={() => setTheme('light')}>Light Mode</Button>
        </NavbarItem>
        <NavbarItem>
        <Button onPress={() => setTheme('dark')}>Dark Mode</Button>
        </NavbarItem>
        <ToggleBtn />
      </NavbarContent>
    </Navbar>
  );
}