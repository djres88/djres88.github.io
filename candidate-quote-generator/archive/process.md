1. Pull words from twitter
 - scrape
 - add words as objects to candidate array:
 ```javascript
    var hillary = [ {word: "foreign"}, {word: "negotiate" ... }]  
    var donald = [ {word: "wall"}, {word: "deport"}...}];
```
2. Build a dictionary. Basic -- just {word: "word", part of speech: "part of speech".}
3. Transform dictionary to complete word-objects
4.


 - Use http://icon.shef.ac.uk/Moby/mpos.html as a starting point to add part of speech to each of the candidates' words. There are a few problems, though:
  * The above dictionary lists the parts of speech for each word *alphabetically* rather than according to the frequency of usage. Take the word "love", for example: "Love" is both a noun and a verb, but candidates use it overwhelmingly as a verb. Rarely are candidates talking about love as a concept; it's "I love this country" or "I love our democracy". The part of speech for the word "love" is coded IN ORDER as "nV", for noun and transitive verb (respectively), so the correct part of speech would be in position one (n). But for other words, such as "falling", the coded would be "av" — adjective and intransitive verb. In the case of "falling", though, candidates are mostly talking about "the falling price of oil" or "the falling middle class" or something; they're not saying "he is falling" or "I am falling" — and in any case, the present progressive tense is *already coded* as a different tense of the verb "to fall," which means the whole entry is redundant, anyway. For the word "falling", the correct part of speech is in position zero. There's really not a pattern I can see to automate that process.
  * Which brings up another point: gerunds and progressive tenses are coded as "verb (usu participle)", which doesn't work very well.
  * Candidates often use verbs in different tenses, or plural nouns, or proper nouns — and these are not found in the dictionary.
  * The list is way too big.
  * The list is pretty inaccurate, I found.
- I didn't see a way of avoiding some upfront manual work. I combined the candidates' actual words with the 5000 most common words  (https://en.wikipedia.org/wiki/Most_common_words_in_English) to build a mini dictionary, which DOES include plurals.From there,
