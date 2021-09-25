export const API_KEY = "https://api.thecatapi.com/v1/";

export const fetchHandler = (limit, catValue, setImages) => {
  fetch(
    `${API_KEY}images/search?limit=${limit}&page=1&category_ids=${catValue}`
  )
    .then((resp) => resp.json())
    .then((data) => setImages(data.map((d) => d.url)));
};

export const fetchCategory = (setCategory) => {
  fetch(`${API_KEY}categories`)
    .then((resp) => resp.json())
    .then((data) => setCategory(data.map((d) => d.id)));
};
