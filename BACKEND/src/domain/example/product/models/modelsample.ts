const db = require("../../../infrastructure/database");
import { DataTypes } from "sequelize";

export const ModelSample = db.define(
  "sample",
  {
    id_sample: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sample: {
      type: DataTypes.STRING,
    }
  },
  {
    tableName: "sample",  
  }
);
