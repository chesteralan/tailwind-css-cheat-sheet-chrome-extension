export const isInPopup = () => {
  return typeof chrome !== "undefined" && chrome.extension
    ? chrome.extension.getViews({ type: "popup" }).length > 0
    : null;
};
