import { mockUsersList } from "../../../utils/mockData";

export default defineEventHandler((event) => {
  const { id } = event.context.params as any;

  const user = mockUsersList.find((user) => user.id === parseInt(id));

  return user;
});
