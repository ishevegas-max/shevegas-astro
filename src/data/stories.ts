import type { ImageMetadata } from "astro";
import house from "../assets/house.jpeg";
import marquee from "../assets/marquee.jpg";
import surf from "../assets/dairyland-surf.jpeg";
import night from "../assets/after-dark.jpeg";
import lake from "../assets/lake.jpeg";
import archive from "../assets/archive.jpeg";
import vertical from "../assets/life-is-vertical.jpeg";
import homeColors from "../assets/home-colors.jpeg";
import bornHere from "../assets/born-here.jpeg";
import ride from "../assets/no-ordinary-ride.jpeg";
import waterDecides from "../assets/water-decides.jpeg";
import pullTogether from "../assets/pull-together.jpeg";
import fireOnWater from "../assets/fire-on-water.jpeg";
import ancientShore from "../assets/ancient-shore.jpeg";
import writtenInStone from "../assets/written-in-stone.jpeg";
import sammy from "../assets/sammy-was-here.jpeg";

export type Story = {
  slug: string;
  eyebrow: string;
  title: string;
  invitation: string;
  body: string[];
  image: ImageMetadata;
  alt: string;
  fit?: "cover" | "contain";
  tone: "red" | "gold" | "blue" | "black";
};

export const stories: Story[] = [
  {
    slug: "inside-shevegas",
    eyebrow: "THE FRONT DOOR",
    title: "Walk into SheVegas.",
    invitation: "The bamboo floor. The hand-painted ceiling. The place where the city became a world.",
    body: [
      "SheVegas is not a logo pasted onto Sheboygan. It is a place Michael Brunette made and lived inside.",
      "This room is the opening argument: local history can be serious without surrendering color, humor, memory or nerve.",
    ],
    image: house,
    alt: "The SheVegas house interior, with bamboo flooring and a hand-painted Fabulous SheVegas sign across the ceiling.",
    tone: "red",
  },
  {
    slug: "fabulous-shevegas",
    eyebrow: "THE MARK",
    title: "Fabulous is not optional.",
    invitation: "The sign that turns a Wisconsin city into SheVegas.",
    body: [
      "The Fabulous SheVegas marquee is the publication seal. It returns throughout the archive without swallowing the work around it.",
      "Everything beyond the mark is allowed to change. The identity does not.",
    ],
    image: marquee,
    alt: "The Fabulous SheVegas marquee brand artwork.",
    fit: "contain",
    tone: "gold",
  },
  {
    slug: "dairyland-surf",
    eyebrow: "JUMP IN",
    title: "Dairyland Surf.",
    invitation: "Sheboygan is at its best when the whole city becomes the picture.",
    body: [
      "The archive is full of moments that could only have happened here: water, costume, neighborhood invention and glorious public weirdness.",
      "These photographs are not filler. They are the publication.",
    ],
    image: surf,
    alt: "A handmade Dairyland Surf float and participants in a Sheboygan parade.",
    tone: "blue",
  },
  {
    slug: "after-dark",
    eyebrow: "AFTER DARK",
    title: "The city changes color.",
    invitation: "Rooms, music, people and the part of Sheboygan that stayed awake.",
    body: [
      "SheVegas remembers the rooms as they felt, not as a tourism listing described them.",
      "Night belongs beside the council chamber and the lake. It is part of the same civic memory.",
    ],
    image: night,
    alt: "A crowded Sheboygan nightlife scene photographed in saturated color.",
    tone: "black",
  },
  {
    slug: "the-lake",
    eyebrow: "THE EASTERN WALL",
    title: "Everything faces the water.",
    invitation: "The lake is geography, weather, playground, economy and witness.",
    body: [
      "The lakefront is not scenery placed behind Sheboygan. It determines how the city moves and how it imagines itself.",
      "The visual archive keeps the water human: swimmers, surfers, harbor work, storms and ordinary summer afternoons.",
    ],
    image: lake,
    alt: "A child running at the edge of Lake Michigan in Sheboygan.",
    tone: "blue",
  },
  {
    slug: "life-is-vertical",
    eyebrow: "JUMP IN",
    title: "Life Is Vertical.",
    invitation: "The quickest route through Sheboygan is sometimes straight up.",
    body: [
      "A single frame can carry the whole instruction: leave the ground, trust the moment and make the ordinary landscape behave differently.",
      "SheVegas begins where explanation gives way to motion.",
    ],
    image: vertical,
    alt: "A person climbing a tall pole against a bright blue Sheboygan sky.",
    tone: "blue",
  },
  {
    slug: "home-colors",
    eyebrow: "HOME COLORS",
    title: "Live inside the palette.",
    invitation: "The brand did not arrive in a guide. It grew across the walls.",
    body: [
      "Color inside SheVegas is lived rather than applied: bright surfaces, handmade objects, clothes, light and rooms that refuse beige surrender.",
      "The house is both studio and evidence—the visual system existed before the website tried to describe it.",
    ],
    image: homeColors,
    alt: "Michael Brunette inside a vivid, art-filled SheVegas room.",
    tone: "red",
  },
  {
    slug: "born-here",
    eyebrow: "BORN HERE",
    title: "The archive has a pulse.",
    invitation: "A city is the people who remember one another before the caption was written.",
    body: [
      "The human archive holds what official timelines cannot: faces, gestures, friendships and the changing distance between childhood and home.",
      "Names and dates remain attached only when the record or Michael's first-hand account supports them.",
    ],
    image: bornHere,
    alt: "Two young Sheboyganites photographed together against the lake.",
    tone: "gold",
  },
  {
    slug: "no-ordinary-ride",
    eyebrow: "NO ORDINARY RIDE",
    title: "Parked under neon.",
    invitation: "A red car, a dark room and the version of town that appears after closing time.",
    body: [
      "SheVegas photographs the city as atmosphere as well as record. Machines, storefront light and midnight color become their own civic landscape.",
      "No travel brochure gets to flatten this place into daylight.",
    ],
    image: ride,
    alt: "A red vintage car glowing under neon light in Sheboygan at night.",
    tone: "black",
  },
  {
    slug: "the-water-decides",
    eyebrow: "THE WATER DECIDES",
    title: "Meet the lake on its terms.",
    invitation: "Before the plan, the slogan or the development rendering, there is water.",
    body: [
      "The lake changes the light, the weather, the work and the risk. Nobody gets to treat it as a decorative blue strip behind a project.",
      "The photograph comes first because the water is the first fact.",
    ],
    image: waterDecides,
    alt: "A surfer inside a vivid green-blue wave on Lake Michigan.",
    tone: "blue",
  },
  {
    slug: "pull-together",
    eyebrow: "PULL TOGETHER",
    title: "One boat. Many clocks.",
    invitation: "The picture works because everybody has to move at once.",
    body: [
      "Public life sometimes becomes beautifully literal: a crowded boat only moves when people find a shared rhythm.",
      "SheVegas keeps the faces, color and effort in the frame.",
    ],
    image: pullTogether,
    alt: "A crowded dragon boat crew paddling together on the Sheboygan waterfront.",
    tone: "red",
  },
  {
    slug: "fire-on-the-water",
    eyebrow: "FIRE ON THE WATER",
    title: "The harbor holds the sun.",
    invitation: "Some evenings make their own marquee.",
    body: [
      "Boats and harbor structures turn into silhouettes while the western light burns through the scene.",
      "The archive preserves the ordinary miracle without needing to improve it.",
    ],
    image: fireOnWater,
    alt: "A deep red sunset behind boats in the Sheboygan harbor.",
    tone: "red",
  },
  {
    slug: "ancient-shore",
    eyebrow: "ANCIENT SHORE",
    title: "Read what the water left.",
    invitation: "Stone, fish, feather and time share the same edge.",
    body: [
      "The close view matters. The shoreline is built from small evidence as much as sweeping horizons.",
      "SheVegas looks down, gets close and keeps what most people step past.",
    ],
    image: ancientShore,
    alt: "Fish, feathers and layered shoreline stone at the edge of Lake Michigan.",
    tone: "gold",
  },
  {
    slug: "written-in-stone",
    eyebrow: "WRITTEN IN STONE",
    title: "Names outlast the meeting.",
    invitation: "Public memory becomes physical when somebody decides it should remain.",
    body: [
      "A plaque is a claim about what deserves permanence. The archive can preserve the object while still asking who selected the names and story.",
      "Evidence begins with seeing the complete inscription.",
    ],
    image: writtenInStone,
    alt: "A public memorial plaque photographed in Sheboygan.",
    tone: "black",
  },
  {
    slug: "sammy-was-here",
    eyebrow: "SAMMY WAS HERE",
    title: "The crowd remembers.",
    invitation: "Presence is a kind of public record.",
    body: [
      "A visual publication can hold a person inside the larger event without turning them into background texture.",
      "The photograph stays first. Context and names follow the evidence attached to the frame.",
    ],
    image: sammy,
    alt: "A SheVegas archive photograph of Sammy within a public crowd.",
    tone: "red",
  },
  {
    slug: "whole-archive",
    eyebrow: "THE WHOLE ARCHIVE",
    title: "Keep the tape.",
    invitation: "Photographs, films, documents, voices and corrections—kept together.",
    body: [
      "The fun lives in front. The record remains underneath it: source documents, first-hand photographs, audio, video and visible corrections.",
      "Nothing important disappears merely because the next beautiful thing arrives.",
    ],
    image: archive,
    alt: "A Sheboygan harbor view from Michael Brunette's visual archive.",
    tone: "gold",
  },
];

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}
