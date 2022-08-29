export const SliderItems = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "SUMMER SALE",
    description: "Buy shit you dont really need, but you will look cool! why not?",
    background: "#f5fafd",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "FALL COLLECTION",
    description: "Check out the latest fashion for both cozy fall eavnings and a night out!",
    background: "#ed6587",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1416339698674-4f118dd3388b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80",
    title: "POPULAR SALE",
    description: "Dont compromise on style! GET FLAT 30% OFF our most popular products!",
    background: "#b656c6",
  },
];

export interface Category {
  id: number;
  img: string;
  title: string;
}

export const categories: Category[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2003&q=80",
    title: "SHIRT",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    title: "SHOE",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    title: "JACKET",
  },
];
