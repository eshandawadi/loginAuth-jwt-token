// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const signinHandller = (e) => {
//     e.preventDefault();
//     axios
//       .post("https://qa-school.krafters.dev/api/login-custom", {
//         email: email,
//         password: password,
//       })
//       .then((response) => {
//         console.log(response);
//       });
//   };
//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           placeholder="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         ></input>
//         <input
//           type="text"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         ></input>
//         <button onClick={signinHandller}>Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;



