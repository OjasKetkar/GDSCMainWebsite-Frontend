import { Member } from "./team";

export interface Project {
  name: string;
  tech: string[];
  contributors: Member[];
  thumbnail: string;
  images?: string[];
  description: string;
  github?: string;
  web?: string;
  domain: string;
}
