//This is the dictionary that make-word-objects uses; I just included the original and associated functions to show how I made it.

//This dictionary can be updated directly as needed. The code is set up to print new/unrecognized words every time I scrape Twitter. These unrecognized words will be logged to the console, and from there I can choose to either (1) add them to this dictionary (with their part of speech), (2) add them to the corrections list (if they're already in the dictionary and are only misspellings/tense differences), or (3) add them to the list of words to remove.

// Here's the final array of acceptable words with their part of speech. For adding new words, note that acceptable parts of speech include:
// ADJECTIVES: adjective | adjective-comparison
// ADVERBS: adverb;
// CONJUNCTIONS/INTERJECTIONS: conjuction | interjection |
// NOUNS: (singular or plural) noun | proper noun | mass noun | possessive noun
// PREPOSITIONS: preposition;
// VERBS: transitive verb | intransitive verb <--- intransitive verbs are a work in progress
// NOTE: you do not need to add pronouns/question words/quantifiers as all of these are already present in the dictionary.
