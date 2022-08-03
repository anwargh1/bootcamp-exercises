function medianChar(string){
    let word = string.split("");
    console.log(word)
    word.sort();
    console.log(word)
    return word[word.length / 2 -1];
 
}
  const str = 'question';
  console.log(medianChar(str));

