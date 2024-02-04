// import phoneSer from "../services/Service.js";
// ***********************************
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

// let phoneSer = {
//   getListPhoneApi,
//   deletePhoneApi,
//   createPhoneApi,
//   updatePhoneApi,
//   getDetailPhoneApi,
// };
// console.log("😢 ~ phoneService", phoneService);

// export default phoneSer;
// ***********************************

// import { renderPhoneList } from "./controller.js";
// ***********************************

// ONSUCCESS
let onSuccess = (message) => {
  Swal.fire({
    title: message,
    text: "You clicked the button!",
    icon: "success",
  });
};

// RENDER TABLE
let renderPhoneList = (phoneArr) => {
  let contentHtml = "";
  phoneArr.reverse().forEach((item) => {
    let trString = `
      <tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td><img src="${item.img}" width="150"/></td>
      <td>${item.desc}</td>
      <td>0</td>
      </tr>
      `;
    contentHtml += trString;
  });
  document.getElementById("listPhone").innerHTML = contentHtml;
};

// GET DETAIL TABLE
let getDataPhoneForm = () => {
  let id = document.getElementById("phoneID").value;
  let name = document.getElementById("phoneName").value;
  let price = document.getElementById("phonePrice").value;
  let screen = document.getElementById("phoneScreen").value;
  let backCamera = document.getElementById("phoneBackCamera").value;
  let frontCamera = document.getElementById("phoneFrontCamera").value;
  let img = document.getElementById("phoneImage").value;
  let desc = document.getElementById("phoneDescription").value;
  let type = document.getElementById("phoneType").value;
  let phone = {
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type,
  };
  console.log("😢 ~ getDetailPhoneForm ~ phone", phone);
  return phone;
};

// SHOW INFO PHONE
let showInfoPhone = (dataPhone) => {
  console.log("😢 ~ showInfoPhone ~ dataPhone", dataPhone);
  document.getElementById("phoneID").value = dataPhone.id;
  document.getElementById("phoneName").value = dataPhone.name;
  document.getElementById("phonePrice").value = dataPhone.price;
  document.getElementById("phoneScreen").value = dataPhone.screen;
  document.getElementById("phoneBackCamera").value = dataPhone.backCamera;
  document.getElementById("phoneFrontCamera").value = dataPhone.frontCamera;
  document.getElementById("phoneImage").value = dataPhone.img;
  document.getElementById("phoneDescription").value = dataPhone.desc;
  document.getElementById("phoneType").value = dataPhone.type;
};
// ***********************************

// Render ra table
const fetchPhoneList = () => {
  getListPhoneApi()
    .then(function (res) {
      // console.log(res);
      renderPhoneList(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
};
fetchPhoneList();

// delete phone
let deletePhone = (id) => {
  deletePhoneApi(id)
    .then(function (res) {
      console.log(res);
      fetchPhoneList();
      onSuccess("Delete Success");
      // $("#exampleModal").modal("hide");
    })
    .catch(function (err) {
      console.log(err);
    });
};
window.deletePhone = deletePhone;

// create phone
let createPhone = () => {
  let dataPhone = getDataPhoneForm();
  createPhoneApi(dataPhone)
    .then(function (res) {
      console.log(res);
      fetchPhoneList();
      onSuccess("Create Success");
      $("#modelId").modal("hide");
    })
    .catch(function (err) {
      console.log(err);
    });
};
window.createPhone = createPhone;

// get detail
let getDetailPhone = (id) => {
  getDetailPhoneApi(id)
    .then(function (res) {
      console.log(res);
      showInfoPhone(res.data);
      $("#modelId").modal("show");
    })
    .catch(function (err) {
      console.log(err);
    });
};
window.getDetailPhone = getDetailPhone;

// update detail
let updateDetailPhone = () => {
  let dataPhone = getDataPhoneForm();
  console.log("😢 ~ updateDetailPhone ~ dataPhone", dataPhone);
  updatePhoneApi(dataPhone)
    .then(function (res) {
      console.log(res);
      fetchPhoneList();
      $("#modelId").modal("hide");
    })
    .catch(function (err) {
      console.log(err);
    });
};
window.updateDetailPhone = updateDetailPhone;
