export const SITE = {
  name: "Ebenezer's Place International Ministry",
  short: "Ebenezer's Place",
  initials: "EPIM",
  tagline: "Thus far the Lord has helped us.",
  scriptureRef: "1 Samuel 7:12",
  scripture:
    "Then Samuel took a stone and set it between Mizpeh and Shen, and called the name of it Ebenezer, saying, Hitherto hath the Lord helped us.",
  description:
    "Ebenezer's Place International Ministry (EPI) — a Spirit-filled family in Ughelli, Delta State. Thursday Encounter Service at 6:00 PM, Restoration of Glory, live worship, sermons, and discipleship under Pastor Everest Chinakweze. No. 72 Market Road, opposite Voke Filling Station, along Zenith Bank.",
  keywords:
    "Ebenezer's Place, EPI, Ebenezer's Place International Ministry, church Ughelli, Delta State church, Restoration of Glory, Thursday Encounter Service, sermons, live service, Pastor Everest Chinakweze, 72 Market Road, Voke Filling Station, Zenith Bank Ughelli, worship, discipleship, give, thus far the Lord has helped us",
  email: "office@ebenezersplace.org",
  leader: {
    name: "Pastor Everest Chinakweze",
    role: "General Overseer",
    phoneDisplay: "+234 703 165 2763",
    phoneTel: "+2347031652763",
  },
  usher: {
    label: "Support",
    phoneDisplay: "+234 903 968 2190",
    phoneTel: "+2349039682190",
    whatsapp: "2349039682190",
  },
  address: {
    line1: "No. 72 Market Road",
    line2: "Opposite Voke Filling Station, along Zenith Bank, Ughelli, Delta State, Nigeria",
    full: "No. 72 Market Road, opposite Voke Filling Station, along Zenith Bank, Ughelli, Delta State",
    lat: 5.4946702,
    lng: 5.9949646,
    directions: "https://maps.app.goo.gl/WzpAnEdhErrspmU57",
  },
  services: [
    { name: "Thursday Encounter", when: "Thursdays, 6:00 PM WAT · Restoration of Glory" },
  ],
  giving: {
    bank: "Flutterwave",
    accountNumber: "9377716938",
    accountName: "Ebenezer's Place International Ministry",
  },
} as const;

