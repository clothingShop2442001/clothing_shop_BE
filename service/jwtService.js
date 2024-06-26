var jwt = require("jsonwebtoken");
const genneralAccessToken = async (payload) => {
  const access_token = jwt.sign(
    {
      payload,
    },
    "access_token",
    { expiresIn: "1h" }
  );
  return access_token;
};
const genneralRefreshToken = async (payload) => {
  const refresh_token = jwt.sign(
    {
      payload,
    },
    "refresh_token",
    { expiresIn: "1h" }
  );
  return refresh_token;
};

module.exports = {
  genneralAccessToken,
  genneralRefreshToken,
};
