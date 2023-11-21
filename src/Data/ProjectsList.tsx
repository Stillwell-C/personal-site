import gramCopyImg from "../assets/GramCopy.png";
import wildGooseChase from "../assets/WildGooseChase.png";
import photoTag from "../assets/PhotoTag.png";

export type Project = {
  name: string;
  image: string;
  description: string;
  technologies: string[];
  siteLink: string;
  githubLink: string;
};

const projectsList: Project[] = [
  {
    name: "GramCopy",
    image: gramCopyImg,
    description: "Full-stack Instagram-like social media application",
    technologies: ["React", "Sass", "MongoDB", "Express.JS", "Tanstack Query"],
    siteLink: "https://gram-copy.vercel.app/",
    githubLink: "https://github.com/Stillwell-C/gram-copy",
  },
  {
    name: "Wild Goose Chase",
    image: wildGooseChase,
    description: "Full stack blogging application.",
    technologies: [
      "React",
      "Sass",
      "MongoDB",
      "Express.JS",
      "Redux/RTK Query",
      "Supertest",
    ],
    siteLink: "https://wild-goose-chase.vercel.app/",
    githubLink: "https://github.com/Stillwell-C/blog-frontend",
  },
  {
    name: "PhotoTag",
    image: photoTag,
    description: "Full stack photo tagging game application.",
    technologies: [
      "Typescript",
      "React",
      "TailwindCSS",
      "PostgreSQL",
      "Express.JS",
      "Jest",
    ],
    siteLink: "https://photo-tag-sql.vercel.app/",
    githubLink: "https://github.com/Stillwell-C/photoTag/tree/postgreSQL",
  },
];

export default projectsList;
