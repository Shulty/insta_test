const API_KEY = process.env.PIXABAY_API_KEY;

exports.handler = async (event) => {
  const perPage = event.queryStringParameters?.per_page || 10;
  const category = event.queryStringParameters?.category || '';
  
  let url = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&per_page=${perPage}&order=latest`;
  if (category) url += `&category=${category}`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  return {
    statusCode: 200,
    body: JSON.stringify(data.hits)
  };
};