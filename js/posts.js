let posts = [
  {
    id: 1,
    title: "Docker for Rails",
    created_date: "2018-11-03",
    actions: "kumar",
  },
  {
    id: 2,
    title: "HTML5 for Beginners",
    created_date: "2019-01-11",
    actions: "komar",
  },
  {
    id: 3,
    title: "CSS3 for dummies",
    created_date: "2018-05-18",
    actions: "koran",
  },
  {
    id: 4,
    title: "jQuery Master",
    created_date: "2019-10-23",
    actions: "kaplan",
  },
];

const createPostRows = () => {
  $("#posts").html("");
  let rowsHtml = "";
  posts.forEach((post) => {
    rowsHtml += `
      <tr>
        <td>
          ${post.id}
        </td>
        <td>
          ${post.title}
        </td>
        <td>
          ${post.created_date}
        </td>
        <td>
          ${post.actions}
        </td>
      </tr>
    `;
  });
  $("#posts").html(rowsHtml);
};

createPostRows();

$("#sort-button").click(function (event) {
  let order = $("#order").val();
  let column = $("#column").val();
  console.log(column);
  posts = posts.sort(function (a, b) {
    if (order === "asc") {
      return a[column] > b[column] ? 1 : -1;
    } else {
      return a[column] < b[column] ? 1 : -1;
    }
  });
  createPostRows(posts);
});
