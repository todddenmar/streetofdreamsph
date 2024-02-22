export const getDataByType = async ({ type, client }) => {
  try {
    const query = `*[_type == '${type}']  | order(_createdAt desc) `;
    const data = await client.fetch(query);
    return data;
  } catch (e) {
    console.log({ error: e });
  }
};
