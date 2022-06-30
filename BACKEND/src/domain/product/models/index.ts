import { Collections } from './collection';
import { Sizes } from './size';
import { Colors } from './color';
import { Materials } from './material';
import { Product_Materials } from './product_material';
import { Products } from "./product";
import { Product_Sizes } from "./product_size";
import { Product_Colors } from "./product_color";
import { Product_Collections } from "./product_collection";
import { Product_Albums } from "./product_album";
import { Highlights } from "./highlight";
import { Ratings } from "./rating"

Products.belongsToMany(Collections,{
    foreignKey:'id_product',
    through:Product_Collections
})

Collections.belongsToMany(Products,{
    foreignKey:'id_collection',
    through:Product_Collections
})

Products.belongsToMany(Colors,{
    foreignKey:'id_product',
    through:Product_Colors
})

Colors.belongsToMany(Products,{
    foreignKey:'id_color',
    through:Product_Colors
})

Products.belongsToMany(Materials,{
    foreignKey:'id_product',
    through:Product_Materials
})

Materials.belongsToMany(Products,{
    foreignKey:'id_material',
    through:Product_Materials
})

Products.belongsToMany(Sizes,{
    foreignKey:'id_product',
    through:Product_Sizes
})

Sizes.belongsToMany(Products,{
    foreignKey:'id_size',
    through:Product_Sizes
})

Products.hasMany(Product_Albums,{
    foreignKey:'id_product_album',
})

Product_Albums.belongsTo(Products)

Ratings.hasMany(Products,{
    foreignKey:'id_product',
})

Products.belongsTo(Ratings)

Highlights.hasMany(Products,{
    foreignKey:'id_product',
})

Products.belongsTo(Highlights)


module.exports = {
    Products,
    Collections,
    Colors,
    Materials,
    Sizes,
    Product_Albums,
    Ratings,
    Highlights,
    Product_Materials,
    Product_Sizes,
    Product_Colors,
    Product_Collections
};