import { Router } from "express";

export const itemsRoutes = Router();

itemsRoutes.get("/", (req, res) => {
  setTimeout(
    () =>
      res.json([
        {
          itemId: "coffee",
          imageId: "/images/200x200.png",
          title: "Coffee",
          price: 0.99,
          description: "",
          salePrice: 0,
        },
        {
          itemId: "cookie",
          imageId: "/images/200x200.png",
          title: "Cookie",
          price: 1,
          description: "May contain nuts.",
          salePrice: 0.5,
        },
        {
          itemId: "croissant",
          imageId: "/images/200x200.png",
          title: "Croissant",
          price: 2.5,
        },
        {
          itemId: "cupcake",
          imageId: "/images/200x200.png",
          title: "Cupcake",
          price: 3,
        },
        {
          itemId: "french-press",
          imageId: "/images/200x200.png",
          title: "French Press",
          price: 1.75,
        },
        {
          itemId: "iced-coffee",
          imageId: "/images/200x200.png",
          title: "Iced Coffee",
          price: 1.25,
        },
        {
          itemId: "latte",
          imageId: "/images/200x200.png",
          title: "Latte",
          price: 2,
        },
        {
          itemId: "milk",
          imageId: "/images/200x200.png",
          title: "Milk",
          price: 0.5,
        },
        {
          itemId: "sandwich",
          imageId: "/images/200x200.png",
          title: "Sandwich",
          price: 6,
        },
        {
          itemId: "tea",
          imageId: "/images/200x200.png",
          title: "Tea",
          price: 1.5,
        },
      ]),
    500
  );
});
