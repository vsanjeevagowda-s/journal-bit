import fetchIntercept from 'fetch-intercept';

const handleRejectedResponses = (response) => {
  switch (response.status) {
    case 422:
    case 401:
    case 400:
      return response.json()
        .then(data => {
          debugger
          return Promise.reject(data.error)});
    default:
      return response;
  }
};

export default fetchIntercept.register({
  request: function (url, config) {
    return [url, config];
  },

  requestError: function (error) {
    return Promise.reject(error);
  },

  response: function (response) {
    return handleRejectedResponses(response);
  },

  responseError: function (error) {
    return Promise.reject(error);
  }
});