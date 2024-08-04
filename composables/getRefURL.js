export default function (src) {
  if (!src) return;
  const config = useRuntimeConfig();
  const storageBucket = config?.public?.storageBucket;
  const encodedSrc = src
    .split("/")
    .filter(t => t !== "")
    .join("%2F");
  // console.log("src :", src);
  return (
    `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/` +
    encodedSrc +
    "?alt=media"
  );
}
