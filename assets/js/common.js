 $(document).on("click", ".naccs .menu div", function () {
      var numberIndex = $(this).index();

      if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
    });


    $(window).on("load resize ", function () {
      var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
      $('.tbl-header').css({ 'padding-right': scrollWidth });
    }).resize();


    let sentEmail = document.querySelector(".submit-request")

    sentEmail.addEventListener("click", ()=>{
      let name = document.getElementById("name").value.trim()
      let email = document.getElementById("email").value.trim()
      let website = document.getElementById("website").value.trim()
      let message = document.getElementById("message").value.trim()
      console.log(name,email,website,message)
    })