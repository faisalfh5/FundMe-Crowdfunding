import { create_campaign, dashboard, logout, payment } from "../assets/index";

export const navlink = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "campaign",
    imgUrl: create_campaign,
    link: "/create-campaign",
  },
  {
    name: "payment",
    imgUrl: payment,
    link: "/voting",
  },

  {
    name: "logout",
    imgUrl: logout,
    link: "/showCampaign",
  },
];
