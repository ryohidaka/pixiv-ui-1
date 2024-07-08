import { faker } from "@faker-js/faker";
import { Illust, Image } from "@/types";
import { createRandomUser } from "..";

export function createRandomIllustContent(): Illust {
  const id = faker.string.uuid();
  const image = createRandomImage();
  const pageCount = faker.number.int({ min: 1, max: 99 });
  const title = faker.string.alphanumeric(5);
  const author = createRandomUser();

  return {
    id,
    image,
    pageCount,
    title,
    author,
  };
}

export function createRandomImage(): Image {
  return {
    src: faker.image.urlLoremFlickr(),
  };
}

export function createRandomPageCount(): number {
  return faker.number.int({ min: 1, max: 99 });
}
