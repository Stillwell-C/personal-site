import gramCopy from "../assets/GramCopy.png";
import gramCopyMobile from "../assets/GramCopy.webp";
import wildGooseChase from "../assets/WildGooseChase.png";
import wildGooseChaseMobile from "../assets/WildGooseChase.webp";
import photoTag from "../assets/PhotoTag.png";
import photoTagMobile from "../assets/PhotoTag.webp";
import portfolio from "../assets/PortfolioSite.png";
import portfolioMobile from "../assets/PortfolioSite.webp";
import inhands from "../assets/inhands.png";
import inhandsMobile from "../assets/inhands.webp";
import kkobak from "../assets/KkobakSite.png";
import kkobakMobile from "../assets/KkobakSite.webp";
import hotelFinder from "../assets/HotelFinder.png";
import hotelFinderMobile from "../assets/HotelFinder.webp";
import technologiesList from "./TechnologiesList";

type Technology = {
  name: string;
  icon: JSX.Element | null;
};

export type Project = {
  name: string;
  image: string;
  mobileImage: string;
  description: string;
  technologies: Technology[];
  siteLink: string | null;
  githubLink: string;
};

const projectsList: Project[] = [
  {
    name: "GramCopy",
    image: gramCopy,
    mobileImage: gramCopyMobile,
    description: "Full-stack Instagram-like social media application",
    technologies: [
      technologiesList.javascript,
      technologiesList.react,
      technologiesList.sass,
      technologiesList.redis,
      technologiesList.mongodb,
      technologiesList.expressjs,
      technologiesList.tanstack,
    ],
    siteLink: "https://gram-copy.vercel.app/explore",
    githubLink: "https://github.com/Stillwell-C/gram-copy",
  },
  {
    name: "Wild Goose Chase",
    image: wildGooseChase,
    mobileImage: wildGooseChaseMobile,
    description: "Full-stack blogging application.",
    technologies: [
      technologiesList.javascript,
      technologiesList.react,
      technologiesList.css,
      technologiesList.mongodb,
      technologiesList.expressjs,
      technologiesList.redux,
      technologiesList.jestsuper,
    ],
    siteLink: "https://wild-goose-chase.vercel.app/",
    githubLink: "https://github.com/Stillwell-C/blog-frontend",
  },
  {
    name: "Kkobak Kkobak (꼬박꼬박)",
    image: kkobak,
    mobileImage: kkobakMobile,
    description:
      "Korean dictionary and flashcard application with spaced repetition algorithm and AI chat.",
    technologies: [
      technologiesList.typescript,
      technologiesList.nextJS,
      technologiesList.css,
      technologiesList.mongodb,
    ],
    siteLink: "https://korean-dictionary.vercel.app/",
    githubLink: "https://github.com/Stillwell-C/koreanDictionary",
  },
  {
    name: "Hotel Finder",
    image: hotelFinder,
    mobileImage: hotelFinderMobile,
    description: "Hotel booking application built with ASP.Net Core MVC",
    technologies: [
      technologiesList.cSharp,
      technologiesList.dotnet,
      technologiesList.jquery,
      technologiesList.bootstrap,
    ],
    siteLink: "https://aspmvchotelapp.azurewebsites.net/",
    githubLink: "https://github.com/Stillwell-C/AspCoreMvcHotelApp",
  },
  {
    name: "E-commerce Application",
    image: inhands,
    mobileImage: inhandsMobile,
    description: "Full-stack e-commerce application.",
    technologies: [
      technologiesList.typescript,
      technologiesList.nestJS,
      technologiesList.graphQL,
      technologiesList.postgresql,
      technologiesList.prisma,
      technologiesList.react,
      technologiesList.tailwind,
    ],
    siteLink: "https://shopping-cart-henna-zeta.vercel.app/",
    githubLink: "https://github.com/Stillwell-C/shoppingCart",
  },
  {
    name: "PhotoTag",
    image: photoTag,
    mobileImage: photoTagMobile,
    description: "Full-stack photo tagging game.",
    technologies: [
      technologiesList.typescript,
      technologiesList.react,
      technologiesList.tailwind,
      technologiesList.postgresql,
      technologiesList.expressjs,
      technologiesList.jest,
    ],
    siteLink: "https://photo-tag-sql.vercel.app/",
    githubLink: "https://github.com/Stillwell-C/photoTag/tree/postgreSQL",
  },
  {
    name: "Portfolio Site",
    image: portfolio,
    mobileImage: portfolioMobile,
    description:
      "The site you're on now. Animated & responsive. View code below.",
    technologies: [
      technologiesList.typescript,
      technologiesList.react,
      technologiesList.tailwind,
      technologiesList.expressjs,
    ],
    siteLink: null,
    githubLink: "https://github.com/Stillwell-C/personal-site",
  },
];

export default projectsList;
