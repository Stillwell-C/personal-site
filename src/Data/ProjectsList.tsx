import gramCopyImg from "../assets/GramCopy.png";
import wildGooseChase from "../assets/WildGooseChase.png";
import photoTag from "../assets/PhotoTag.png";
import technologiesList from "./TechnologiesList";

type Technology = {
  name: string;
  icon: JSX.Element;
};

export type Project = {
  name: string;
  image: string;
  description: string;
  technologies: Technology[];
  siteLink: string;
  githubLink: string;
};

const projectsList: Project[] = [
  {
    name: "GramCopy",
    image: gramCopyImg,
    description: "Full-stack Instagram-like social media application",
    technologies: [
      technologiesList.javascript,
      technologiesList.react,
      technologiesList.sass,
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
    description: "Full stack blogging application.",
    technologies: [
      technologiesList.javascript,
      technologiesList.react,
      technologiesList.sass,
      technologiesList.mongodb,
      technologiesList.expressjs,
      technologiesList.redux,
      { name: "Supertest", icon: null },
    ],
    siteLink: "https://wild-goose-chase.vercel.app/",
    githubLink: "https://github.com/Stillwell-C/blog-frontend",
  },
  {
    name: "PhotoTag",
    image: photoTag,
    description: "Full stack photo tagging game application.",
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
];

export default projectsList;
