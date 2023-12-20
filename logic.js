const char = (str) => {
    let a = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
       a.push(str[i].toLowerCase())
      } else a.push(str[i].toUpperCase())
    }
    return a.join("");
  };
  
  console.log(char("helLo Every One"));
  console.log(char("AisWArYa"));
  console.log('Hi gooD MorniNg');