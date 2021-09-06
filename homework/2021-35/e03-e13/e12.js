function isPalindrome(s,i) {
    return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
   }
  var readlineSync = require("readline-sync");
  
  if(isPalindrome(readlineSync.question("Enter a word: "))){
      console.log('It is a palindrome!')
  }
  else{
      console.log('Not a palindrome.')
  }

  