export default (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
    },
  });

  return User;
};
