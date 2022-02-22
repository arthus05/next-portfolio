import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = sanityClient({
  projectId: "788vsxio",
  dataset: "production",
  apiVersion: "2022-02-20",
  useCdn: true,
  token:
    "skEDxlsWaiEg9se80dvGxEuvNpW5g46YZDZEol9f17V7iVTl5iLMKwz5DRbIssFUdVrYMtWs9NOBvoUl8aGsgs0Nkmjy0cynxGNV85Ngny4dV1dujG4b98Z4xdGKuxLlHdP3JOIsft9FTFLDq2WXZ1Ol9fKQNexIYTcQK960Raxw4sQOyGQI",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
