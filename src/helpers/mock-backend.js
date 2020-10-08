let users = JSON.parse(localStorage.getItem("user")) || [];

export function configureMockBackend() {
  let realFetch = window.fetch;
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.endsWith("/users/authenicate") && opts.method === "POST") {
          let params = JSON.parse(opts.body);

          let filteredUsers = users.filter(user => {
            return (
              user.username === params.username &&
              user.password === params.password
            );
          });
          if (filteredUsers.length) {
            //if login details are valid return user details and fake jwt token
            let user = filteredUsers[0];
            let responseJson = {
              id: user.id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName,
              token: "mock-jwt-token"
            };
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(responseJson))
            });
          } else {
            reject("Username or password is incorrrect");
          }
          return;
        }

        if (url.endsWith("/users") && opts.method === "GET") {
          //check for fake auth token in header and return users if valid
          //this authentication is implemented server side
          if (
            opts.headers &&
            opts.headers.Authorization === "Bearer mock-jwt-token"
          ) {
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(users))
            });
          } else {
            reject("Unauthorised");
          }
          return;
        }

        // get user by id
        if (url.match(/\/users\/\d+$/) && opts.method === "GET") {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (
            opts.headers &&
            opts.headers.Authorization === "Bearer fake-jwt-token"
          ) {
            // find user by id in users array
            let urlParts = url.split("/");
            let id = parseInt(urlParts[urlParts.length - 1]);
            let matchedUsers = users.filter(user => {
              return user.id === id;
            });
            let user = matchedUsers.length ? matchedUsers[0] : null;

            // respond 200 OK with user
            resolve({ ok: true, text: () => JSON.stringify(user) });
          } else {
            // return 401 not authorised if token is null or invalid
            reject("Unauthorised");
          }

          return;
        }

        if (url.endsWith("/users/register") && opts.method === "POST") {
          let newUser = JSON.parse(opts.body);
          let duplicateUser = users.filter(user => {
            return user.username === newUser.username;
          }).length;
          if (duplicateUser) {
            reject("Username " + newUser.username + "' is already taken");
            return;
          }
          newUser.id = users.length
            ? Math.max(...users.map(user => user.id)) + 1
            : 1;
          users.push(newUser);

          localStorage.setItem("users", JSON.stringify(users));

          resolve({ ok: true, text: () => Promise.resolve() });

          return;
        }

        if (url.match(/\/users\/\d+$/) && opts.method === "DELETE") {
          if (
            opts.headers &&
            opts.headers.Authorization === "Bearer mock-jwt-token"
          ) {
            let urlParts = url.split("/");
            let id = parseInt(urlParts[urlParts.length - 1]);
            for (let i = 0; i < users.length; i++) {
              let user = user[i];
              if (user.id === id) {
                users.splice(i, 1);
                localStorage.setItem("users", JSON.stringify(users));
                break;
              }
            }
            resolve({ ok: true, text: () => Promise.resolve() });
          } else {
            reject("Unauthorised");
          }
          return;
        }
        realFetch(url, opts).then(response => resolve(response));
      }, 500);
    });
  };
}
