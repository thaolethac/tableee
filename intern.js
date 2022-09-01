const listsv = new Set([
  {
    Msv: 21000641,
    Tensv: "Lê Thạc Thao",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nữ",
    Khoa: "Kiểm toán viên",
  },
  {
    Msv: 21000642,
    Tensv: "Lê Thạc Thao",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nữ",
    Khoa: "Kiểm toán viên",
  },
  {
    Msv: 21000245,
    Tensv: "Le Cha Zoo",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nữ",
    Khoa: "Kiểm toán viên",
  },
  {
    Msv: 21000455,
    Tensv: "Lee Min Ho",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nam",
    Khoa: "Diễn viên",
  },
  {
    Msv: 21000102,
    Tensv: "Lee Min Ho",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nam",
    Khoa: "Diễn viên",
  },
  {
    Msv: 21001456,
    Tensv: "Lee Min Ho",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nam",
    Khoa: "Diễn viên",
  },
  {
    Msv: 21000655,
    Tensv: "Lee Min Ho",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nam",
    Khoa: "Diễn viên",
  },
  {
    Msv: 21000365,
    Tensv: "Lee Min Ho",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nam",
    Khoa: "Diễn viên",
  },
  {
    Msv: 21000789,
    Tensv: "Lee Min Ho",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nam",
    Khoa: "Diễn viên",
  },
  {
    Msv: 21000546,
    Tensv: "Lee Min Ho",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nam",
    Khoa: "Diễn viên",
  },
]);
const addtable = document.getElementById("addtable");
const tbody = addtable.getElementsByTagName("tbody");
const tr = addtable.getElementsByTagName("tr");
const addsv = document.getElementById("addsv");
const add = document.getElementById("add");
const update = document.getElementsByClassName("update");
const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2");
const add3 = document.getElementById("add3");
const add4 = document.getElementById("add4");
const add5 = document.getElementById("add5");
const add6 = document.getElementById("add6");
const form = document.getElementById("form");
const dell = document.getElementById("del");

// const checked = document.getElementsByClassName("checkbox");
const array = [];
var delcheck = [];
const delcheckk = [];
const delcheckkk = [];

const addsvs = [];
const filter = [1, 2, 4, 5];
const sinhvien = listsv.values();
for (let i = 0; i < listsv.size; i++) {
  array.push(sinhvien.next().value);
}
for (let i = 0; i < array.length; i++) {
  addtable.innerHTML += `
      <tr id="list${array[i].Msv}">
      <td >
      <input type="checkbox" id="checkbox${array[i].Msv}" onclick="check(this.value, ${array[i].Msv})" />
      </td>
      <td>${array[i].Msv}</td>
      <td>${array[i].Tensv}</td>
      <td>${array[i].Ngaysinh}</td>
      <td>${array[i].Gioitinh}</td>
      <td>${array[i].Khoa}</td>
      <td class="button">
      <button onclick = "Edit(${array[i].Msv})" >Sửa</button>
      </td>
      <td>
      <button onclick = "deletee(${array[i].Msv})" class="deleted">Xóa</button>
      </td>
      </tr>
      `;
}
let Msv = "";
let Tensv = "";
let Ngaysinh = "";
let Gioitinh = "";
let Khoa = "";

add1.addEventListener("change", function () {
  Msv = Number(add1.value.trim());
  if (!Msv && add1.value !== " ") {
    alert("Mời nhập số cô/chàng ạ");
    add1.value = " ";
  }

  console.log(Msv);
});
add2.addEventListener("change", function () {
  Tensv = add2.value.trim();
  console.log(Tensv);
});
add3.addEventListener("change", function () {
  Ngaysinh = add3.value.trim();
  console.log(Ngaysinh);
});
function myFunction(e) {
  Gioitinh = e;
}
add6.addEventListener("change", function () {
  Khoa = add6.value.trim();
  console.log(Khoa);
});
function reset() {
  add1.innerHTML = " ";
}

