// compare two string params

const checkAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const obj = {};

  for (let letter of str1) {
    obj[letter] = obj[letter] ? obj[letter] + 1 : 1;
  }

  for (let letter of str2) {
    if (!obj[letter]) {
      return false;
    }

    obj[letter] = obj[letter] - 1;
  }

  console.log(true);

  return true;
};

checkAnagrams('github', 'hitbug');
