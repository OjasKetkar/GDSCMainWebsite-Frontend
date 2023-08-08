import { Blog, BlogTag } from "../interfaces/blogs";
import { GalleryImage } from "../interfaces/gallery";
import { Project } from "../interfaces/project";
import { Member } from "../interfaces/team";
import Projects from "../pages/projects";

export const member1: Member = {
  name: "Grace Shelby",
  position: "HEAD",
  image:
    "https://images.unsplash.com/photo-1536811145290-bc394643e51e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
};

const datascience: BlogTag = {
  id: "DATASCIENCE",
  name: "data science",
  color: "gred",
};
const blockchain: BlogTag = {
  id: "BLOCKCHAIN",
  name: "blockchain",
  color: "gblue",
};

export const galleryImages: GalleryImage[] = [
  {
    image:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "celkf",
  },
  {
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80",
    text: "wkejfwe",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    text: "celkf",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "wkejfwe",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
    text: "celkf",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    text: "wkejfwe",
  },
  {
    image:
      "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "celkf",
  },
  {
    image:
      "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "wkejfwe",
  },
  {
    image:
      "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "celkf",
  },
  {
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "wkejfwe",
  },
];

export const blogs: Blog[] = [
  {
    id: 1,
    imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*XlTup5VZVFeiyFaSfD8ZEA.jpeg",
    title: "Introduction To Docker",
    tags: "",
    link: "https://medium.com/dscvitpune/introduction-to-docker-e284632ad40e",
    date: "Dec 1, 2021",
    description: "Have you ever been through scenarios when an installation gives you errors, and the dependency versions arent compatible with what your software needs?",
    author: "Rewa Wader",
    category : "",
  }
];

export const projects: Project[] = [
  {
    name: "NFT HUB",
    tech: ["React JS"],
    contributors: [member1],
    thumbnail:
      "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    description:
      "If your actions create a legacy that inspires others to dream more, learn more, do more and become more, then, you are an excellent leader.learn more, do more and become more, then",
    domain: "web",
  },
];
