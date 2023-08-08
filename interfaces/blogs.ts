import { Member } from "./team";

export interface BlogTag {
  id: string;
  name: string;
  color: string;
}

export interface Blog {
  id: string,
  imageUrl: string;
  title: string;
  tags: String;
  link: string;
  date: string;
  description?: string;
  author: String;
  category : string;
}

export interface IBlog{
  author:string,
  categories : [string],
  content : string,
  description : string,
  enclosure : object,
  guid : string,
  link: string,
  pubDate : string,
  thumbnail : string,
  title : string
}