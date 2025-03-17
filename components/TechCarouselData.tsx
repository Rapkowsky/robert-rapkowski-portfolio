import { StaticImageData } from "next/image";
import image1 from "@/public/stars.webp";
import image2 from "@/public/scary-building.webp";
import image3 from "@/public/person-in-darkness.webp";
import image4 from "@/public/napoleon.webp";
import image5 from "@/public/laboratory.webp";
import image6 from "@/public/family-man.webp";
import image7 from "@/public/airplane.webp";

import imageStatic1 from "@/public/apple1.jpg";
import imageStatic2 from "@/public/apple3.jpg";
import imageStatic3 from "@/public/apple1.jpg";

export type TechType = {
  poster: StaticImageData;
  name: string;
};

export const techs: TechType[] = [
  { poster: image1, name: "Family man" },
  { poster: image2, name: "Laboratory" },
  { poster: image3, name: "Napoleon" },
  { poster: image4, name: "Scary Building" },
  { poster: image5, name: "Airplane" },
  { poster: image6, name: "Stars" },
  { poster: image7, name: "Person in Darkness" },
];

export const techsStatic: TechType[] = [
  { poster: imageStatic1, name: "Family man" },
  { poster: imageStatic2, name: "Laboratory" },
  { poster: imageStatic3, name: "Napoleon" },
];

export const randomTechsSet1 = techs
  .sort(() => Math.random() - 0.5)
  .concat(techs.sort(() => Math.random() - 0.5))
  .concat(techs.sort(() => Math.random() - 0.5));

export const randomTechsSet2 = techs
  .sort(() => Math.random() - 0.5)
  .concat(techs.sort(() => Math.random() - 0.5))
  .concat(techs.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
