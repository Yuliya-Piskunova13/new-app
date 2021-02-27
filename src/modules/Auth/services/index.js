const fetchBase = (url, options) =>
  fetch(url, options).then((response) => {
    if (response.status !== 200) {
      return Promise.reject(response.status);
    }
    return response;
  });

const fetchWithAuth = async (options) => {
  const {
    body,
    contentType = 'application/json',
    headers = {},
    method = 'GET',
    skipContentType = false,
    url,
  } = options;

  if (!skipContentType) {
    headers['Content-Type'] = contentType;
  }

  return fetchBase(url, {
    body,
    headers: {
      ...headers,
    },
    method,
  });
};

export const login = () => {
  const options = {
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
  };

  return fetchWithAuth(options)
    .catch(() => {})
    .then((resp) =>
      resp.json().then((res) => ({
        data: res,
      })),
    )
    .then((resp) => {
      return resp;
    });
};
