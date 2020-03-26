const isHasMajorVowelHarmony = (word) => {
  const vowels_array = ['a', 'e', 'o', 'ö', 'u', 'ü', 'ı', 'i'];
  const thick_vowels_array = ['a', 'o', 'u', 'ı'];
  const thin_vowels_array = ['e', 'ö', 'ü', 'i'];
  const word_array = word.split('');
  const first_wowel = word_array.find(x => vowels_array.includes(x));
  const isThick = thick_vowels_array.includes(first_wowel);
  if (isThick) {
    return word_array.every(x => !thin_vowels_array.includes(x));
  } else {
    return word_array.every(x => !thick_vowels_array.includes(x));
  }
}

export default isHasMajorVowelHarmony;
