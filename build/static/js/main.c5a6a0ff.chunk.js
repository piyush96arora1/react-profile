(this.webpackJsonpreact = this.webpackJsonpreact || []).push([
  [0],
  {
    18: function (n, e, t) {},
    24: function (n, e, t) {
      "use strict";
      t.r(e);
      var i,
        s,
        o,
        c = t(1),
        a = t(8),
        r = t.n(a),
        d = (t(18), t(13)),
        l = t(3),
        p = t(2),
        u = {
          assets: {
            logo: "/assets/Logo.svg",
            hamBurger: "/assets/hamburger.svg",
            logout: "/assets/logout.svg",
            cross: "/assets/cross.svg",
            profile: "/assets/profile.png",
          },
        },
        x = [
          { name: "Dashboard", id: 1 },
          { name: "Account", id: 2, selected: !0 },
          { name: "Help", id: 3 },
          { name: "Logout", id: 4 },
        ],
        b = [
          { name: "Dashboard", id: 1 },
          { name: "Account", id: 2, selected: !0 },
          { name: "Help", id: 3 },
        ],
        m = t(0),
        j = p.b.div(
          i ||
            (i = Object(l.a)([
              "\n\ncolor :",
              ";\nfont-size: 0.9rem;\nmargin-right: ",
              ";\nmargin-bottom: 0;\nborder-bottom: none;\npadding-bottom :8px;\nposition: relative;\n\n\n\n.line{\n  height: 7px;\n    background: #86EAAE;\n    position: absolute;\n    width: 100%;\n    top: 47px;\n}\n\n@media only screen and (max-width: 768px) {\n  margin-bottom: 42px;\n  padding-bottom: 16px;\n  border-bottom : ",
              ";\n  }\n\n",
            ])),
          function (n) {
            return n.selected ? "#fff" : n.theme.gray;
          },
          function (n) {
            return n.idx < 3 ? "40px" : "0px";
          },
          function (n) {
            return n.selected ? "2px solid #86EAAE" : "";
          }
        ),
        g = function (n) {
          var e = n.value,
            t = n.selected,
            i = n.index;
          return Object(m.jsxs)(j, {
            idx: i,
            selected: t,
            children: [
              e,
              t && Object(m.jsx)("div", { className: "mdisplayNone line" }),
            ],
          });
        },
        f = p.b.div(
          s ||
            (s = Object(l.a)([
              "\nwidth: ",
              ";\ndisplay: ",
              ";\nposition: fixed;\ntop: 81px;\nleft: 0;\ntransition: 0.5s;\nbackground-color: ",
              ";\nheight: 100%;\npadding: 0px 32px;\npadding-top: 40px;\n",
            ])),
          function (n) {
            return n.open ? "100%" : "0";
          },
          function (n) {
            return n.open ? "block" : "none";
          },
          function (n) {
            return n.theme.primary;
          }
        ),
        h = function (n) {
          var e = n.open;
          return Object(m.jsx)(f, {
            open: e,
            children: b.map(function (n, e) {
              return Object(m.jsx)(
                g,
                { index: e, selected: n.selected, value: n.name },
                n.id
              );
            }),
          });
        },
        O = p.b.div(
          o ||
            (o = Object(l.a)([
              "\nbackground : ",
              ";\npadding: 0px 32px;\nheight: 80px;\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\nborder-bottom: ",
              ";\n.logo{\n  height: 26px;\n}\n.menu{\n  display: flex;\n\n}\nbutton{\n  background: none;\n  border: none; \n}\n",
            ])),
          function (n) {
            return n.theme.primary;
          },
          function (n) {
            return n.sideNavOpen ? "1px solid black" : "";
          }
        ),
        v = function () {
          var n = Object(c.useState)(!1),
            e = Object(d.a)(n, 2),
            t = e[0],
            i = e[1];
          return Object(m.jsxs)(O, {
            sideNavOpen: t,
            children: [
              Object(m.jsx)(h, { open: t }),
              Object(m.jsx)("img", {
                onClick: function () {
                  return i(!t);
                },
                className: "ddisplayNone",
                src: u.assets[t ? "cross" : "hamBurger"],
                alt: "menu",
              }),
              Object(m.jsx)("img", {
                className: "logo",
                src: u.assets.logo,
                alt: "logo",
              }),
              Object(m.jsx)("nav", {
                className: "menu mdisplayNone",
                children: x.map(function (n, e) {
                  return Object(m.jsx)(
                    g,
                    { index: e, selected: n.selected, value: n.name },
                    n.id
                  );
                }),
              }),
              Object(m.jsx)("img", {
                src: u.assets.logout,
                className: "ddisplayNone",
                alt: "logout",
              }),
            ],
          });
        },
        y = t(12);
      var N,
        w = function (n) {
          var e = n.type,
            t = void 0 === e ? "text" : e,
            i = n.label,
            s = void 0 === i ? "Name" : i,
            o = n.value,
            c = n.handleChange,
            a = n.name,
            r = n.id;
          return Object(m.jsxs)("div", {
            className: "input-container form-item",
            children: [
              Object(m.jsx)("input", {
                id: r,
                name: a,
                type: t,
                value: o,
                onChange: c,
              }),
              Object(m.jsx)("label", {
                className: o && "filled",
                htmlFor: a,
                children: s,
              }),
            ],
          });
        },
        _ = p.b.div(
          N ||
            (N = Object(l.a)([
              "\n.container{\n  display:flex;\n  padding: 64px 130px;\n\n}\n.container__inputsection{\n  margin-left:130px;\n  width: 100%;\n  flex-direction: column;\n}\n.container__secondInput{\n  flex-direction:row;\n}\n\n\n@media only screen and (max-width: 768px) {\n  .container{\n    flex-direction: column;\n  }\n  .container__secondInput{\n    flex-direction: column;\n  }\n\n",
            ]))
        ),
        k = function (n) {
          return (
            Object(y.a)(n),
            Object(m.jsx)(_, {
              children: Object(m.jsxs)("div", {
                className: "container",
                children: [
                  Object(m.jsx)("div", {
                    children: Object(m.jsx)("img", {
                      src: u.assets.profile,
                      alt: "profile",
                    }),
                  }),
                  Object(m.jsxs)("div", {
                    className: "flex container__inputsection",
                    children: [
                      Object(m.jsx)("div", { children: "MY ACCOUNT" }),
                      Object(m.jsx)(w, {}),
                      Object(m.jsxs)("div", {
                        className: "flex container__secondInput",
                        children: [Object(m.jsx)(w, {}), Object(m.jsx)(w, {})],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        A = {
          primary: "#5C524D",
          secondary: "#FC732F",
          white: "#fff",
          gray: "rgba(255, 255, 255, 0.75)",
        };
      function C() {
        return Object(m.jsx)("div", {
          children: Object(m.jsxs)(p.a, {
            theme: A,
            children: [Object(m.jsx)(v, {}), Object(m.jsx)(k, {})],
          }),
        });
      }
      r.a.render(Object(m.jsx)(C, {}), document.getElementById("root"));
    },
  },
  [[24, 1, 2]],
]);
//# sourceMappingURL=main.c5a6a0ff.chunk.js.map
