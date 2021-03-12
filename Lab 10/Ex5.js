1) db.Restaurants.find( 
    { 'address.building': {$eq: '1008'} }, 
    { city: 1, 'address.street': 1, name: 1, restaurant_id: 1})
    .sort({restaurant_id: 1});

2) db.Restaurants.find( 
    { $or: [
        {name: /Thai/ },
        {'address.street': /Street/},
        {'address.zipcode': '17988'}
    ]}, 
    { city: 1, 'address.street': 1, name: 1, restaurant_id: 1})
    .sort({restaurant_id: 1});