// RENDER TABLE
export let renderPhoneList = (phoneArr) => {
  let contentHtml = "";
  phoneArr.reverse().forEach((item) => {
    let trString = `
    <tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.img}</td>
    <td>${item.desc}</td>
    <td>0</td>
    </tr>
    `;
    contentHtml += trString;
  });
  document.getElementById("listPhone").innerHTML = contentHtml;
};

// GET DETAIL TABLE
