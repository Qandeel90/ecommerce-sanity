import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "dfv567e4",
  dataset: "production",
  apiVersion: "2022-05-21",
  useCdn: true,
  token: process.env.NEXT_SANITY_PUBLIC_TOKEN,
});
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