export function pageHead(title: string, description: string, keywords?: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords ?? SITE.keywords },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "NG-DE" },
      { name: "geo.placename", content: "Ughelli, Delta State, Nigeria" },
      { name: "format-detection", content: "telephone=yes" },
    ],
  };
}

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/overseer", label: "Overseer" },
  { to: "/ministries", label: "Ministries" },
  { to: "/sermons", label: "Sermons" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const PILLARS = [
  {
    kicker: "Worship",
    title: "A house that sings",
    body: "We honour God with gladness — in song, in the Word, and in ordinary obedience through the week.",
    verse: "Serve the Lord with gladness. — Psalm 100:2",
    image: "/images/worship.webp",
  },
  {
    kicker: "Help",
    title: "A stone you can return to",
    body: "Ebenezer means stone of help. This house remembers what God has already done, and stands with people still in the middle of their story.",
    verse: "Hitherto hath the Lord helped us. — 1 Samuel 7:12",
    image: "/images/Honoring-God.webp",
  },
  {
    kicker: "Nations",
    title: "From Ughelli outward",
    body: "We disciple believers here, then send the Gospel as far as God leads — in homes, in the city, and across borders.",
    verse: "Go ye therefore, and teach all nations. — Matthew 28:19",
    image: "/images/discipleship.webp",
  },
] as const;

export const MINISTRIES = [
  {
    title: "Altar & Worship",
    body: "Leading the congregation into the presence of God with anointed praise and a clean sound.",
  },
  {
    title: "Prayer & Intercession",
    body: "Standing in the gap for families, Ughelli, and the nations. The stone of help is first a place of prayer.",
  },
  {
    title: "Youth & Teens",
    body: "Raising a generation that knows God early and can stand when the culture shifts.",
  },
  {
    title: "Women of the House",
    body: "Equipping women to thrive in purpose, family, and ministry without losing tenderness.",
  },
  {
    title: "Men of Integrity",
    body: "Building men who lead at home and in public with faith, work, and a steady conscience.",
  },
  {
    title: "Children of Promise",
    body: "Teaching little ones the love of Jesus in words they can carry home.",
  },
  {
    title: "Care & Welfare",
    body: "Practical love — visits, meals, and help — so the Gospel is seen as well as heard.",
  },
  {
    title: "Nations & Outreach",
    body: "Evangelism, follow-up, and partnerships that take Ebenezer's Place beyond one street.",
  },
] as const;

export const BELIEFS = [
  {
    title: "Scripture",
    body: "The Bible is God’s written Word, sufficient to teach, correct, and train the church.",
  },
  {
    title: "Jesus Christ",
    body: "We confess His virgin birth, sinless life, death for our sins, bodily resurrection, and return.",
  },
  {
    title: "Salvation",
    body: "People are saved by grace through faith in Christ — not by effort, status, or religious display.",
  },
  {
    title: "The Holy Spirit",
    body: "The Spirit convicts, fills, gifts, and keeps believers fruitful. We welcome His present work.",
  },
  {
    title: "The Church",
    body: "The church is a family of baptized believers, gathered to worship, grow, and serve.",
  },
  {
    title: "The nations",
    body: "The Gospel is for every people. Our local altar is part of a worldwide assignment.",
  },
] as const;

export type Message = {
  id: string;
  title: string;
  date: string;
  scripture: string;
  summary: string;
  body: string[];
};

export const MESSAGES: Message[] = [
  {
    id: "thus-far",
    title: "Thus Far",
    date: "12 October 2026",
    scripture: "1 Samuel 7:12",
    summary:
      "Samuel did not raise a monument to the battle. He raised a stone to the Helper. Memory is part of faith.",
    body: [
      "Israel had been afraid for a long time. The ark was back, but the heart of the people was still divided. Samuel told them to put away foreign gods and return to the Lord with all their heart. They did. Then the Philistines came up again.",
      "Help did not arrive because Israel was impressive. It arrived because they cried, and God thundered. After the victory Samuel set a stone between Mizpeh and Shen and named it Ebenezer — stone of help. The point of the stone was not decoration. It was a place the next generation could point to and say, the Lord has helped us before.",
      "Ebenezer’s Place exists to be that kind of house. We do not pretend every week is a victory parade. We tell the truth about the battle, and we keep a public memory of God’s help. If you are in the middle of a hard season, you are not late. Come and let the stone preach to you: hitherto. Thus far. He has helped, and He is not finished.",
    ],
  },
  {
    id: "help-in-the-battle",
    title: "Help in the Middle of the Battle",
    date: "5 October 2026",
    scripture: "Psalm 46:1",
    summary:
      "God is a very present help — not a help we only remember after the trouble has passed.",
    body: [
      "Some people only talk about God in the past tense. Ebenezer refuses that. “Hitherto” includes today. Psalm 46 does not say God was a help. It says He is a refuge and strength, a very present help in trouble.",
      "Present help looks ordinary in a local church: someone prays with you before you leave the hall, a teaching that names your actual fear, a phone call on Thursday, a gift that arrives before you asked out loud. None of that replaces the miracle. It is often how the miracle wears clothes.",
      "Bring the battle into the house. Do not dress it up. The God who thundered at Mizpeh still answers people who return to Him with their whole heart.",
    ],
  },
  {
    id: "return-to-the-stone",
    title: "A Stone You Can Return To",
    date: "28 September 2026",
    scripture: "Lamentations 3:21–23",
    summary:
      "When mercy feels far, faith rehearses what it already knows. Hope is a memory put back to work.",
    body: [
      "Jeremiah, standing in a ruined city, makes himself remember: the steadfast love of the Lord never ceases. His mercies are new every morning. That sentence is an Ebenezer spoken over ashes.",
      "You will have mornings when yesterday’s song feels thin. That is not the end of faith. It is the moment to return to the stone — Scripture you have already proved, prayers God has already answered, people who have carried you before.",
      "This ministry will keep saying the same true thing until it becomes your own sentence: thus far the Lord has helped us. Great is His faithfulness.",
    ],
  },
  {
    id: "house-that-remembers",
    title: "The House That Remembers",
    date: "21 September 2026",
    scripture: "Joshua 4:6–7",
    summary:
      "Israel piled stones from the Jordan so children would ask questions. A church should provoke holy questions.",
    body: [
      "When the waters of Jordan stood, God told Joshua to take twelve stones out of the riverbed and set them up as a sign. The stones were for the children who were not there. “What do these stones mean to you?”",
      "Ebenezer’s Place is built for that question. Worship should make a child ask why the adults are singing. Teaching should make a guest ask whether Jesus is this near. Giving should make a neighbour ask why a people share like this.",
      "If you have been looking for a church that will know your name and still tell you the truth, you are welcome in Ughelli — and welcome online when you cannot be in the room.",
    ],
  },
];

export type Book = {
  id: string;
  title: string;
  blurb: string;
  minutes: string;
  chapters: { heading: string; paragraphs: string[] }[];
};

export const BOOKS: Book[] = [
  {
    id: "thus-far-the-lord",
    title: "Thus Far the Lord",
    blurb:
      "A short reading on 1 Samuel 7 — why a church takes the name Ebenezer, and how to practise holy memory.",
    minutes: "8 min read",
    chapters: [
      {
        heading: "A name before a building",
        paragraphs: [
          "Churches are often named for a feeling: glory, fire, palace, victory. Ebenezer is named for a memory. Samuel did not brand a mood. He marked a place where help had already come, so that help could be believed for again.",
          "Ebenezer’s Place International Ministry carries that name on purpose. We are not a monument to ourselves. We are a stone set in Ughelli so that families, students, traders, and visitors can locate the help of God in ordinary time.",
        ],
      },
      {
        heading: "Put away the other gods",
        paragraphs: [
          "Before the thunder, Samuel required a return. Israel had to put away the baals and gather at Mizpeh. Help was not a technique. It followed repentance.",
          "A ministry that talks about help without talking about turning will eventually sell comfort instead of Christ. We will pray for your case. We will also call you back to Jesus, because that is where the stone stands.",
        ],
      },
      {
        heading: "Hitherto",
        paragraphs: [
          "“Hitherto” is a humble word. It does not claim tomorrow as already owned. It testifies up to this hour. That humility keeps a church from boasting, and it keeps a believer from despair.",
          "Write your own hitherto. Name the year God kept you, the illness that turned, the child who came home, the daily bread that did not fail. Then set it where you can see it. Faith grows sturdier when it is allowed to remember.",
        ],
      },
    ],
  },
  {
    id: "the-stone-and-the-song",
    title: "The Stone and the Song",
    blurb:
      "Why worship and witness belong together — a song for the people who have been helped, and a stone for the people still coming.",
    minutes: "7 min read",
    chapters: [
      {
        heading: "Song after thunder",
        paragraphs: [
          "When God thunders, the proper answer is not a press release. It is a song, and then a stone. The song is for the people who were there. The stone is for the people who were not.",
          "At Ebenezer’s Place, Sunday is both. We sing because we have been helped. We teach, pray, and welcome because someone in the room is still waiting on their first clear testimony.",
        ],
      },
      {
        heading: "Do not hide the stone",
        paragraphs: [
          "Some churches are embarrassed by testimony, as if joy were immature. Others are embarrassed by doctrine, as if truth were unkind. The Bible keeps both. Samuel explained the stone in a sentence a child could repeat.",
          "Let your testimony stay short and true. “The Lord helped us.” Then let the teaching go deep, so the help is not confused with luck.",
        ],
      },
      {
        heading: "Carry it outward",
        paragraphs: [
          "An international ministry is not a ministry with a longer slogan. It is a local church that refuses to make Ughelli the edge of the map. We start on Market Road. We do not stop there.",
          "If this reading found you far from Delta State, you are still in the sentence: hitherto hath the Lord helped us. Join us when you can. Pray with us when you cannot. The stone is not the building. The stone is the testimony.",
        ],
      },
    ],
  },
];

export const GALLERY = [
  {
    src: "/images/worship.webp",
    alt: "Congregation in worship at Ebenezer's Place",
    caption: "Sunday worship",
  },
  {
    src: "/images/Honoring-God.webp",
    alt: "The church honouring God together",
    caption: "Honouring God",
  },
  {
    src: "/images/anointing.webp",
    alt: "A moment of ministry during prayer",
    caption: "In God's presence",
  },
  {
    src: "/images/anointing-portrait.webp",
    alt: "Ministry during a service",
    caption: "Ministry moment",
  },
  {
    src: "/images/discipleship.webp",
    alt: "Believers gathered for teaching and discipleship",
    caption: "Discipleship",
  },
  {
    src: "/images/growth.webp",
    alt: "The congregation gathered at Ebenezer's Place",
    caption: "The gathering",
  },
  {
    src: "/images/honoring-wide.webp",
    alt: "Hands lifted in worship",
    caption: "Hands lifted",
  },
  {
    src: "/images/sermon-rest.webp",
    alt: "Pastor Everest Chinakweze preaching Rest on Every Side",
    caption: "Rest on Every Side",
  },
  {
    src: "/images/sermon-word.webp",
    alt: "The Word preached at Ebenezer's Place",
    caption: "The Word",
  },
  {
    src: "/images/sermon-altar.webp",
    alt: "Pastor Everest Chinakweze ministering",
    caption: "Preaching",
  },
] as const;

export function whatsappHref(text: string) {
  return `https://wa.me/${SITE.usher.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function findMessage(id: string) {
  return MESSAGES.find((m) => m.id === id);
}

export function findBook(id: string) {
  return BOOKS.find((b) => b.id === id);
}
