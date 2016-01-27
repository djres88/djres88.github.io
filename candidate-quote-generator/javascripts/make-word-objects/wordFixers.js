//Contains lists of: (1) words to correct — an array of arrays, where array[n][0] is the old word and array[n][1] is the new word; (2) words to remove; and (3) articles for each noun.
var corrections, removals, articles;

//Words to edit from vocabulary (due to misspellings, change of tense, etc.)
corrections = [
  ["‘cataclysmic’", "cataclysmic"],
  ["\"attacking", "attack"],
  ["\"bush\"", "Bush"],
  ["\"going", "go"],
  ["\"i", "i"],
  ["\"isis", "ISIS"],
  ["\"natural", "natural"],
  ["\"schlonged\"", "schlong"],
  ["\"stiff\"", "stiff"],
  ["\"stinky\"", "stinky"],
  ["\"ted", "Ted Cruz"],
  ["\"that", "that"],
  ["\"the", "the"],
  ["\"we", "we"],
  ["\"why", "why"],
  ["\"wrong", "wrong"],
  ["“banning", "ban"],
  ["“cured”", "cure"],
  ["“cut", "cut"],
  ["“dare", "dare"],
  ["“equal", "equal"],
  ["“everything", "everything"],
  ["“palin’s'", "Sarah Palin's"],
  ["“she", "she"],
  ["“today", "today"],
  ["$100000", "$100,000"],
  ["$13000", "$13,000"],
  ["$4", "$4"],
  ["12yearold", "12-year-old"],
  ["2pm", "at 2pm"],
  ["36%", "36% of"],
  ["50year", "50-year"],
  ["60%", "60% of"],
  ["62%", "62% of"],
  ["6yearold", "6-year-old"],
  ["75%", "75% of"],
  ["94%", "94% of"],
  ["abandoning", "abandon"],
  ["abc", "ABC"],
  ["abused", "abuse"],
  ["aca", "ACA"],
  ["accumulating", "accumulate"],
  ["acted", "act"],
  ["acting", "act"],
  ["ad:", "ad"],
  ["addressing", "address"],
  ["adelson", "Sheldon Adelson"],
  ["admitted", "admit"],
  ["affording", "afford"],
  ["afghanistan", "Afghanistan"],
  ["african", "African-American"],
  ["africanamerican", "African-American"],
  ["agree:", "agree"],
  ["agreed", "agree"],
  ["aig", "AIG"],
  ["airbus", "Airbus"],
  ["Al-Shabbab", "Al-Shabbab"],
  ["alabama", "Alabama"],
  ["albright", "Madeline Albright"],
  ["all:", "all"],
  ["allowing", "allow"],
  ["allows", "allow"],
  ["alltime", "all-time"],
  ["alshabaab", "Al-Shabaab"],
  ["alzheimer's", "Alzheimer's Disease"],
  ["alzheimer's", "Alzheimer's Disease"],
  ["alzheimer’s", "Alzheimer's Disease"],
  ["amendment]", "amendment"],
  ["america'", "America's"],
  ["america's", "America's"],
  ["americans", "Americans"],
  ["americans", "Americans"],
  ["americans'", "Americans'"],
  ["ames", "Ames, Iowa"],
  ["amherst", "Amherst"],
  ["amnesty:", "amnesty"],
  ["announced", "announce"],
  ["answering", "answer"],
  ["anticipated", "anticipate"],
  ["apology…", "apology"],
  ["appears", "appear"],
  ["applies", "apply"],
  ["appreciated", "appreciate"],
  ["april", "April"],
  ["arabia", "Saudi Arabia"],
  ["arguing", "argue"],
  ["arrested", "arrest"],
  ["arrived", "arrive"],
  ["asked", "ask"],
  ["asked:", "ask"],
  ["asking", "ask"],
  ["asking", "ask"],
  ["asking", "ask"],
  ["atm", "ATM"],
  ["attacked", "attack"],
  ["attacking", "attack"],
  ["attacks", "attack"],
  ["attempts", "attempt"],
  ["autism:", "autism"],
  ["baby's", "baby's"],
  ["babyand", "baby"],
  ["bailed", "bailed out"],
  ["balancing", "balance"],
  ["barack", "Barack Obama"],
  ["became", "become"],
  ["becomes", "become"],
  ["begged", "beg"],
  ["begins", "begin"],
  ["begins", "begin"],
  ["begun", "begin"],
  ["behar", "Joy Behar"],
  ["behindthescenes", "behind-the-scenes"],
  ["believes", "believe"],
  ["bernie", "Bernie Sanders"],
  ["bernie's", "Bernie's"],
  ["bernie's", "Bernie's"],
  ["bernie’s", "Bernie Sanders'"],
  ["better”", "better"],
  ["biden", "Joe Biden"],
  ["big:", "big"],
  ["bigtofail”", "too-big-to-fail"],
  ["biloxi", "Biloxi"],
  ["birmingham", "Birmingham, AL"],
  ["blew", "blow"],
  ["bluffs", "bluff"],
  ["boldness”", "boldness"],
  ["box”", "box"],
  ["buckley", "William F. Buckley"],
  ["buffett", "Warren Buffett"],
  ["bullying”", "bullying"],
  ["burlington", "Burlington, VT"],
  ["bush", "Jeb Bush"],
  ["call:", "call"],
  ["called", "call"],
  ["came", "come"],
  ["campaign:", "campaign"],
  ["campaign:", "campaign"],
  ["canada", "Canada"],
  ["canadian", "Canadian"],
  ["candidateon", "candidate"],
  ["candidato", "el candidato"],
  ["captures", "capture"],
  ["capturing", "capture"],
  ["carewithout", "care"],
  ["carolina", "South Carolina"],
  ["carolina:", "South Carolina"],
  ["carolinians", "Carolinians"],
  ["carrying", "carry"],
  ["carson", "Ben Carson"],
  ["causedstupidity", "stupidity"],
  ["cbs", "CBS"],
  ["cedar", "Cedar Falls, Iowa"],
  ["celebratingbill", "celebrate"],
  ["ceo", "CEO"],
  ["ceos", "CEOs"],
  ["changing", "change"],
  ["charges", "charge"],
  ["charleston", "Charleston, SC"],
  ["cheatswith", "cheat"],
  ["checked", "check"],
  ["checks", "check"],
  ["cheering", "cheer"],
  ["chestbeating", "chest-beating"],
  ["china", "China"],
  ["choice:", "choice"],
  ["choiceand", "choice"],
  ["choosing", "choose"],
  ["chozick", "Amy Chozick"],
  ["citi", "Citi"],
  ["citigroup", "Citigroup"],
  ["citizens", "Citizens United"],
  ["citizens", "Citizens United"],
  ["class:", "class"],
  ["clear:", "clear"],
  ["clinton", "Hillary Clinton"],
  ["clinton's", "Hillary Clinton's"],
  ["clinton”", "Hillary Clinton"],
  ["closing", "close"],
  ["cnn", "CNN"],
  ["cnn/wmur", "CNN"],
  ["coalburning", "coal-burning"],
  ["collecting", "collect"],
  ["columbia", "Columbia, SC"],
  ["commander", "Commander in Chief"],
  ["commander:", "Commander in Chief"],
  ["commander:", "Commander in Chief"],
  ["commanderinchief", "Commander in Chief"],
  ["commercialsboring", "boring"],
  ["commonsense", "common-sense"],
  ["compete”", "compete"],
  ["competing", "compete"],
  ["complains", "complain"],
  ["concentrationbut", "concentration"],
  ["confirm:", "confirm"],
  ["confirming", "confirm"],
  ["confirms", "confirm"],
  ["confirms:", "confirm"],
  ["congress", "Congress"],
  ["connect:", "connect"],
  ["continues", "continue"],
  ["controlled", "control"],
  ["correctness", "political correctness"],
  ["costeffective", "cost-effective"],
  ["costofliving", "cost of living"],
  ["counterproductive", "counter-productive"],
  ["counting", "count"],
  ["country:", "country"],
  ["countryare", "country"],
  ["court", "Supreme Court"],
  ["covers", "cover"],
  ["created", "create"],
  ["creating", "create"],
  ["criminalization", "climinalization of"],
  ["cruz", "Ted Cruz"],
  ["cruz'", "Ted Cruz's"],
  ["cuts", "tax cuts"],
  ["daughterread", "daughter"],
  ["dc", "Washington, D.C."],
  ["debbie", "Debbie Wasserman Schultz"],
  ["decided", "decide"],
  ["defeated", "defeat"],
  ["defeating", "defeat"],
  ["defecting", "defect"],
  ["defending", "defend"],
  ["defunded", "defund"],
  ["degraded", "degrade"],
  ["demanded", "demand"],
  ["demands", "demand"],
  ["democrat", "Democrat"],
  ["democrats", "Democrats"],
  ["democrats'", "Democrats'"],
  ["demonizing", "demonize"],
  ["demonstrated", "demonstrate"],
  ["denying", "deny"],
  ["departing", "depart"],
  ["deported", "deport"],
  ["deporting", "deport"],
  ["deserved", "deserve"],
  ["destroyed", "destroy"],
  ["destroying", "destroy"],
  ["destroys", "destroy"],
  ["detroit", "Detroit"],
  ["dictating", "dictate"],
  ["did", "do"],
  ["died", "die"],
  ["discriminating", "discriminate"],
  ["discussing", "discuss"],
  ["dnc", "DNC"],
  ["doddfrank", "Dodd-Frank"],
  ["does", "do"],
  ["dole", "Bob Dole"],
  ["dominated", "dominate"],
  ["donald", "Donald Trump"],
  ["donald", "Donald Trump"],
  ["donated", "donate"],
  ["dreamed", "dream"],
  ["dreams:", "dreams"],
  ["dropped", "drop"],
  ["drudge", "Drudge Report"],
  ["earned", "earn"],
  ["eastthat's", "Middle East"],
  ["economía", "la economía"],
  ["economyand", "economy"],
  ["elected", "elect"],
  ["electing", "elect"],
  ["ellen", "The Ellen Show"],
  ["embarrasses", "embarrass"],
  ["enacting", "enact"],
  ["end;", "end"],
  ["endorsed", "endorse"],
  ["endorses", "endorse"],
  ["endorsing", "endorse"],
  ["ends", "end"],
  ["enjoyed", "enjoy"],
  ["enjoying", "enjoy"],
  ["equalityand", "equality"],
  ["establishing", "establish"],
  ["estudiante", "estudiantes"],
  ["european", "European"],
  ["everyonenot", "everyone"],
  ["excluding", "exclude"],
  ["expected", "expect"],
  ["expectedwe", "expect"],
  ["explains", "explain"],
  ["facebook", "Facebook"],
  ["facing", "face"],
  ["failed", "fail"],
  ["fails", "fail"],
  ["family:", "family"],
  ["feeling's", "feeling"],
  ["filed", "file"],
  ["filing", "file"],
  ["fired", "fire"],
  ["flashback:", "flashback"],
  ["fleeing", "flee"],
  ["flint", "Flint's water"],
  ["flint's", "Flint's water"],
  ["flint's", "Flint's water problem"],
  ["flint’s", "Flint's water"],
  ["florida", "Florida"],
  ["force:", "force"],
  ["forgot", "forget"],
  ["forprofit", "for-profit"],
  ["forwardor", "forward"],
  ["fought", "fight"],
  ["founded", "found"],
  ["fox", "Fox News"],
  ["franklin", "Franklin Roosevelt"],
  ["fry", "fish fry"],
  ["fuels", "fuel"],
  ["fulltime", "full-time"],
  ["funding", "fund"],
  ["funds", "fund"],
  ["garrett", "Major Garrett"],
  ["gave", "give"],
  ["georgia", "Georgia"],
  ["geraldo", "Geraldo Rivera"],
  ["germany", "Germany"],
  ["gets", "get"],
  ["gets", "get"],
  ["getting", "get"],
  ["getting", "get"],
  ["getting", "get"],
  ["gives", "give"],
  ["glasssteagall", "Glass-Steagall"],
  ["glenn", "Glenn Beck"],
  ["godgiven", "God-given"],
  ["goldberg", "Whoopi Goldberg"],
  ["goldman", "Goldman Sachs"],
  ["gop", "GOP"],
  ["gopville", "GOPville"],
  ["got", "get"],
  ["governmentunless", "government"],
  ["graduated", "graduate"],
  ["graham", "Lindsey Graham"],
  ["grammyaward", "Grammy Award"],
  ["grandmaplus", "grandma"],
  ["greenberg", "Hank Greenberg"],
  ["guaranteed", "guarantee"],
  ["guaranteeing", "guarantee"],
  ["guarantees", "guarantee"],
  ["guerra", "la guerra"],
  ["guns”", "guns"],
  ["hampshire", "New Hampshire"],
  ["hannity", "Sean Hannity"],
  ["happened", "happen"],
  ["happens", "happen"],
  ["hardworking", "hard-working"],
  ["harmed", "harm"],
  ["having", "have"],
  ["headed", "head"],
  ["headtohead", "head-to-head"],
  ["healed", "heal"],
  ["health:", "health"],
  ["healthbut", "health"],
  ["hedge", "hedge fund"],
  ["heidi", "Heidi Cruz"],
  ["help:", "help"],
  ["helped", "help"],
  ["here:", "here"],
  ["here:", "here"],
  ["highquality", "high-quality"],
  ["highspeed", "high-speed"],
  ["hijacked", "hijack"],
  ["hillary", "Hillary Clinton"],
  ["hillary:", "Hillary"],
  ["hillary's", "Hillary's"],
  ["hillary’s", "Hillary Clinton's"],
  ["hillaryclinton", "Hillary Clinton"],
  ["hilton", "Hilton Head, SC"],
  ["historyi", "history"],
  ["historyor", "history"],
  ["honored", "honor"],
  ["hosting", "host"],
  ["house:", "house"],
  ["house:", "White House"],
  ["humiliated", "humiliate"],
  ["hurting", "hurt"],
  ["ia", "Iowa"],
  ["illinois", "Illinois"],
  ["illustrated", "illustrate"],
  ["imposing", "impose"],
  ["incarcerationreform", "incarceration reform"],
  ["includes", "include"],
  ["including", "include"],
  ["increased", "increase"],
  ["insidethebeltway", "inside-the-beltway"],
  ["inspiration:", "inspiration"],
  ["inspired", "inspire"],
  ["instagram", "Instagram"],
  ["internet", "Internet"],
  ["interviewed", "interview"],
  ["interviewed", "interview"],
  ["introduced", "introduce"],
  ["invading", "invade"],
  ["invented", "invent"],
  ["iowa", "Iowa"],
  ["iowans", "Iowans"],
  ["iowans:", "Iowans"],
  ["iran", "Iran"],
  ["is…", "is"],
  ["isis", "ISIS"],
  ["islam", "Islam"],
  ["islamic", "Islamic"],
  ["israel", "Israel"],
  ["issued", "issue"],
  ["january", "January"],
  ["jeb", "Jeb Bush"],
  ["jeb's", "Jeb Bush's"],
  ["jobcreating", "job-creating"],
  ["joined", "join"],
  ["joining", "join"],
  ["joins", "join"],
  ["joins", "join"],
  ["jr:", "Martin Luther King, Jr."],
  ["judgmentyou", "judgment"],
  ["justices", "Supreme Court Justices"],
  ["karl", "Karl Rove"],
  ["kept", "keep"],
  ["kicked", "kick"],
  ["kicks", "kick"],
  ["kidsnot", "kids"],
  ["killed", "kill"],
  ["killed", "kill"],
  ["king's", "Martin Luther King's"],
  ["knew", "know"],
  ["knocked", "knock"],
  ["knocking", "knock"],
  ["know:", "know"],
  ["knows", "know"],
  ["knows", "know"],
  ["koch", "the Koch brothers"],
  ["kwanzaa", "Kwanzaa"],
  ["lack", "a lack of"],
  ["landand", "land"],
  ["launched", "launch"],
  ["laurence", "Laurence Tribe"],
  ["law”", "law"],
  ["leadershipnot", "leadership"],
  ["leadpoisoned", "lead-poisoned"],
  ["leadpoisoned", "lead-poisoned"],
  ["leadpoisoning", "lead poisoning"],
  ["leads", "lead"],
  ["learned", "learn"],
  ["lebanon", "Lebanon"],
  ["led", "lead"],
  ["leftwing", "left-wing"],
  ["legacy:", "legacy"],
  ["legacyand", "legacy"],
  ["lending", "lend"],
  ["letting", "let"],
  ["lgbt", "LGBT"],
  ["lied", "lie"],
  ["lifting", "lift"],
  ["live:", "live"],
  ["lobbyperiod", "lobby"],
  ["looking", "look"],
  ["looking", "look"],
  ["looks", "look"],
  ["loserstrue", "losers"],
  ["loved", "love"],
  ["loves", "love"],
  ["lowell", "Lowell, Mass"],
  ["lowering", "lower"],
  ["lowincome", "low-income"],
  ["lowincome", "low-income"],
  ["luther", "Martin Luther King"],
  ["makeorbreak", "make-or-break"],
  ["makes", "make"],
  ["man”", "man"],
  ["marco", "Marco Rubio"],
  ["masacre", "massacre"],
  ["massachusetts", "Massachussetts"],
  ["matterit", "matter"],
  ["matters", "matter"],
  ["matters:", "matter"],
  ["may", "May"],
  ["mccain", "John McCain"],
  ["medicaid", "Medicaid"],
  ["medicare", "Medicare"],
  ["medicareforall", "Medicare for all"],
  ["merch", "merch"],
  ["messbig", "mess"],
  ["met", "meet"],
  ["mexicans", "Mexicans"],
  ["mexicans", "Mexicans"],
  ["michigan", "Michigan"],
  ["middleclass", "middle-class"],
  ["misled", "mislead"],
  ["missed", "miss"],
  ["mississippi", "Mississippi"],
  ["mitt", "Mitt Romney"],
  ["mlk", "MLK"],
  ["mlk's", "MLK's"],
  ["mlk’s", "MLK's"],
  ["monday", "Monday"],
  ["moneyit's", "money"],
  ["mongering", "fear-mongering"],
  ["msnbc", "MSNBC"],
  ["muslim", "Muslim"],
  ["muslims", "Muslims"],
  ["muslims", "Muslims"],
  ["nafta", "NAFTA"],
  ["naming", "name"],
  ["nastytowards", "nasty"],
  ["nation:", "nation"],
  ["nations", "United Nations"],
  ["needed", "need"],
  ["nevada", "Nevada"],
  ["nevadans", "Nevadans"],
  ["neverending", "never-ending"],
  ["news:", "news"],
  ["nh", "NH"],
  ["nh", "NH"],
  ["ni", "New Jersey"],
  ["nightmarejon", "nightmare"],
  ["nonprofit", "non-profit"],
  ["nonsubstantive", "non-substantive"],
  ["nonunion", "non-union"],
  ["now:", "now"],
  ["npr's", "NPR's"],
  ["nra's", "NRA"],
  ["nra’s", "NRA's"],
  ["nsa", "NSA"],
  ["numbers:", "numbers"],
  ["ny", "New York"],
  ["nyjets", "NY Jets"],
  ["obama", "Obama"],
  ["obama", "Obama"],
  ["oklahoma", "Oklahoma"],
  ["onetenth", "one-tenth"],
  ["online:", "online"],
  ["oped", "Op-Ed"],
  ["operating", "operate"],
  ["opposed", "oppose"],
  ["opposes", "oppose"],
  ["orwellian", "Orwellian"],
  ["out”", "out"],
  ["outraged", "outrage"],
  ["oval", "Oval Office"],
  ["overflowing", "overflow"],
  ["overruns", "overrun"],
  ["overturned", "overturn"],
  ["overturning", "overturn"],
  ["owed", "owe"],
  ["owned", "own"],
  ["owns", "own"],
  ["pac", "SuperPAC"],
  ["paid", "pay"],
  ["palin's", "Sarah Palin's"],
  ["palin's", "Sarah Palin's"],
  ["panelsand", "panels"],
  ["panned", "pan"],
  ["papersnot", "papers"],
  ["paying", "pay"],
  ["pays", "pay"],
  ["peoplepowered", "people-powered"],
  ["performing", "perform"],
  ["peru", "Peru"],
  ["phoenix", "Phoenix"],
  ["photos:", "photos"],
  ["picked", "pick"],
  ["plagued", "plague"],
  ["played", "play"],
  ["playing", "play"],
  ["plays", "play"],
  ["pledged", "pledge"],
  ["plunging", "plunge"],
  ["poisoning", "poison"],
  ["politician…", "politician"],
  ["polltrump", "poll"],
  ["poor”", "poor"],
  ["possessing", "possess"],
  ["postdebate", "post-debate"],
  ["potus", "POTUS"],
  ["powered", "power"],
  ["practicing", "practice"],
  ["presidencyit’s", "presidency"],
  ["president:", "president"],
  ["preventing", "prevent"],
  ["preview:", "preview"],
  ["problemas", "los problemas"],
  ["progress:", "progress"],
  ["progressnot", "progress"],
  ["promise:", "promise"],
  ["prosecuted", "prosecute"],
  ["protesting", "protest"],
  ["provides", "provide"],
  ["providing", "provide"],
  ["pushes", "push"],
  ["puts", "put"],
  ["putting", "put"],
  ["quinnipiac", "Quinnipiac Poll"],
  ["quo", "status quo"],
  ["raising", "raise"],
  ["rallying", "rally"],
  ["ramadi", "Ramadi"],
  ["rand", "Rand Paul"],
  ["rated", "rate"],
  ["reached", "reach"],
  ["read:", "read"],
  ["realizes", "realize"],
  ["received", "receive"],
  ["received:", "receive"],
  ["receiving", "receive"],
  ["recognized", "recognize"],
  ["recorded", "record"],
  ["recruiting", "recruit"],
  ["reestablishing", "reestablish"],
  ["referring", "refer"],
  ["reforming", "reform"],
  ["refused", "refuse"],
  ["refuses", "refuse"],
  ["regardless", "regardless of"],
  ["regulating", "regulate"],
  ["relaxing", "relaxing"],
  ["released", "release"],
  ["relieved", "relieve"],
  ["religion;", "religion"],
  ["remembered", "remember"],
  ["reminded", "remind"],
  ["removed", "remove"],
  ["removing", "remove"],
  ["reno", "Reno, NV"],
  ["renounced", "renounce"],
  ["repealed", "repeal"],
  ["repealing", "repeal"],
  ["reported", "report"],
  ["representatives", "House of Representatives"],
  ["represented", "represent"],
  ["representing", "represent"],
  ["republican", "Republican"],
  ["republicanled", "Republican-led"],
  ["republicans", "Republicans"],
  ["responders", "first responders"],
  ["responding", "respond"],
  ["resurrecting", "resurrect"],
  ["retires", "retire"],
  ["retiring", "retire"],
  ["returned", "return"],
  ["reuters", "Reuters"],
  ["reversing", "reverse"],
  ["revolutionizing", "revolutionize"],
  ["rhetoric;", "rhetoric"],
  ["right:", "right"],
  ["rightno", "right"],
  ["rights:", "rights"],
  ["rights”", "rights"],
  ["rightsand", "rights"],
  ["rightwing", "right-wing"],
  ["rnc", "RNC"],
  ["roberts", "Justice John Roberts"],
  ["robertson", "Pat Robertson"],
  ["robertson​", "Pat Robertson"],
  ["robertson:", "Pat Robertson"],
  ["robs", "rob"],
  ["roe", "Roe v Wade"],
  ["romney", "Mitt Romney"],
  ["room:", "room"],
  ["roosevelt", "Teddy Roosevelt"],
  ["rove", "Karl Rove"],
  ["rsvp", "RSVP"],
  ["rubio", "Marco Rubio"],
  ["russia", "Russia"],
  ["russian", "Russian"],
  ["sachs", "Goldman Sachs"],
  ["sack", "sad sack"],
  ["saeed", "bin-Saeed"],
  ["saferbecause", "safer"],
  ["salud", "la salud"],
  ["sameold", "same old"],
  ["sanders", "Bernie Sanders"],
  ["sanders’", "Bernie Sanders'"],
  ["sandy", "Sandy Hook"],
  ["sat", "Saturday"],
  ["saturday", "Saturday"],
  ["saudi", "Saudi"],
  ["saved", "save"],
  ["say:", "say"],
  ["schlonged", "being schlonged"],
  ["scotus", "SCOTUS"],
  ["searched", "search"],
  ["secondlargest", "second-largest"],
  ["seeking", "seek"],
  ["seems", "seem"],
  ["seems", "seem"],
  ["selffunding", "self-fund"],
  ["selling", "sell"],
  ["senate", "Senate"],
  ["sending", "send"],
  ["sent", "send"],
  ["sentenced", "sentence"],
  ["separates", "separate"],
  ["served", "serve"],
  ["settled", "settle"],
  ["shares", "share"],
  ["shares", "share"],
  ["sharing", "share"],
  ["shot”", "shot"],
  ["shown", "show"],
  ["shows", "show"],
  ["shows", "show"],
  ["signed", "sign"],
  ["singlepayer", "single-payer"],
  ["sixteen", "2016"],
  ["sixthyear", "sixth-year"],
  ["slams", "slam"],
  ["smaller", "smaller"],
  ["smokes", "smoke"],
  ["snapping", "snap"],
  ["sold", "sell"],
  ["sowing", "sow"],
  ["spends", "spend"],
  ["spent", "spend"],
  ["spewing", "spew"],
  ["spoiler:", "spoiler"],
  ["spoke", "speak"],
  ["spreading", "spread"],
  ["starting", "start"],
  ["starts", "start"],
  ["statement:", "statement"],
  ["stayed", "stay"],
  ["stepped", "step"],
  ["stood", "stand"],
  ["stopped", "stop"],
  ["storiessome", "stories"],
  ["story:", "story"],
  ["storywant", "story"],
  ["streaming", "stream"],
  ["street", "Wall Street"],
  ["streetand", "street"],
  ["strugglesand", "struggles"],
  ["sunday", "Sunday"],
  ["supported", "support"],
  ["supporting", "support"],
  ["supports", "support"],
  ["supports", "support"],
  ["supreme", "Supreme Court"],
  ["surpassed", "surpass"],
  ["suspected", "suspect"],
  ["sworn", "swear"],
  ["tackling", "tackle"],
  ["taken", "take"],
  ["takes", "take"],
  ["takes", "take"],
  ["talked", "talk"],
  ["talking", "talk"],
  ["talking", "talk"],
  ["talking", "talk"],
  ["ted", "Ted Cruz"],
  ["teddy", "Teddy Roosevelt"],
  ["tells", "tell"],
  ["tells", "tell"],
  ["terriblefumbled", "fumble"],
  ["terrifies", "terrify"],
  ["thinks", "think"],
  ["threatens", "threaten"],
  ["throwing", "throw"],
  ["ticked", "ticked off"],
  ["ticket”", "ticked"],
  ["times", "many times"],
  ["told", "tell"],
  ["tomorrow:", "tomorrow"],
  ["toobigto", "too big to fail"],
  ["toobigtofail", "Too big to fail"],
  ["touches", "touch"],
  ["toughbut", "tough"],
  ["tower”", "tower"],
  ["tpp", "TPP"],
  ["trail:", "trail"],
  ["transferred", "transfer"],
  ["transformed", "transform"],
  ["traveling", "travel"],
  ["treasury", "the Treasury Department"],
  ["treated", "treat"],
  ["treating", "treat"],
  ["treats", "treat"],
  ["trickledown", "trickle-down"],
  ["tries", "try"],
  ["trump", "Trump"],
  ["trump", "Donald Trump"],
  ["trump:", "Trump"],
  ["trump’s", "Donald Trump's"],
  ["truth:", "truth"],
  ["truth2/2", "truth"],
  ["tuesday", "Tuesday"],
  ["tuitionfree", "tuition-free"],
  ["tuitionthat's", "tuition"],
  ["tulsa", "Tulsa, OK"],
  ["tuning", "tune"],
  ["turned", "turn"],
  ["tweetwhile", "tweet"],
  ["types", "types of"],
  ["undermining", "undermine"],
  ["undoing", "undo"],
  ["unifying", "unify"],
  ["upheld", "uphold"],
  ["upsets", "upset"],
  ["usa", "USA"],
  ["using", "use"],
  ["values”", "values"],
  ["valuesthat's", "values"],
  ["vermont", "Vermont"],
  ["victimsincluding", "victims"],
  ["video:", "video"],
  ["video:", "video"],
  ["violating", "violate"],
  ["virginia", "Virginia"],
  ["visiting", "visit"],
  ["volunteer:", "volunteer"],
  ["voted", "vote"],
  ["wade", "Roe v Wade"],
  ["waging", "wag"],
  ["waiting", "wait"],
  ["wallace", "Chris Wallace"],
  ["walmart", "Wal-Mart"],
  ["walton", "the Walton family"],
  ["wanted", "want"],
  ["wants", "want"],
  ["wants", "want"],
  ["was", "is"],
  ["wasted", "waste"],
  ["watch:", "watch"],
  ["watch:", "watch"],
  ["watched", "watch"],
  ["watching", "watch"],
  ["way:", "way"],
  ["wayne", "John Wayne"],
  ["wednesday", "Wednesday"],
  ["week:", "week"],
  ["welch​", "Jack Welch"],
  ["went", "go"],
  ["were", "is"],
  ["whoopi", "Whoopi Goldberg"],
  ["widens", "widen"],
  ["wielding", "wield"],
  ["wishing", "wish"],
  ["withdrawing", "withdraw"],
  ["wolfeboro", "Wolfeboro"],
  ["woman’s", "a woman's"],
  ["woody", "Woody Johnson (owner of the NY Jets)"],
  ["wooed", "woo"],
  ["worked", "work"],
  ["worker’s", "worker's rights"],
  ["workers’", "workers’"],
  ["worldclass", "world-class"],
  ["wrongit", "wrong"],
  ["wrote", "write"],
  ["wsj/nbc", "WSJ/NBC"],
  ["year’s", "year's"],
  ["yearand", "year"],
  ["yihadismo", "el yihadismo"],
  ["york", "New York"],
  ["yorkers", "New Yorkers"]
];

