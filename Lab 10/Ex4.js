db.Restaurants.find( 
    {$and: [
        { cuisine: {$in: ['Bakery', 'Chicken', 'Hamburgers', 'American']} }, 
        { city: {$ne: 'Brooklyn'} },
        { restaurant_id: {$gt: '4000000'} }
    ]}, 
    {_id: 0, city: 1, cuisine: 1, name: 1, restaurant_id: 1})
    .sort({restaurant_id: 1});