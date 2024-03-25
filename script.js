function q1() {
    $.ajax({
    type: "GET",
    url: "http://spartacodingclub.shop/sparta_api/rtan/en",
    data: {},
    success: function (response) {
      let imgurl = response['url'];
      $("#img-rtan").attr("src", imgurl);

      let msg = response['msg'];
      $("#text-rtan").text(msg);
    }
  })
  }