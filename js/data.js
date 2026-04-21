
const products = [
  {
    id: 1,
    name: "Jollof Rice & Chicken",
    restaurant: "Tasty Mama's Kitchen",
    price: 45,
    category: "Ghanaian",
    rating: 4.8,
    img: "https://mamaashanti.co.ke/wp-content/uploads/2022/09/cc40ed78e83fb91567443a0d076a4832.jpg",
    images: [
      "https://weeatatlast.com/wp-content/uploads/2022/11/jollof-rice-with-chicken.jpg",
      "https://kreolmagazine.com/wp-content/uploads/2024/03/Recipe2.jpg",
      "https://substackcdn.com/image/fetch/$s_!fShz!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb3326dc1-383b-4b33-afe9-c1aee85e2d95_3213x4367.jpeg"
    ],
    description: "Spicy jollof with tender grilled chicken, served with coleslaw."
  },
  {
    id: 2,
    name: "Waakye with Egg & Fish",
    restaurant: "Corner Spot",
    price: 40,
    category: "Ghanaian",
    rating: 4.7,
    img: "https://preview.redd.it/waakye-ghanas-ultimate-comfort-food-v0-bjyawrd6j5we1.jpeg?auto=webp&s=4574ab870b8f09049b04dbf58c8d97ce45075595",
    images: [
      "https://eatwellabi.com/wp-content/uploads/2021/09/Waakye-13.jpg",
      "https://cdn.shopify.com/s/files/1/0067/1576/8885/files/OIP_5d5b947f-b035-4bfe-84be-11ec5f19da8e_480x480.jpg?v=1721344845",
      "https://i.ytimg.com/vi/wx1rp-u5brk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAwgyw50sVmtZa7v5jJghOVY8xNuA"
    ],
    description: "Waakye with spaghetti, egg, and shito. Hearty and flavourful."
  },
  {
    id: 3,
    name: "Banku & Tilapia",
    restaurant: "Kuku's Grill",
    price: 30,
    category: "Ghanaian",
    rating: 4.9,
    img: "https://media-cdn.tripadvisor.com/media/photo-s/2b/50/33/c7/authentic-ghanaian-local.jpg",
    images: [
      "https://i0.wp.com/www.jamrock.com.gh/wp-content/uploads/2023/02/grilled_tilapia_regular_with_banku_a.jpg?fit=500%2C510&ssl=1",
      "https://i0.wp.com/www.gbcghanaonline.com/wp-content/uploads/2022/04/Banku.jpg",
      "https://africanchopbetter.com/wp-content/uploads/sites/110/2024/04/banku-2.jpg"
    ],
    description: "Grilled tilapia with pepper sauce and a ball of banku."
  },
  {
    id: 4,
    name: "Fried Rice & Beef",
    restaurant: "Fast Food",
    price: 40,
    category: "Fast Food",
    rating: 4.5,
    img: "https://ghanahomecooked.com/wp-content/uploads/2024/11/Beef-Fried-Rice-f.jpg",
    images: [
      "https://preview.redd.it/ghana-fried-rice-v0-1qncaifjnm6b1.jpg?auto=webp&s=f00cdd4b106346caff5c7f4a588df3f327561171",
      "https://www.preciouscore.com/wp-content/uploads/2020/12/African-Fried-Rice-landscape.jpg",
      "https://i.redd.it/quly1br57kwe1.jpeg"
    ],
    description: "Fried rice with seasoned beef strips and vegetables."
  },
  {
    id: 5,
    name: "Chicken Shawarma",
    restaurant: "Fire Shawarma",
    price: 30,
    category: "Fast Food",
    rating: 4.6,
    img: "https://cdn.modernghana.com/images/content/10182025115544-swnaredq5k-side-view-shawarma-with-fried-potatoes-board-cookware176474-3215.jpg",
    images: [
      "https://i.ytimg.com/vi/-hBH4QaFUjY/maxresdefault.jpg",
      "https://s3.amazonaws.com/skinner-production/story_images/files/000/042/299/large/Chicken-Shawarma.jpg?1531972257",
      "https://www.bellanaija.com/wp-content/uploads/2025/06/maxresdefault-5-1-1000x600.jpg"
    ],
    description: "Wrapped flatbread with spiced chicken, garlic sauce, and fresh salad."
  },
  {
    id: 6,
    name: "Vegetable Salad",
    restaurant: "Healthy Bowl",
    price: 40,
    category: "Healthy",
    rating: 4.4,
    img: "https://i.ytimg.com/vi/wKcgIbgfGo0/maxresdefault.jpg",
    images: [
      "https://pbs.twimg.com/media/DE3_T28XUAAQCkz.jpg",
      "https://i.ytimg.com/vi/bMh4QrtM8Js/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDEaGdU1NpgMhS0q2r6VljIPSkNYg",
      "https://i.ytimg.com/vi/NY1r2Fg4Cic/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLApmOWvESrqP_jOHSQgKZugif82PA"
    ],
    description: "Mixed greens, avocado, cream, baked beans and eggs."
  },
  {
    id: 7,
    name: "Kenkey & Fish",
    restaurant: "K-Center",
    price: 20,
    category: "Ghanaian",
    rating: 4.7,
    img: "https://ibiene.com/wp-content/uploads/2019/11/Kenkey.jpg",
    images: [
      "https://i.pinimg.com/736x/44/4a/da/444ada7ec513f73a8605b5b5f3011857.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0Znz4COLCwaeFDp2S7rwJmEpf83W5srYDQ&s",
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/Ghana_Kenkey.jpg"
    ],
    description: "Ga Kenkey with fried fish and pepper."
  },
  {
    id: 8,
    name: "Pizza Margherita",
    restaurant: "Kuku's Grill",
    price: 55,
    category: "Fast Food",
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop"
    ],
    description: "Wood-fired crust, tomato, mozzarella, and basil."
  },
  {
    id: 9,
    name: "Fufu & Light soup",
    restaurant: "Aunty Ama Spot",
    price: 50,
    category: "Ghanaian",
    rating: 4.7,
    img: "https://miro.medium.com/1*XDjyQ6dBVMdybEySuQlHGw.jpeg",
    images: [
      "https://cdn.modernghana.com/content__/640/457/223201941507_1h830o4aau_e4c07973dbc8eb2f7380bdedc4201087_xl.jpg",
      "https://nyonyogh.com/wp-content/uploads/2024/01/d19188f6dcc876c7181db2797e951b70.jpg",
      "https://image.api.sportal365.com/process/smp-images-production/pulse.ng/26092024/46c8a427-1866-49c4-87fd-ce565131f381?operations=autocrop(700:467)"
    ],
    description: "Tasty Light soup with fufu."
  },
    {
    id: 10,
    name: "Kebab",
    restaurant: "Linkz Kebab",
    price: 20,
    category: "Fast Food",
    rating: 4.7,
    img: "https://i1.wp.com/mealsbymavis.com/wp-content/uploads/2020/05/chichinga_5-scaled.jpg?fit=1080%2C720&ssl=1",
    images: [
      "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&h=400&fit=crop",
      "https://mealsbymavis.com/wp-content/uploads/2020/05/chichinga_1-500x500.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKFCS7g32UVsN158FmKBPA9a5pA6LvQljiZqQTrm2ufreUh4pAOm9Y6ESfhyphenhypheno2WsxAbTHq9qyFn6nCknXqQG-aMim6pq8LKbmYmUbA6VFHFhjU53djYOr6ynpLeTXEouTwo0-1NMrC42Y/s1600/African+Beef+Kebab.jpg"
    ],
    description: "Spicy grilled kebab"
  },
];

const categories = ["All", "Ghanaian", "Fast Food", "Healthy"];

function getProductImages(p) {
  if (p.images && p.images.length >= 3) return p.images.slice(0, 3);
  const base = p.img || "";
  return [base, base, base];
}

const teamMembers = [
  { name: "Prince Kwablah Kporxah", role: "Managing Director" },
  { name: "Felix Frempong",        role: "Chief Technical Officer" },
  { name: "Cedar Nortey",          role: "Chief Financial Officer" },
  { name: "Elsie Amegah",          role: "Marketing Specialist" },
  { name: "Wasiri Olayinka",       role: "Customer Relations Officer" },
  { name: "Nathashia Sampong",     role: "Volunteer Coordinator" },
  { name: "Christiana Otoo",       role: "Assistant Volunteer Coordinator" },
  { name: "Priscilla Oppong",      role: "2nd Assistant Volunteer Coordinator" },
  { name: "Philipa Fynn",          role: "Restaurant Partnership Manager" },
  { name: "Emmanuella Baah",       role: "Asst. Restaurant Partnership Manager" }
];
