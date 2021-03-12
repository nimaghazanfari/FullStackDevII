1) db.Restaurants.find({cuisine: 'Japanese'});
2) db.Restaurants.find({cuisine: 'Japanese'}, {cuisine: 1, name: 1});
3) db.Restaurants.find().sort({name: 1});
4 - 1) db.Restaurants.find({cuisine: {$eq: 'Japanese'}});
4 - 2) db.Restaurants.find({cuisine: {$eq: 'Japanese'}},
                           {_id: 1, city: 1, cuisine: 1, name: 1, restaurant_id: 1});
4 - 3) db.Restaurants.find({cuisine: {$eq: 'Japanese'}}, 
                           {_id: 1, city: 1, cuisine: 1, name: 1, restaurant_id: 1})
                     .sort({restaurant_id: 1});