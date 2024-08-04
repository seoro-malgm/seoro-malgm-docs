import { joinURL } from "ufo";
import type { ProviderGetImage } from "@nuxt/image";
import { createOperationsGenerator } from "#image";

const operationsGenerator = createOperationsGenerator();

export const getImage: ProviderGetImage = (
  src,
  { modifiers = {}, baseURL } = {}
) => {
  if (!baseURL) {
    // also support runtime config
    baseURL = useRuntimeConfig().public.storageBucket;
  }

  const operations = operationsGenerator(modifiers);

  // URL 인코딩을 적용하여 '/'를 '%2F'로 변환
  const encodedSrc = src
    .split("/")
    .filter(t => t !== "")
    .join("%2F");

  return {
    url: joinURL(baseURL, encodedSrc + "?alt=media")
  };
};
