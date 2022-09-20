/*

Question 1

Given the following array and implement the table dynamically

*/

const mainTag = document.createElement("main");
document.getElementsByTagName("body")[0].append(mainTag);

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

function createStudentTable(data) {
  let tableTag = document.createElement("table");
  tableTag.id = "students";

  // Add first Head
  let trTag = document.createElement("tr");

  for (let thhead of data.tableHeader) {
    let tmpTh = document.createElement("th");
    tmpTh.textContent = thhead;
    trTag.appendChild(tmpTh);
  }
  tableTag.appendChild(trTag);

  // Add Data
  for (let td of data.tableContent) {
    let trTag2 = document.createElement("tr");

    Object.values(td).forEach((value, index) => {
      let tmptd = document.createElement("td");
      if (index === 2) {
        tmptd.textContent = value.replace(/\s+/g, "");
      } else {
        tmptd.textContent = value;
      }
      trTag2.append(tmptd);
    });
    tableTag.appendChild(trTag2);
  }

  return tableTag;
}

let tableTag = createStudentTable(tableInfo);

mainTag.appendChild(tableTag);

/*

Question 2
Given the array and generate order list and unordered list dynamically as following:

*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

function createList(data, tag = "ol") {
  let listTag = document.createElement(tag);

  for (let text of data) {
    let tmpLi = document.createElement("li");
    tmpLi.textContent = text;
    listTag.appendChild(tmpLi);
  }

  return listTag;
}

let orderlist = createList(list);
let unorderlist = createList(list, "ul");

mainTag.appendChild(orderlist);
mainTag.appendChild(unorderlist);

/*

Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list

*/

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

function createDropdown(arr) {
  let selectTag = document.createElement("select");
  selectTag.id = "dropdown";
  selectTag.name = "city";

  for (let data of arr) {
    let optionTag = document.createElement("option");
    optionTag.value = data.value;
    optionTag.textContent = data.content;

    selectTag.appendChild(optionTag);
  }

  return selectTag;
}

let dropdown = createDropdown(dropDownList);
mainTag.appendChild(dropdown);
