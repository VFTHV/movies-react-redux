// const URL3 = "https://api.jsonbin.io/v3/b/6344a7fe65b57a31e691fee5";

// const updateData = async () => {
//   const response = await fetch(URL3, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       "X-Master-Key":
//         "$2b$10$ul3zB50rJgVzCJoxcuIXqOQleBWxSxOOSNWlXRAQqvyJEbaGkt7tC",
//     },
//     body: JSON.stringify(updateObj),
//   });
//   const data = await response.json();
//   console.log(data);
// };

// updateData();

// const URL = "https://api.jsonbin.io/v3/b/6344a7fe65b57a31e691fee5";

// fetch(URL, {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((json) => {
//     // console.log(json);
//   });

// const requestData = async () => {
//   const response = await fetch(URL);
//   const data = await response.json();
//   console.log(data);
// };

// requestData();

import axios from "axios";

export default axios.create({
  baseURL: "https://api.jsonbin.io/v3/b/6344a7fe65b57a31e691fee5",
});
