1) db.Restaurants.find({cuisine: {$eq: 'Delicatessen'}}, 
                       {_id: 0, city: 1, cuisine: 1, name: 1})
                 .sort({name: -1});

2) db.Restaurants.find( {$and: [{cuisine: {$eq: 'Delicatessen'}}, { city: {$ne: 'Brooklyn'}}] }, 
                       {_id: 0, city: 1, cuisine: 1, name: 1})
                 .sort({name: 1});