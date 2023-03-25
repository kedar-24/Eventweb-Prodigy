console.log("HEllo");

const events = [
  {
    title: "Cricket",
    summary: "Play cricket branch wise",
    description: "Play cricket branch wise and win prices......",
    venue: "Ground",
    link:"events/cricket.html"
  },
  {
    title: "Volley Ball",
    summary: "Play Volley branch wise",
    description: "Play Volley branch wise and win prices......",
    venue: "Ground",
  },
  {
    title: "Youth Parliment",
    summary: "Parliment competetion branch wise",
    description: "Parliment competetion branch wise and win prices......",
    venue: "Academic complex",
  },
  {
    title: "Watch Movie",
    summary: "Watch Movie in the campus",
    description: "Watch Movie in the campus and enjoy life ......",
    venue: "Cinema Hall",
  },
  {
    title: "Mother Tongue day event",
    summary: "Mother Tongue day competetion branch wise",
    description:
      "Mother Tongue day competetion branch wise and win prices......",
    venue: "Academic classroom",
  },
  {
    title: "Music Night",
    summary: "Music Night with Singer ABC",
    description: "Music Night with Singer ABC ans enjoy life......",
    venue: "Stadium",
  },
  {
    title: "Tech Work",
    summary: "Music Night with Singer ABC",
    description: "Music Night with Singer ABC ans enjoy life......",
    venue: "Stadium",
  },
  {
    title: "Movie buzz",
    summary: "Music Night with Singer ABC",
    description: "Music Night with Singer ABC ans enjoy life......",
    venue: "Stadium",
  },
  {
    title: "Meet the Freshers",
    summary: "Music Night with Singer ABC",
    description: "Music Night with Singer ABC ans enjoy life......",
    venue: "Stadium",
  },
  {
    title: "Motivational Speaker event",
    summary: "Motivational Speaker event with Singer ABC",
    description: "Motivational Speaker event with ABC ans answers life q......",
    venue: "Stadium",
  },
];

setTimeout(() => {
  // for (let i = 0; i < events.length; i++) {
  //   addEvent(events[i]);
  // }

  events.map((e) => {
    //addEvent(e);
  });
}, 0);

const addEvent = (e) => {
  // create image

  const eImg = document.createElement("img");
  eImg.setAttribute(
    "src",
    "/images/event.jpg"
  );
  eImg.setAttribute("alt", "some image");

  const iDiv = document.createElement("div");
  const ih3 = document.createElement("h3");
  const ip = document.createElement("p");
  const ia = document.createElement("a");

  ip.innerText = e.summary;
  ih3.innerText = e.title;
  ia.innerText = "Register Now";
  ia.setAttribute("href",e.link);

  iDiv.appendChild(ih3);
  iDiv.appendChild(ip);
  iDiv.append(ia);
  //   outer div
  const oDiv = document.createElement("div");
  oDiv.appendChild(eImg);
  oDiv.appendChild(iDiv);

  // Add classes to image
  oDiv.classList.add("inner");
  ia.classList.add("link-color");
  document.querySelector(".outer").appendChild(oDiv);
};