console.log(addsvs);
addsv.onclick = function () {
  for (let i = 0; i < array.length; i++) {
    if (parseInt(Msv) === array[i].Msv) {
      alert("Bạn đã nhập trùng Mã Sinh Viên!!!");
      return    
    }
    if(parseInt(add1.value) === array[i].Msv){
      alert("Không thể thêm mới khi đang sửa !!!")
      return
    }
  }
  
  if (add1.value === " ") {
    alert("Bạn chưa nhập ô Msv");
    return;
  } else if (add2.value === " ") {
    alert("Bạn chưa nhập ô Tensv");
    return;
  } else if (add3.value === " ") {
    alert("Bạn chưa nhập ô Ngaysinh");
    return;
  } else if (Gioitinh === " ") {
    alert("Bạn chưa tích vào ô Giới tính");
    return;
  } else if (add6.value === " ") {
    alert("Bạn chưa nhập ô Khoa");
    return;
  }

  listsv.add({
    Msv: Msv,
    Tensv: Tensv,
    Ngaysinh: Ngaysinh,
    Gioitinh: Gioitinh,
    Khoa: Khoa,
  });

  array.push(sinhvien.next().value);
  console.log(array);
  addtable.innerHTML += `
    <tr id="list${array[array.length - 1].Msv}">
    <td >
    <input type="checkbox" id="checkbox${
      array[array.length - 1].Msv
    }" onclick="check(this.value, ${array[array.length - 1].Msv})" />
    </td>
    <td>${array[array.length - 1].Msv}</td>
    <td>${array[array.length - 1].Tensv}</td>
    <td>${array[array.length - 1].Ngaysinh}</td>
    <td>${array[array.length - 1].Gioitinh}</td>
    <td>${array[array.length - 1].Khoa}</td>
    <td class="button">
    <button onclick ="Edit(${array[array.length - 1].Msv})">Sửa</button>
    </td>
    <td>
    <button onclick = "deletee(${array[array.length - 1].Msv})">Xóa</button>
    </td>
    </tr>
    `;
  add1.value = "";
  add2.value = "";
  add3.value = "";
  Gioitinh = " ";
  add6.value = "";
  delcheck = [];
  dell.style.display = "";
};

// Tìm kiếm sinh viên

function doxet() {
  const line = document.getElementById(`list${add1.value}`);
  const td = line.getElementsByTagName("td");
  if (add2.value === td[2].textContent) {
    td[2].innerHTML = td[2].textContent;
  } else {
    td[2].innerHTML = Tensv;
  }
  if (add3.value === td[3].textContent) {
    td[3].innerHTML = td[3].textContent;
  } else {
    td[3].innerHTML = Ngaysinh;
  }
  if (Gioitinh === "") {
    td[4].innerHTML = td[4].textContent;
  } else {
    td[4].innerHTML = Gioitinh;
  }
  if (add6.value === td[5].textContent) {
    td[5].innerHTML = td[5].textContent;
  } else {
    td[5].innerHTML = Khoa;
  }
}
function deletee(e) {
  document.getElementById(`list${e}`).remove();
  // console.log(e)
}
function Edit(a) {
  add1.value = a;
  const lines = document.getElementById(`list${add1.value}`);
  const td = lines.getElementsByTagName("td");
  add2.value = td[2].textContent
  add3.value = td[3].textContent
  if(td[4].textContent === "Nam"){
    add4.checked = true
  }
  if(td[4].textContent === "Nữ"){
    add5.checked = true
  }
  add4.attributes = "checked"
  add6.value = td[5].textContent
}
function check(e, m) {
  // for(let i = 0; i<array.length;i++){
  //   delcheck.push(array[i].Msv)
  // }
  const show = document.getElementById(`checkbox${m}`);
  console.log(show.checked + `${m}`);
  if (show.checked) {
    delcheck.push(m);
  } else {
    delcheck = delcheck.filter((x) => x !== m);
  }
  console.log(delcheck);
}
function del() {
  for (let i = 0; i < delcheck.length; i++) {
    console.log(i + "hehe");
    document.getElementById(`list${delcheck[i]}`).remove();
  }
  if (tr.length - 1 === 0) {
    dell.style.display = "none";
  }
  if (!(tr.length - 1 === 0)) {
    dell.style.display = "block";
  }
  delcheck = [];
}
add.onclick = function () {
  add1.value = "";
  add2.value = "";
  add3.value = "";
  Gioitinh = " ";
  add6.value = "";
};
