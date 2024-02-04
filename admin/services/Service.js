const BASE_URL = "https://65a42889a54d8e805ed489c7.mockapi.io/phoneAdmin";

// GET
let getListPhoneApi = () => {
  return axios({
    url: BASE_URL,
    method: "GET",
  });
};
// console.log("😢 ~ getListPhoneApi ~ getListPhoneApi", getListPhoneApi);

// DELETE
let deletePhoneApi = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  });
};
// console.log("😢 ~ deletePhoneApi ~ deletePhoneApi", deletePhoneApi);

// POST
let createPhoneApi = (dataPhone) => {
  return axios({
    url: BASE_URL,
    method: "POST",
    data: dataPhone,
  });
};
// console.log("😢 ~ createPhoneApi ~ createPhoneApi", createPhoneApi);

// PUT
let updatePhoneApi = (data) => {
  return axios({
    url: `${BASE_URL}/${data.id}`,
    method: "PUT",
    data: data,
  });
};
// console.log("😢 ~ updatePhoneApi ~ updatePhoneApi", updatePhoneApi);

// GET: id
let getDetailPhoneApi = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
};
// console.log("😢 ~ getDetailPhoneApi ~ getDetailPhoneApi", getDetailPhoneApi);

let phoneSer = {
  getListPhoneApi,
  deletePhoneApi,
  createPhoneApi,
  updatePhoneApi,
  getDetailPhoneApi,
};
// console.log("😢 ~ phoneService", phoneService);

export default phoneSer;
