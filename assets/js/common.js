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




    function animateCounter(id, start, end, steptime) {
      let obj = document.querySelector(id);
      let current = start;
      let timer = setInterval(() => {
        current = current+10,
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
          obj.textContent = current + "+";
        }
      }, steptime);
    }
    
    animateCounter(".count-digit-1", 0, 7000,5);
    animateCounter(".count-digit-2", 0, 5000,5);
    animateCounter(".count-digit-3", 0, 150,200);




const scriptURL = 'https://script.google.com/macros/s/AKfycbxvuJUMFs3_DhSK4Pc-6OkC-782BDxQsim3q_fZux-wcnExPf9ktscB0zH7BI8N_4TZDg/exec'

const form = document.forms['contact-form']
const formSubmittedSuccessfullyMsg = document.querySelector('.formSubmittedSuccessfullyMsg')
//"Thank you for your message! We will get back to you soon."

form.addEventListener('submit', e => {
  
  e.preventDefault()

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      formSubmittedSuccessfullyMsg.classList.add('active-msg')
      setTimeout(() => {
        formSubmittedSuccessfullyMsg.classList.remove('active-msg')
      }, 10000)
     
    })
    .then(() => form.reset())
    .catch(error => console.error('Error!', error.message))


})


const subscribe_newsletters_msg = document.querySelector('.subscribe-newsletters-msg')
const subscribe_newsletters = document.forms['subscribe-newsletters']
subscribe_newsletters.addEventListener('submit', e => {

  e.preventDefault()


  fetch(scriptURL, { method: 'POST', body: new FormData(subscribe_newsletters) })
    .then(response =>  {
      subscribe_newsletters_msg.classList.add('active-msg')
      setTimeout(() => {
        subscribe_newsletters_msg.classList.remove('active-msg')
      }, 10000)
    })
    .then(() => subscribe_newsletters.reset())
    .catch(error => console.error('Error!', error.message))
})


