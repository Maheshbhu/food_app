export const sampleProducts = [
  // 🍔 Burgers
  { _id: "b1", name: "Classic Cheese Burger", description: "Juicy grilled burger with melted cheese", price: 150, category: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600" },
  { _id: "b2", name: "Double Beef Burger", description: "Loaded double beef patty with cheese", price: 220, category: "Burgers", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600" },
  { _id: "b3", name: "Veggie Delight Burger", description: "Crispy veggie patty with lettuce and mayo", price: 140, category: "Burgers", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600" },
  { _id: "b4", name: "Chicken Burger", description: "Tender chicken breast burger with spicy sauce", price: 180, category: "Burgers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4whM4K8YwxhWSUIQpeebHVmOBaayx8t3sQ&s" },
  { _id: "b5", name: "BBQ Bacon Burger", description: "Grilled burger with BBQ sauce and crispy bacon", price: 250, category: "Burgers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4NehledkoNTv8XzV4RAMg67rGNpQSLOanw&s" },

  // 🍕 Pizza
  { _id: "p1", name: "Margherita Pizza", description: "Classic tomato, mozzarella & basil", price: 200, category: "Pizza", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvNDxsng9h96Ey75dYGsH5ssnPOxS70lbSw&s" },
  { _id: "p2", name: "Pepperoni Pizza", description: "Loaded with spicy pepperoni and cheese", price: 250, category: "Pizza", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8bnpzQOP0j7G7CFRtJgdI1K2cIVbV-aZQ&s" },
  { _id: "p3", name: "Veggie Pizza", description: "Loaded with mushrooms, olives & peppers", price: 220, category: "Pizza", image: "https://i0.wp.com/www.spicesinmydna.com/wp-content/uploads/2024/02/Pepperoni-Pizza-with-Hot-Honey-Ricotta-Olives-and-Basil-8.jpg?resize=610%2C915&ssl=1" },
  { _id: "p4", name: "BBQ Chicken Pizza", description: "Barbecue chicken with cheese & onions", price: 270, category: "Pizza", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhized_NKRYTKOyWgO244oV8uhxpU_ninvqA&s" },
  { _id: "p5", name: "Cheese Burst Pizza", description: "Extra cheesy delight with soft crust", price: 280, category: "Pizza", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZworixr4iRrUTsr8GaJ_XmrsRv4NqE7wjw&s" },

  // 🍝 Pasta
  { _id: "pa1", name: "White Sauce Pasta", description: "Creamy Alfredo pasta", price: 180, category: "Pasta", image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-White-sauce-pasta-600x600.jpg" },
  { _id: "pa2", name: "Red Sauce Pasta", description: "Tangy tomato-based pasta", price: 160, category: "Pasta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdxAzyGzi4h5uV4BS6KeYOoS4Rh87UcyggA&s" },
  { _id: "pa3", name: "Pesto Pasta", description: "Pasta with basil pesto sauce", price: 190, category: "Pasta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEeXrbPurI_vLBxp4JdDTWDdPV5uEEMdIBwQ&s" },
  { _id: "pa4", name: "Mac & Cheese", description: "Cheesy macaroni baked to perfection", price: 210, category: "Pasta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTge3iUl7HfvbdkGVV6ik7mHa4qIMzyh_MTw&s" },
  { _id: "pa5", name: "Spaghetti Bolognese", description: "Spaghetti with meat sauce", price: 230, category: "Pasta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HJn91fhX2ml-IV_VTgclKWXMggtzwnaQog&s" },

  // 🍨 Desserts
  { _id: "d1", name: "Chocolate Cake", description: "Rich chocolate layered cake", price: 150, category: "Desserts", image: "https://static-assets-prod.fnp.com/images/pr/m/v20250701155848/truffle-temptation-eggless-birthday-cake500-g.jpg" },
  { _id: "d2", name: "Ice Cream Sundae", description: "Vanilla ice cream with toppings", price: 100, category: "Desserts", image: "https://www.southernliving.com/thmb/B74rDMrcDg4M0aXrcopZzDHi0do=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Hot-Fudge_step6_-074-f46b36d441984931b6f9d0b055c8f56b.jpg" },
  { _id: "d3", name: "Cheesecake", description: "Classic New York-style cheesecake", price: 180, category: "Desserts", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600" },
  { _id: "d4", name: "Brownie", description: "Warm chocolate brownie", price: 120, category: "Desserts", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdCU736BBZWKi_kaT7lUyvoJNA26HQr__Hw&s" },
  { _id: "d5", name: "Cupcake", description: "Frosted vanilla cupcake", price: 90, category: "Desserts", image: "https://sugargeekshow.com/wp-content/uploads/2022/08/vanilla_cupcake_featured_blog.jpg" },

  // 🍜 Chinese
  { _id: "c1", name: "Veg Manchurian", description: "Crispy veg balls in tangy sauce", price: 160, category: "Chinese", image: "https://bitesofindiaevan.com/wp-content/uploads/2024/11/veg.jpg" },
  { _id: "c2", name: "Hakka Noodles", description: "Stir-fried noodles with veggies", price: 140, category: "Chinese", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMRSrHAbnoY3Yx_7c1j3pjtg5lqmG-jFfWKg&s" },
  { _id: "c3", name: "Chilli Paneer", description: "Paneer cubes in spicy sauce", price: 180, category: "Chinese", image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/chilli_paneer.webp?updatedAt=1727161410434" },
  { _id: "c4", name: "Spring Rolls", description: "Crispy fried rolls with stuffing", price: 120, category: "Chinese", image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Spring-Roll-Recipe.jpg" },
  { _id: "c5", name: "Schezwan Fried Rice", description: "Spicy fried rice with Schezwan sauce", price: 180, category: "Chinese", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bo-Z9SldtY1x-q1x0G3rtVSBRkur1A5tBQ&s" },

  // 🍛 Indian
  { _id: "i1", name: "Butter Chicken", description: "Creamy butter chicken curry", price: 250, category: "Indian", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5QZngaP5A0nM6LwE2MXP1--0-mV034zjnNw&s" },
  { _id: "i2", name: "Paneer Butter Masala", description: "Soft paneer in creamy tomato gravy", price: 220, category: "Indian", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST68c9KEL0h4F-k518kdXltjD1rFmm7kzc7Q&s" },
  { _id: "i3", name: "Dal Tadka", description: "Yellow lentils tempered with spices", price: 150, category: "Indian", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kLMn_YJz4DEPNat_gUTF_QWOxqKiIRWMQw&s" },
  { _id: "i4", name: "Aloo Paratha", description: "Stuffed flatbread served with butter", price: 100, category: "Indian", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4119R9k3cZOSNuZ9tftWDKIbQnINLZXtFBw&s" },
  { _id: "i5", name: "Rajma Chawal", description: "Kidney beans curry with rice", price: 180, category: "Indian", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZZYV9Eu13fxu8qXT98ovX6SrG3hGOtpqPw&s" },

  // 🍗 Biryani
  { _id: "by1", name: "Hyderabadi Chicken Biryani", description: "Spicy aromatic chicken biryani", price: 300, category: "Biryani", image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg" },
  { _id: "by2", name: "Mutton Biryani", description: "Tender mutton pieces in rich spices", price: 350, category: "Biryani", image: "https://pipingpotcurry.com/wp-content/uploads/2024/05/Lamb-Biryani.-Mutton-Biryani-Piping-Pot-Curry.jpg" },
  { _id: "by3", name: "Veg Biryani", description: "Fragrant rice cooked with vegetables", price: 220, category: "Biryani", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIhb5-HTS9i_7GB-KB10aVruRETCuXdpPHw&s" },
  { _id: "by4", name: "Egg Biryani", description: "Basmati rice with boiled eggs and masala", price: 200, category: "Biryani", image: "https://pcnrecepies.com/wp-content/uploads/2018/08/egg-biriyani.jpeg" },
  { _id: "by5", name: "Paneer Biryani", description: "Soft paneer cubes with spiced rice", price: 240, category: "Biryani", image: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Instant-Pot-Paneer-Biryani.jpg" },

  // 🍛 South Indian
  { _id: "si1", name: "Masala Dosa", description: "Crispy dosa stuffed with spiced potatoes", price: 120, category: "South Indian", image: "https://culinarydelightsandbeyond.com/wp-content/uploads/2023/03/dosa-5oF7d_hPJG4-scaled.jpg" },
  { _id: "si2", name: "Idli Sambar", description: "Soft idlis with sambar and chutney", price: 100, category: "South Indian", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQycAfCHffce6BXb4PrdLqifaFT60HKH5Fa8w&s" },
  { _id: "si3", name: "Vada", description: "Crispy lentil fritters with chutney", price: 90, category: "South Indian", image: "https://bonmasala.com/wp-content/uploads/2022/12/medu-vada-recipe.webp" },
  { _id: "si4", name: "Uttapam", description: "Soft pancake with veggies", price: 110, category: "South Indian", image: "https://c.ndtvimg.com/2022-08/4i2h41mo_uttapam_625x300_10_August_22.jpg" },
  { _id: "si5", name: "Pongal", description: "South Indian rice and lentil dish", price: 130, category: "South Indian", image: "https://www.yummytummyaarthi.com/wp-content/uploads/2023/10/ven-pongal-1.jpeg" },
];
