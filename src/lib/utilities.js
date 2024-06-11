export function getInitials(fullName) {
  // Split the full name into an array of words
  const words = fullName.trim().split(" ");

  // Check if there is at least one word
  if (words.length === 0) {
    return "";
  }

  // Get the first character of the first word
  const firstInitial = words[0][0];

  // Check if there is a second word (last name)
  const lastInitial = words.length > 1 ? words[words.length - 1][0] : "";

  // Return the initials
  return `${firstInitial}${lastInitial}`;
}

export async function dynamicBlurDataUrl(url) {
  const base64str = await fetch(url).then(async (res) =>
    Buffer.from(await res.arrayBuffer()).toString("base64"),
  );

  const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='1' />
      </filter>

      <image preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%' 
      href='data:image/avif;base64,${base64str}' />
    </svg>
  `;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
}
