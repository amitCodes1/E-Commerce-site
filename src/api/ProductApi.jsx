import api from "./app";

export const getProducts = () => {
  return api.get("/products");
};