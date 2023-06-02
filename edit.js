var editPost = (e) => {
  var postDiv = e.parentElement.parentElement;
  var titleText = postDiv.querySelector('h2').innerHTML; // 글의 제목
  var contentText = postDiv.querySelector('p').innerHTML; // 글의 내용

  localStorage.setItem("editPostTitle", titleText);
  localStorage.setItem("editPostContent", contentText);
  localStorage.removeItem(titleText); // 수정 전의 데이터를 삭제함

  window.location.href = "index.html";
};