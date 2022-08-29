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
    title: "SHIRTS",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    title: "SHOES",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    title: "JACKETS",
  },
];

export interface ProductItem {
  id: number;
  img: string;
}

export const popularProducts: ProductItem[] = [
  {
    id: 1,
    img: "https://assets.hermes.com/is/image/hermesproduct/expert-sneaker--221896ZH92-worn-1-0-0-1000-1000_b.jpg",
  },
  {
    id: 2,
    img: "https://assets.hermes.com/is/image/hermesproduct/cross-sneaker--221873ZH49-worn-1-0-0-1000-1000_b.jpg",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnN8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 4,
    img: "https://media.kohlsimg.com/is/image/kohls/3105935_Black?wid=600&hei=600&op_sharpen=1",
  },
  {
    id: 5,
    img: "https://cdn.zando.co.za/p/407962-8247-269704-1-400x.jpg",
  },
  {
    id: 6,
    img: "https://cdn.zando.co.za/p/421997-2436-799124-2-400x.jpg",
  },
  {
    id: 7,
    img: "https://www.shirtstore.se/pub_images/original/WB-1-SF002-BH.jpg",
  },
  {
    id: 8,
    img: "http://cdn.shopify.com/s/files/1/2466/4145/products/2U23U_Chile-World-Cup-1962-Poster-Regular-Black_1200x1200.png?v=1607463178",
  },
  {
    id: 9,
    img: "https://img01.ztat.net/article/spp-media-p1/dfc35c4084d0427eb5e9d9d161d430f4/da43ec474ae94893aa0b17ea597d26b0.jpg?imwidth=762",
  },
  {
    id: 10,
    img: "https://images.afound.com/images/a0344d69-2a75-4bff-8d10-4d1850b1be01/69c7fc20f0f34551bda54418ff220845.jpg?preset=product-details-mobile-4by5",
  },
  {
    id: 11,
    img: "https://img.tradera.net/large-fit/667/429713667_69ac766d-8790-4518-981f-81009e115160.jpg",
  },
  {
    id: 12,
    img: "https://5.imimg.com/data5/FP/VB/MY-28053344/maroon-round-neck-t-shirt-500x500.jpg",
  },
];
