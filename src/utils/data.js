const menuData = [
  { name: "Dashboard", id: 1 },
  { name: "Account", id: 2, selected: true },
  { name: "Help", id: 3 },
  { name: "Logout", id: 4 },
];

const menuDataMobile = [
  { name: "Dashboard", id: 1 },
  { name: "Account", id: 2, selected: true },
  { name: "Help", id: 3 },
];

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const configuration = [
  { id: 1,
    title: "Manual Configuration",
    subTitle:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    descriptionTitle: "Services Access",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed massa leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu varius felis. Integer posuere urna ut mi porta, vel fringilla dolor convallis. Sed laoreet sodales sapien vel vestibulum. Nulla dictum eros ut efficitur porttitor. Mauris dignissim, lectus sit amet euismod pretium, ex purus condimentum erat, eu feugiat nisi ipsum ac eros.",
  },
  { id: 2,
    title: "Semi Auto Configuration",
    subTitle:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    descriptionTitle: "Services Access",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed massa leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu varius felis. Integer posuere urna ut mi porta, vel fringilla dolor convallis. Sed laoreet sodales sapien vel vestibulum. Nulla dictum eros ut efficitur porttitor. Mauris dignissim, lectus sit amet euismod pretium, ex purus condimentum erat, eu feugiat nisi ipsum ac eros.",
  },
  { id: 3,
    title: "Auto Configuration",
    subTitle:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    descriptionTitle: "Services Access",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed massa leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu varius felis. Integer posuere urna ut mi porta, vel fringilla dolor convallis. Sed laoreet sodales sapien vel vestibulum. Nulla dictum eros ut efficitur porttitor. Mauris dignissim, lectus sit amet euismod pretium, ex purus condimentum erat, eu feugiat nisi ipsum ac eros.",
  },
];
export { menuData, menuDataMobile, size, device, configuration };
