import { mockUserProfile, mockUsersList } from "../../../utils/mockData";

export default defineEventHandler((event) => {
  const { id } = event.context.params as any;

  mockUserProfile.id = id;

  return mockUserProfile;
});
