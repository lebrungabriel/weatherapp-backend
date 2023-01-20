const checkBody = (body, keys) => {
  for (const key of keys) {
    if (!body[key] || body[key] === "") {
      return false;
    }
  }

  return true;
};

checkBody(
  { name: "cristian", email: "cristian@gmail.com", password: "123123" },
  ["name", "email", "password"]
);
