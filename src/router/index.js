import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/alert",
    name: "alert",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AlertView.vue"),
  },
  {
    path: "/application",
    name: "application",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ApplicationView.vue"),
  },
  {
    path: "/avarar",
    name: "avatar",
    component: () => import("../views/AvatarView.vue"),
  },
  {
    path: "/badge",
    name: "badge",
    component: () => import("../views/BadgeView.vue"),
  },
  {
    path: "/banner",
    name: "banner",
    component: () => import("../views/BannerView.vue"),
  },
  {
    path: "/bar",
    name: "bar",
    component: () => import("../views/BarView.vue"),
  },
  //{
  //  path: "/botomnav",
  //  name: "botomnav",
  //  component: () => import("../BotomnavView.vue"),
  // },
  {
    path: "/botomsheet",
    name: "botomsheet",
    component: () => import("../views/BotomsheetView.vue"),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("../views/CalendarView.vue"),
  },
  {
    path: "/carousels",
    name: "carousels",
    component: () => import("../views/CarouselsView.vue"),
  },
  {
    path: "/card",
    name: "card",
    component: () => import("../views/CardView.vue"),
  },
  {
    path: "/chip",
    name: "chip",
    component: () => import("../views/ChipView.vue"),
  },
  {
    path: "/dialog",
    name: "dialog",
    component: () => import("../views/DialogsView.vue"),
  },
  {
    path: "/divider",
    name: "divider",
    component: () => import("../views/DividerView.vue"),
  },
  {
    path: "/exponetion",
    name: "exponetion",
    component: () => import("../views/ExpentionView.vue"),
  },
  {
    path: "/footer",
    name: "footer",
    component: () => import("../views/FooterView.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () => import("../views/FormView.vue"),
  },
  {
    path: "/grid",
    name: "grid",
    component: () => import("../views/GridView.vue"),
  },
  {
    path: "/group",
    name: "group",
    component: () => import("../views/GroupView.vue"),
  },
  {
    path: "/hover",
    name: "hover",
    component: () => import("../views/HoverView.vue"),
  },
  {
    path: "/icon",
    name: "icon",
    component: () => import("../views/IconView.vue"),
  },
  {
    path: "/image",
    name: "image",
    component: () => import("../views/ImagesView.vue"),
  },
  {
    path: "/lazy",
    name: "lazy",
    component: () => import("../views/LazyView.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../views/ListView.vue"),
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("../views/MenuView.vue"),
  },
  {
    path: "/nav",
    name: "nav",
    component: () => import("../views/NvdrawerView.vue"),
  },
  {
    path: "/overlay",
    name: "overlay",
    component: () => import("../views/OverlayView.vue"),
  },
  {
    path: "/pagination",
    name: "pagination",
    component: () => import("../views/PaginationView.vue"),
  },
  {
    path: "/parallax",
    name: "parallax",
    component: () => import("../views/ParallaxView.vue"),
  },
  {
    path: "/picker",
    name: "picker",
    component: () => import("../views/PickerView.vue"),
  },
  {
    path: "/progress",
    name: "progress",
    component: () => import("../views/ProgressView.vue"),
  },
  {
    path: "/rating",
    name: "rating",
    component: () => import("../views/RatingView.vue"),
  },
  {
    path: "/sheet",
    name: "sheet",
    component: () => import("../views/SheetView.vue"),
  },
  {
    path: "/skelton",
    name: "skelton",
    component: () => import("../views/SkeltonView.vue"),
  },
  {
    path: "/sunheader",
    name: "subheader",
    component: () => import("../views/SubheaderView.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () => import("../views/TableView.vue"),
  },
  {
    path: "/tooltip",
    name: "tooltip",
    component: () => import("../views/TooltipView.vue"),
  },
  {
    path: "/tree",
    name: "tree",
    component: () => import("../views/TreeView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
