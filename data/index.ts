
export const navItems = (translation: any) => {
  return [
    { name: translation.navHome, link: `/${translation.locale}/#home ` },
    { name: translation.navAbout, link: `/${translation.locale}/#about` },
    { name: translation.navprojects, link: `/${translation.locale}/#projects` },
    { name: translation.navContact, link: `/${translation.locale}/#contact` },
  ];
}

export const gridItems = (translation: any) => {
  return [
    {
      id: 1,
      title: translation.communication,
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end  text-slate-300 ",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: translation.timeZones,
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start  text-slate-300",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: translation.techStack,
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center  text-slate-300",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: translation.passion,
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start  text-slate-300",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },

    {
      id: 5,
      title: translation.specialist,
      description: "",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center  text-slate-300",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: translation.startProject,
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center  text-slate-300",
      img: "",
      spareImg: "",
    },
  ];
}

export const projects = (translation: any) => {
  return [
    {
      id: 1,
      title: translation.BitcoinVanityTitle,
      des: translation.BitcoinVanityDesc,
      img: "/vanity-project.png",
      iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/mongodb.svg"],
      link: "https://vanity-address.bitcoin-uni.de/en",
    },
    {
      id: 2,
      title: translation.OverStackingFlowTitle,
      des: translation.OverStackingFlowDesc,
      img: "/overstackingflow.png",
      iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/mongodb.svg"],
      link: "https://overstackingflow.vercel.app/",
    },
    /* {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "/ui.aiimg.com",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "/ui.apple.com",
    }, */
  ];
}


export const workExperience = (translation: any) => {
  return [
    {
      id: 1,
      title: translation.btcProfessional.title,
      desc: translation.btcProfessional.desc,
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 2,
      title: translation.intern.title,
      desc: translation.intern.desc,
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 3,
      title: translation.consultant.title,
      desc: translation.consultant.desc,
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: translation.freelancer.title,
      desc: translation.freelancer.desc,
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
}

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/cyphergurke?tab=repositories"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/david-w-/"
  },
];
