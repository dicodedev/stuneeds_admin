export function removeHTMLTags(htmlString) {
  console.log(htmlString);

  htmlString = htmlString.replaceAll("<br/>", "\n\n");

  // Create a new DOMParser instance
  const parser = new DOMParser();
  // Parse the HTML string
  const doc = parser.parseFromString(htmlString, "text/html");
  // Extract text content
  const textContent = doc.body.textContent || "";
  // Trim whitespace
  return textContent.trim();
}
