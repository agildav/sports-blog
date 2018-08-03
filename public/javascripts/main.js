$(document).ready(() => {
  $(".delete-category").on("click", event => {
    const id = $(event.target).attr("data-category-id");
    $.ajax({
      type: "delete",
      url: "/categories/delete/" + id,
      success: res => {
        window.location.href = "/manage/categories";
      },
      error: err => {
        console.log(err);
      }
    });
  });
});

$(document).ready(() => {
  $(".delete-article").on("click", event => {
    const id = $(event.target).attr("data-article-id");
    $.ajax({
      type: "delete",
      url: "/articles/delete/" + id,
      success: res => {
        window.location.href = "/manage/articles";
      },
      error: err => {
        console.log(err);
      }
    });
  });
});
