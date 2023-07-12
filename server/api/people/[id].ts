const data = [
  { name: "Kenzo Tenma", reviews: "666", recommends: "4", id: 1 },
  { name: "UWU Tenma", reviews: "67", recommends: "32", id: 2 },
  { name: "Cool Tenma", reviews: "1000", recommends: "992", id: 3 },
  { name: "Angry Tenma", reviews: "99", recommends: "1000", id: 4 },
  { name: "Dr. Tenma", reviews: "2", recommends: "0", id: 5 },
  { name: "Depressed Tenma", reviews: "5", recommends: "3", id: 6 },
];

export default defineEventHandler((event) => {
  const { id } = event.context.params as any;

  const user = data.find((user) => user.id === parseInt(id));
  console.log(user);

  return user;
});