//Words to remove:
removals = [
  "–",
  ":",
  "'08",
  "\"a",
  "“an",
  "“as",
  "“bottom",
  "“cruz",
  "“do",
  "“enough",
  "“family",
  "“i",
  "“i'm",
  "“i’ll",
  "“i’ll'",
  "“i’m",
  "“if'",
  "“it’s",
  "“no”",
  "“there",
  "“this",
  "“too'",
  "“what",
  "[14th",
  "[hillary]",
  "/",
  "¯_ツ_/¯",
  "→'",
  "+/",
  "+/",
  ">",
  "$",
  "$'s",
  "$\'s",
  "$1",
  "$100",
  "$1000",
  "$118500",
  "$11m",
  "$15",
  "$150",
  "$18m",
  "$1m",
  "$200",
  "$28",
  "$35000000",
  "$40",
  "$400m/year",
  "$487k",
  "$5",
  "$50",
  "$50",
  "$50000",
  "$55",
  "$56",
  "$5807",
  "$59",
  "$6",
  "$6240",
  "$63000000",
  "$80",
  "$80",
  "$89",
  "$89",
  "$9400",
  "$millions",
  "08",
  "08",
  "1",
  "1/2",
  "10",
  "10%",
  "100",
  "100",
  "10000",
  "103",
  "105",
  "108",
  "10bad",
  "11",
  "11",
  "11",
  "11",
  "11:30",
  "11:35pme",
  "11:50",
  "112",
  "1130",
  "1135pme",
  "114",
  "1150",
  "12",
  "12yearold",
  "14",
  "1400+",
  "15",
  "150",
  "15k",
  "15k",
  "16",
  "16th",
  "17",
  "18",
  "18000000",
  "18000000",
  "19",
  "1984",
  "1984",
  "1988",
  "19yearold",
  "1st",
  "2",
  "2/2",
  "2%",
  "2%",
  "20",
  "2008",
  "2015",
  "2016",
  "2016",
  "2016",
  "2017",
  "2025",
  "21",
  "21",
  "21%",
  "21points",
  "21points",
  "21st",
  "25",
  "2513665",
  "25k",
  "27",
  "28",
  "3",
  "3",
  "3%",
  "3%",
  "30",
  "3200",
  "33000",
  "35",
  "37",
  "37",
  "38",
  "39",
  "39%",
  "39%",
  "4",
  "4",
  "4",
  "4",
  "40",
  "43",
  "45",
  "46",
  "46%",
  "47246",
  "48",
  "5",
  "50",
  "5000",
  "524",
  "53:5",
  "54",
  "58",
  "5k",
  "5k",
  "5pm",
  "5pm",
  "6",
  "6",
  "62",
  "6700000",
  "6700000",
  "6yearold”",
  "7",
  "7:00",
  "700",
  "747",
  "75000",
  "76",
  "78",
  "8",
  "8",
  "8:00",
  "800",
  "89",
  "89399",
  "9",
  "9:30pme",
  "92",
  "95",
  "96",
  "9pm",
  "9pm",
  "abby",
  "abroad",
  "acanot",
  "act”",
  "adicción",
  "adolph",
  "ago",
  "ain't",
  "ain’t",
  "zero'",
  "alongno",
  "alpha",
  "alshabbab",
  "am",
  "americans'",
  "amy",
  "angelina",
  "anotheri'm",
  "anotheri'm",
  "anotheri’m",
  "anymore",
  "appointmentswe",
  "are\"",
  "are”",
  "aren't",
  "arewe",
  "arrestado",
  "atención",
  "autismthey",
  "away”",
  "az",
  "background",
  "bakken",
  "barrack",
  "based",
  "bc",
  "becki",
  "been",
  "bernie's",
  "beta",
  "beware",
  "bilbray",
  "bishop",
  "booketc",
  "bought",
  "braden",
  "braden's",
  "brigid",
  "brought",
  "bruni",
  "c",
  "cafta",
  "campaignhis",
  "can't",
  "can’t",
  "cannot",
  "cárcel",
  "cc",
  "charlotte",
  "chuck",
  "cillizza",
  "claremont",
  "clinton’s",
  "colegiatura",
  "commercialsboring",
  "como",
  "cómo",
  "contra",
  "cornel",
  "could",
  "couldn't",
  "cruz's",
  "ct",
  "ct:",
  "cties",
  "daughterread:",
  "deber",
  "debería",
  "delta",
  "derecho",
  "derry",
  "dfa",
  "dhs'",
  "didn't",
  "didn’t",
  "diferencia",
  "doand",
  "doesn't",
  "doesn’t",
  "don't",
  "don't",
  "don’t",
  "don’t",
  "dono",
  "dorchester",
  "dr",
  "drehle",
  "dt",
  "duked",
  "ed",
  "el",
  "elección",
  "em",
  "en",
  "entiende",
  "ERE ARE THE WORDS FOR @ TedCruz : [ '",
  "erin",
  "es",
  "eso",
  "est",
  "esta",
  "estamos",
  "este",
  "et",
  "et:",
  "expectedwe",
  "experiencia",
  "extraño",
  "f",
  "family's",
  "fayde",
  "fec",
  "flint's",
  "for:",
  "forced",
  "fuma",
  "garantizan",
  "gibson",
  "gotta",
  "gotv",
  "gov",
  "grader",
  "greati",
  "h",
  "haberman",
  "hacer",
  "handed",
  "hank",
  "hanover",
  "happen”",
  "happening",
  "harder”",
  "harrison",
  "has",
  "haven't",
  "haven’t",
  "haven’t",
  "havn't",
  "he's",
  "he’s",
  "heading",
  "here's",
  "here’s",
  "here’s",
  "hija",
  "him:",
  "hint:",
  "hora",
  "hq",
  "hrc",
  "humayun",
  "hundreds",
  "hyde",
  "i'd",
  "i'll",
  "i'm",
  "I've",
  "i’m",
  "i’ve",
  "icymi",
  "in:",
  "inc",
  "ingredion's",
  "int",
  "interestsonly",
  "involved",
  "iowa/nh/sc",
  "isn't",
  "isn't",
  "isn't",
  "isn’t",
  "it:",
  "it:",
  "it's",
  "it's",
  "it’s",
  "it”",
  "itnot",
  "j",
  "jeanine",
  "jeff",
  "johnson",
  "joplin",
  "jr",
  "jusr",
  "kappa",
  "keene",
  "khan",
  "knoxville",
  "las",
  "leaderswe",
  "let's",
  "let’s",
  "levinson",
  "libres",
  "liderazgo",
  "lindsey",
  "line:",
  "lo",
  "located",
  "londonderry",
  "los",
  "lows",
  "macy",
  "maga",
  "manchester",
  "manner",
  "mantenernos",
  "mantenido",
  "marc",
  "mariguana",
  "mckinnon",
  "mcmanamon",
  "mcquaid",
  "me:",
  "meaningtell",
  "médica",
  "merch:",
  "might",
  "million$37m",
  "mondale/ferraro",
  "ms",
  "msm",
  "muchacho",
  "must",
  "muy",
  "naciones",
  "naral",
  "nashua",
  "nationno",
  "necesitamos",
  "nelba",
  "night's",
  "nina",
  "ningún",
  "noonan",
  "nuestros",
  "numberd",
  "nv",
  "nyt",
  "obama's",
  "odiosas",
  "on:",
  "one's",
  "ones",
  "oped:",
  "organized",
  "organizing",
  "otros",
  "overincentive",
  "packed",
  "pagar",
  "país",
  "países",
  "palabras",
  "para",
  "parece",
  "passed",
  "pat",
  "pedir",
  "peggy",
  "people's",
  "per",
  "perdió",
  "permitir",
  "pero",
  "person”",
  "personal”",
  "pharma",
  "phi",
  "placenow",
  "planned",
  "pm",
  "pntr",
  "podemos",
  "podemos",
  "poll:",
  "poll:trump",
  "portsmouth",
  "powering",
  "prek",
  "prep",
  "prescott",
  "presidencyit’s",
  "president's",
  "presidente",
  "presidentit's",
  "préstamo",
  "privateforprofit",
  "privilegio",
  "psi",
  "psst:",
  "pt",
  "qa",
  "que",
  "raised",
  "ralph",
  "rapids",
  "re",
  "reed",
  "rein",
  "rep",
  "reportingand",
  "reps",
  "rounding",
  "rpvirginia",
  "rt",
  "sabe",
  "sakran",
  "same:",
  "saturday:",
  "sc",
  "schlafly",
  "scot",
  "seguro",
  "segurosella",
  "sen",
  "serio",
  "she's",
  "she’s",
  "she’s",
  "shipped",
  "shoker",
  "should",
  "shouldering",
  "shouldn't",
  "shouldn’t",
  "sidewho's",
  "sigan",
  "sigma",
  "siguen",
  "snyder's",
  "sp",
  "st",
  "st:",
  "starters",
  "stevens",
  "stuart",
  "su",
  "substituto",
  "sucediendo",
  "sununu",
  "system”",
  "tedfree",
  "that's",
  "that’s",
  "thatand",
  "thatwe",
  "thembut",
  "there's",
  "there’s",
  "therefore",
  "theta",
  "they're",
  "thought",
  "thousands",
  "threatit",
  "thru",
  "thx",
  "ticked",
  "tiene",
  "tipo",
  "today:",
  "todos",
  "tonight:",
  "tonight's",
  "toybut",
  "trabajar",
  "tracy",
  "tratar",
  "trump's",
  "truth2/2",
  "turner",
  "tweetsvery",
  "ul",
  "un",
  "una",
  "unaffiliated",
  "unirnos",
  "us:",
  "utterly",
  "va",
  "valores",
  "virginia's",
  "von",
  "vs",
  "vt",
  "w",
  "w/",
  "w/",
  "w/him",
  "w/me",
  "wag",
  "wapo",
  "wasn’t",
  "waukon",
  "waverly",
  "wayne's",
  "we'll",
  "we're",
  "we're",
  "we're",
  "we've",
  "we’ll",
  "we’re",
  "we’re",
  "we’ve",
  "we’ve",
  "weaver",
  "webster",
  "wellwith",
  "what's",
  "what’s",
  "where’s",
  "who'd",
  "who's",
  "who’ve",
  "wife's",
  "win:",
  "Wolfeboro",
  "woman's",
  "women's",
  "women's",
  "won't",
  "won't",
  "won't",
  "won't",
  "won’t",
  "worcester",
  "workingand",
  "world's",
  "would",
  "would've",
  "would've",
  "would’ve",
  "wouldn't",
  "y",
  "year's",
  "yearbut",
  "years",
  "you'll",
  "you're",
  "you’ll",
  "you’re",
  "you’re",
  "zero'",
  "zeta"
];

articles = [
  {
    word: "opinion",
    articles: ["my", "your", "an"],
    person: "third"
  },
  {
    word: "paper",
    articles: [],
    person: "third"
  },
  {
    word: "advice",
    articles: ["test", "the"],
    person: "third"
  },
  {
    word: "Americans",
    articles: [],
    person: "plural"
  }
];
