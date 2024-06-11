export function getInitials(fullName) {
  // Split the full name into an array of words
  const words = fullName.trim().split(' ');

  // Check if there is at least one word
  if (words.length === 0) {
    return '';
  }

  // Get the first character of the first word
  const firstInitial = words[0][0];

  // Check if there is a second word (last name)
  const lastInitial = words.length > 1 ? words[words.length - 1][0] : '';

  // Return the initials
  return `${firstInitial}${lastInitial}`;
}