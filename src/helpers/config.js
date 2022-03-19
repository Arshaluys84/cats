export const API_KEY = "https://api.thecatapi.com/v1/";

export const fetchHandler = async (limit, catValue, setImages) => {
  const res = await fetch(
    `${API_KEY}images/search?limit=${limit}&page=1&category_ids=${catValue}`
  )
  const data = await res.json()
  setImages(data.map((el) => el.url))
};

export const fetchCategory = async (setCategory) => {
  const res = await fetch(`${API_KEY}categories`)
  const data = await res.json()
  setCategory(data.map((el) => el.name))

};
