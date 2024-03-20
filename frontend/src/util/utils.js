import axios from "axios";

export function cleanText(text) {
  // Remove leading and trailing white space and double quotes
  text = text
    .replace(/"/g, "")
    .replace(/&amp;/g, "and")
    .replace(/\\n/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
  return text;
}

export function getFilenameFromUrl(url) {
  const parts = url.split("/");
  const filename = parts[parts.length - 1];
  return filename;
}

export function stripTags(html) {
  return html.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi, "");
}

export const uploadImg = async (selectedImage) => {
  try {
    console.log("hi");
    if (selectedImage) {
      const presetKey = "sxbyje53";
      const cloudName = "dqesb3ey9";
      const data = new FormData();
      data.append("file", selectedImage);
      data.append("upload_preset", presetKey);

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        data
      );
      console.log(res.data.secure_url);
      return res.data.secure_url;
    }
  } catch (error) {
    console.log(error);
  }
};
