import p1_img from './image_kale.jpeg'
import p2_img from './image_spinach.jpeg'
import p3_img from './image_cabbage.jpeg'
import p4_img from './image_tomato.jpeg'
import p5_img from './image_potato.jpg'
import p6_img from './image_sweet_potato.jpeg'
import p7_img from './image_onion.jpeg'




let new_collections = [
    {
      id: 1,
      name: "Sukuma wiki(kale)",
      description: "Hardy leafy green with robust stems and dark green leaves, known for its resistance to pests and diseases",
      category: "Vegetables",
      image:p1_img,
      old_price: 1.50,
      new_price: 1.25,
    },
    {
      id: 2,
      name: "Spinach (African spinach)",
      description: "Fast-growing, deep green leaves with a tender texture, suitable for continuous harvesting",
      category: "Vegetables",
      image:p2_img,
      old_price: 2.00,
      new_price: 1.75,
    },
    {
      id: 3,
      name: "Cabbage",
      description: "Large, compact heads with dense, crisp leaves, tolerant of cooler temperatures and suitable for long-term storage",
      category: "Vegetables",
      image:p3_img,
      old_price: 2.25,
      new_price: 2.00,
    },
    {
      id: 4,
      name: "Tomatoes",
      description: "Firm, round fruits with smooth skin, known for their high yield potential and resistance to common tomato diseases",
      category: "Vegetables",
      image:p4_img,
      old_price: 3.00,
      new_price: 2.75,
    },
    {
      id: 5,
      name: "Potatoes",
      description: "Oval-shaped tubers with smooth skin and firm flesh, suitable for a wide range of culinary uses and storage conditions",
      category: "Vegetables",
      image:p5_img,
      old_price: 1.75,
      new_price: 1.50,
    },
    {
        id: 6,
        name: "Sweet potatoes",
        description: "Nutrient-rich tubers with a sweet taste and moist flesh, known for their adaptability to various soil types and climates",
        category: "Legumes",
        image:p6_img,
        old_price: 1.75,
        new_price: 1.50,
      },
      {
        id: 7,
        name: "Onions",
        description: "Bulb vegetables with layered skins, characterized by their pungent flavor and long storage life",
        category: "vegetables",
        image:p7_img,
        old_price: 1.75,
        new_price: 1.50,
      },
     /* {
        id: 8,
        name: "Garlic",
        description: "Small bulbs with papery skin, known for their strong flavor and medicinal properties",
        category: "vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.75,
        new_price: 1.50,
      },
      {
        id: 9,
        name: "Capsicums (Bell peppers)",
        description: "Thick-walled fruits with a crisp texture and vibrant colors, suitable for fresh consumption or cooking",
        category: "vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.75,
        new_price: 1.50,
      },
      {
        id: 10,
        name: "Carrots",
        description: "Long, slender roots with a vibrant orange color, known for their high sugar content and excellent storage ability",
        category: "vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.75,
        new_price: 1.50,
      },
      {
        id: 11,
        name: "Chili peppers",
        description: "Spicy fruits with various shapes and heat levels, preferred for their culinary versatility and potential health benefits",
        category: "vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.75,
        new_price: 1.50,
      },
 
    // Legumes (continued)
    {
      id: 12,
      name: "Okra (Lady's fingers)",
      description: "Slender pods with a mucilaginous texture, valued for their high fiber content and heat tolerance",
      category: "Legumes",
      image: "https://via.placeholder.com/150", // Replace with your image URL
      old_price: 2.50,
      new_price: 2.25,
    },
    {
      id: 13,
      name: "Eggplant (Aubergine)",
      description: "Glossy-skinned fruits with creamy flesh, known for their mild flavor and versatility in cooking",
      category: "Legumes",
      image: "https://via.placeholder.com/150", // Replace with your image URL
      old_price: 1.80,
      new_price: 1.60,
    },
    {
      id: 14,
      name: "Cucumbers",
      description: "Cylindrical fruits with tender skin and crunchy flesh, prized for their refreshing taste and high water content",
      category: "Legumes",
      image: "https://via.placeholder.com/150", // Replace with your image URL
      old_price: 2.75,
      new_price: 2.40,
    },
 
    // Vegetables
    {
      id: 15,
      name: "Pumpkins",
      description: "Large, ribbed fruits with thick, orange flesh, valued for their storage ability and use in both sweet and savory dishes",
      category: "Vegetables",
      image: "https://via.placeholder.com/150", // Replace with your image URL
      old_price: 2.00,
      new_price: 1.75,
    },
    {
        id: 16,
        name: "Squash",
        description: "Various-shaped fruits with tender skin and sweet flesh, known for their prolific growth and adaptability to different climates",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 2.00,
        new_price: 1.75,
      },
      {
        id: 17,
        name: "Watermelon",
        description: "Large, round fruits with juicy, sweet flesh and thick rinds, favored for their high water content and refreshing taste",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 2.00,
        new_price: 1.75,
      },
      {
        id: 18,
        name: "Sweet melon (Cantaloupe)",
        description: "Oval-shaped fruits with aromatic, orange flesh and netted skin, prized for their sweetness and musky aroma",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 2.00,
        new_price: 1.75,
      },
    {
      id: 19,
      name: "Green beans",
      description: "Tender pods with small seeds, valued for their mild flavor and crunchy texture, suitable for fresh eating or cooking",
      category: "Vegetables",
      image: "https://via.placeholder.com/150", // Replace with your image URL
      old_price: 1.00,
      new_price: 0.75,
    },
    {
        id: 20,
        name: "Brussels sprouts",
        description: "Small, round buds that grow along a thick stalk, appreciated for their nutty flavor and high vitamin content",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },
      {
        id: 21,
        name: "Lettuce",
        description: "Crisp leaves with a mild flavor and delicate texture, ideal for salads, sandwiches, and garnishes",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },
      {
        id: 22,
        name: "Beans",
        description: "Hardy seeds with a smooth texture and rich flavor, prized for their high protein and fiber content",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },
      {
        id: 23,
        name: "Peas",
        description: "Round seeds with a sweet taste and tender texture, known for their versatility in cooking and nutritional value",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },
      {
        id: 24,
        name: "Lentils",
        description: "Lens-shaped seeds with a hearty flavor and quick cooking time, valued for their high protein and iron content",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },
      {
        id: 25,
        name: "Chickpeas (Garbanzo beans)",
        description: "Creamy seeds with a nutty flavor and firm texture, commonly used in various cuisines and plant-based dishes",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },
     
      {
        id: 26,
        name: "Cowpeas (Black-eyed peas)",
        description: "Cream-colored seeds with a distinctive black spot, favored for their resilience to heat and drought conditions",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },
      {
        id: 27,
        name: "Green grams (Mung beans)",
        description: "Small, green seeds with a soft texture and mild flavor, popular in Asian cuisine and sprouted for added nutrition",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },
      {
        id: 28,
        name: "Soybeans",
        description: "Small, round seeds with a high oil and protein content, used in the production of various food products like tofu and soy milk",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },
      {
        id: 29,
        name: "Pigeon peas (Cajan peas)",
        description: "Nutty-flavored seeds with a smooth texture",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },
      {
        id: 30,
        name: "Maize (corn)",
        description: "Tall grassy plants with large kernels on a cob, known for their versatility in cooking and use in animal feed",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },
      {
        id: 31,
        name: "Wheat",
        description: "Hardy grass with tall stems and golden grains, used primarily for making flour and bread products",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },


     
      {
        id: 32,
        name: "Rice",
        description: "Tall, water-loving grass with long slender grains, a staple food for many cultures around the world",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },{
        id: 33,
        name: "Sorghum",
        description: "Drought-tolerant grass with small round grains, used for making flour, animal feed, and alcoholic beverages",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },
      {
        id: 34,
        name: "Millet",
        description: "Small-seeded grass with a high nutritional value, grown primarily as a cereal crop or forage",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },
      {
        id: 35,
        name: "Barley",
        description: "Cool-season grass with long awns and two-rowed spikes, used for brewing beer and feeding livestock.",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },
      {
        id: 36,
        name: "Sukuma Wiki",
        description: "Leafy green plant with tall stalks and tiny seeds, valued for its high protein and mineral content",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },
      {
        id: 16,
        name: "Sukuma Wiki",
        description: "The most popular leafy green vegetable in Kenya, known for its versatility and nutritional value.",
        category: "Vegetables",
        image: "https://via.placeholder.com/150", // Replace with your image URL
        old_price: 1.00,
        new_price: 0.75,
      },*/
 
    ]




    export default new_collections

