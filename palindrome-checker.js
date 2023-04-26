function palindrome(str) {
  const formatted = str.replace(/[^a-z0-9]/gi, "").toLowerCase()
  for(var i = 0, len = formatted.length - 1; i < len/2; i++) {
    if (formatted[i] !== formatted[len - i]) {
      return false
    }
  }
  return true;
}
