let jwt = require("jsonwebtoken");
let fs = require("fs");
// var privateKey = fs.readFileSync("./key/localhost.key");
// var token = jwt.sign({ foo: "bar" }, privateKey, { algorithm: "RS256" });
// console.log(token);

let token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE3MDA4MTkxNDV9.QbAZMNp_HHWw7gY2p092dKNZWkm0WUYgP0jJ1j_ffSDJoGC-92ga364QUGoZr29xY4cnyrY1L0t39t4pZWQESyP4vvLg7YUvfGjkmlkQg6bjulfbQCbYozMUvTB9TdGnJXh60YpAOtHYD3yDZcO-rsDndOm8f5HW2KgX_OlXkGGniYqPZJJ73KU_GXR8pXrhLEiHgD38tejRHiAsGpYLETkj_nGc_qlyTBt8f7lgr5ppBGwLhvq-Q-KxH5vC8_RhZw9rdQOA-EcEMW1smNIUb0J3KQ9yHmq4TOZLK51S5Je0su5Kj67r2mKhQrar6wBa90wpNcTb3X78M0RUj74Opg";
let cert = fs.readFileSync("./key/localhost.crt");
jwt.verify(token, cert, { algorithm: "RS256" }, function (err, data) {
  console.log(err);
  console.log(data);
});
