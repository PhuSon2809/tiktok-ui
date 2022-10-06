import * as httpRequest from '~/utils/httpRequest';

export const getUserSuggest = async (page, perPage) => {
  try {
    const res = await httpRequest.get(
      `users/suggested?page=${page}&per_page=${perPage}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
