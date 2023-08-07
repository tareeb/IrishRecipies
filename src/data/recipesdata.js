const recipesdata = [
    {
        "id": 1,
        "price": "0.00",
        "name": "Irish Stew",
        "writer": 8,
        "writer_name": "ChefBobbyFlay",
        "image_url": "https://irishfoodhub.com/wp-content/uploads/2023/04/Irish-Stew.jpg",
        "rec": "Ingredients:\r\n1 lb (450g) lamb stew meat, cut into chunks\r\n3 large potatoes, peeled and diced\r\n2 carrots, peeled and sliced\r\n1 onion, diced\r\n2 cloves garlic, minced\r\n4 cups beef or vegetable broth\r\n1 tablespoon tomato paste\r\n1 bay leaf\r\nSalt and pepper to taste\r\nInstructions:\r\nIn a large pot, brown the lamb stew meat over medium heat. Add the diced onions and garlic, cooking until softened. Stir in the tomato paste and cook for another minute. Pour in the broth and add the bay leaf. Bring the mixture to a boil, then reduce the heat and simmer for about 1 hour or until the lamb is tender.\r\n\r\nNext, add the diced potatoes and sliced carrots to the pot. Continue simmering for an additional 30 minutes or until the vegetables are cooked through. Season with salt and pepper to taste. Serve the Irish stew hot in bowls and enjoy the comforting flavors of this classic dish."
    },
    {
        "id": 2,
        "price": "0.00",
        "name": "Boxty",
        "writer": 6,
        "writer_name": "GordonRamsayFan",
        "image_url": "https://irishfoodhub.com/wp-content/uploads/2023/07/irish-beef-pot-pie-2.jpg",
        "rec": "Ingredients:\r\n2 cups grated raw potatoes\r\n1 cup all-purpose flour\r\n1 cup mashed potatoes\r\n1 cup buttermilk\r\n1 teaspoon baking soda\r\nSalt and pepper to taste\r\nButter or oil for frying\r\nInstructions:\r\nIn a large mixing bowl, combine the grated raw potatoes, mashed potatoes, flour, baking soda, buttermilk, salt, and pepper. Mix well until you have a smooth batter.\r\n\r\nHeat a frying pan over medium heat and add a knob of butter or a drizzle of oil. Once the pan is hot, spoon a portion of the boxty batter onto the pan, spreading it out to form a thin pancake. Cook for a few minutes on each side until golden brown and crispy.\r\n\r\nRepeat the process with the remaining batter, adding more butter or oil as needed. Serve the boxty hot as a side dish or a delicious breakfast option, perhaps with some traditional Irish smoked salmon."
    },
    {
        "id": 3,
        "price": "0.00",
        "name": "Soda Bread Muffons",
        "writer": 5,
        "writer_name": "MasterChefElla",
        "image_url": "https://irishfoodhub.com/wp-content/uploads/2023/07/Irish-Soda-Bread-Muffins.jpg",
        "rec": "Ingredients:\r\n4 large potatoes, peeled and quartered\r\n1/2 head of cabbage, shredded\r\n1/2 cup milk or cream\r\n4 tablespoons butter\r\nSalt and pepper to taste\r\nOptional: chopped green onions or chives\r\nInstructions:\r\nBoil the potatoes in a large pot of salted water until tender. In a separate pot, cook the shredded cabbage in boiling water until soft. Drain both the potatoes and the cabbage.\r\n\r\nMash the potatoes with the milk or cream and 2 tablespoons of butter until smooth and creamy. Stir in the cooked cabbage and mix well. Season with salt and pepper to taste. For an extra burst of flavor, you can also add chopped green onions or chives.\r\n\r\nServe the colcannon hot, topped with the remaining 2 tablespoons of butter, allowing it to melt over the dish. Colcannon is a delightful and traditional Irish side dish, often served alongside a main course such as roasted meat or fish.\r\n\r\nPlease note that these are simplified recipes, and for the most authentic taste, you may want to explore more detailed recipes and variations available online. Enjoy!"
    },
    {
        "id": 4,
        "price": "0.00",
        "name": "Irish Ham And Chees",
        "writer": 4,
        "writer_name": "Stephen King",
        "image_url": "https://irishfoodhub.com/wp-content/uploads/2023/07/Irish-Ham-and-Cheese-Soup-2.jpg",
        "rec": "Ingredients:\r\n2 cups grated raw potatoes\r\n1 cup all-purpose flour\r\n1 cup mashed potatoes\r\n1 cup buttermilk\r\n1 teaspoon baking soda\r\nSalt and pepper to taste\r\nButter or oil for frying\r\nInstructions:\r\nIn a large mixing bowl, combine the grated raw potatoes, mashed potatoes, flour, baking soda, buttermilk, salt, and pepper. Mix well until you have a smooth batter.\r\n\r\nHeat a frying pan over medium heat and add a knob of butter or a drizzle of oil. Once the pan is hot, spoon a portion of the boxty batter onto the pan, spreading it out to form a thin pancake. Cook for a few minutes on each side until golden brown and crispy.\r\n\r\nRepeat the process with the remaining batter, adding more butter or oil as needed. Serve the boxty hot as a side dish or a delicious breakfast option, perhaps with some traditional Irish smoked salmon."
    },
    {
        "id": 5,
        "price": "0.00",
        "name": "Irish Tea",
        "writer": 9,
        "writer_name": "GiadaDeLaurentisEats",
        "image_url": "https://irishfoodhub.com/wp-content/uploads/2023/07/irish-soda-bread-scones.jpg",
        "rec": ""
    },
    {
        "id": 6,
        "price": "0.00",
        "name": "Irish Muffons",
        "writer": 7,
        "writer_name": "NigellaBites",
        "image_url": "https://irishfoodhub.com/wp-content/uploads/2023/07/irish-lemon-pudding.jpg",
        "rec": ""
    },
    {
        "id": 7,
        "price": "0.00",
        "name": "Irish Salad",
        "writer": 1,
        "writer_name": "King archer",
        "image_url": "https://irishfoodhub.com/wp-content/uploads/2023/06/IRISH-PUB-SALAD-WITH-GUINNESS-DRESSING.jpg",
        "rec": ""
    },
    {
        "id": 8,
        "price": "0.00",
        "name": "Irish Stake",
        "writer": 7,
        "writer_name": "NigellaBites",
        "image_url": "https://irishfoodhub.com/wp-content/uploads/2023/06/IRISH-STEAK-WITH-CHAMP-AND-WHISKEY-SAUCE.jpg",
        "rec": ""
    },
    {
        "id": 9,
        "price": "0.00",
        "name": "Irish Truffules",
        "writer": 9,
        "writer_name": "GiadaDeLaurentisEats",
        "image_url": "https://irishfoodhub.com/wp-content/uploads/2023/05/Irish-Cream-Truffles.jpg",
        "rec": ""
    },
    {
        "id": 10,
        "price": "0.00",
        "name": "Irish Muffons",
        "writer": 6,
        "writer_name": "GordonRamsayFan",
        "image_url": "https://irishfoodhub.com/wp-content/uploads/2023/07/Irish-Soda-Bread-Muffins.jpg",
        "rec": ""
    },
    {
        "id": 11,
        "price": "0.00",
        "name": "Irish Soup",
        "writer": 5,
        "writer_name": "MasterChefElla",
        "image_url": "https://irishfoodhub.com/wp-content/uploads/2023/04/Irish-Stew.jpg",
        "rec": ""
    }
]

export default recipesdata;