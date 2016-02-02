//The rest of the code (in make-word-objects) uses the following dictionary. The other files are only here as an illustration of how I got from the original dictionary to the version you see below.

//This dictionary can be updated directly as needed. Every time I re-scrape Twitter, the file '4-makeWordObject.js' removes any new/unrecognized words — that is, any words not found in the dictionary below. However, I also wrote a function to keep track of all unrecognized words in a variable. I can print this to the console as needed.

 // As the list of unrecognized words grows,  I can choose to either (1) add them to the dictionary below (with their part of speech); (2) add them to the corrections list (if they're already in the dictionary and are only misspellings/tense differences); or (3) add them to the list of words to remove. In that sense, this dictionary will be dynamic/growing without being too large/clunky. (The original dictionary had 230k+ entries.)

//For adding new words, note that acceptable parts of speech include:
// ADJECTIVES: adjective | adjective-comparison
// ADVERBS: adverb;
// CONJUNCTIONS/INTERJECTIONS: conjuction | interjection |
// NOUNS: (singular or plural) noun | proper noun | mass noun | possessive noun
// PREPOSITIONS: preposition;
// VERBS: transitive verb | intransitive verb <--- intransitive verbs are a work in progress
// NOTE: you do not need to add pronouns/question words/quantifiers as all of these are already present in the dictionary.
