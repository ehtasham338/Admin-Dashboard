



function toggleMenu(event, menuId) {
    event.preventDefault();
    let menu = $('#' + menuId);
    let parent = menu.closest('.nav-item-wrap');
    let icon = parent.find('.nav-plus');

    if (parent.hasClass('open')) {
        menu.slideUp();
        parent.removeClass('open');
        icon.removeClass('fa-minus').addClass('fa-plus');
    } else {
        $('.sub-menu').slideUp();
        $('.nav-item-wrap')
            .removeClass('open')
            .find('.nav-plus')
            .removeClass('fa-minus')
            .addClass('fa-plus');

        menu.slideDown();
        parent.addClass('open');
        icon.removeClass('fa-plus').addClass('fa-minus');
    }
}

/* FIX: ye part missing tha — isi wajah se .content-area ki
   margin-left rule kabhi trigger hi nahi hoti thi */
$('#sidebar').on('mouseenter', function () {
    $('body').addClass('sidebar-hover');
});

$('#sidebar').on('mouseleave', function () {
    $('body').removeClass('sidebar-hover');

    $('.sub-menu').slideUp();
    $('.nav-item-wrap').removeClass('open');
    $('.nav-plus').removeClass('fa-minus').addClass('fa-plus');
    $('#sidebar a').removeClass('active');
});

$('#sidebar a').on('click', function () {
    $('#sidebar a').removeClass('active');
    $(this).addClass('active');
});

$(document).on('click', '#dashboardBtn', function () {
    window.location.href = "index.html";
});




document.querySelectorAll('.sub-menu').forEach(function (subMenu) {
  subMenu.querySelectorAll('li').forEach(function (item) {
    item.addEventListener('click', function () {
      // pehle is sub-menu ke sab li se class hata do
      subMenu.querySelectorAll('li').forEach(function (li) {
        li.classList.remove('active-click');
      });
      // ab jis li par click hua usay class de do
      this.classList.add('active-click');
    });
  });
});




document.querySelectorAll('.sub-menu li').forEach(li => li.classList.remove('active'));
clickedLi.classList.add('active');








/* toggle audience segment section in form */

function toggleAudience() {

  const selected = document.querySelector(
    'input[name="sendTo"]:checked'
  ).value;

  const segmentSection =
    document.getElementById("segmentSection");

  if (selected === "segment") {
    segmentSection.style.display = "block";
  } else {
    segmentSection.style.display = "none";
  }
}







const buttons = document.querySelectorAll(".os-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {

        // Sab buttons se active hata do
        buttons.forEach(btn => btn.classList.remove("active"));

        // Jis par click hua us par active laga do
        this.classList.add("active");

    });
});

/* open push form jquery*/



    function openpushform() {
    window.location.href = "form.html";
}



/* fil einput*/

$("#bannerFile").on("change", function () {

    if (this.files.length > 0) {
        $("#fileName").val(this.files[0].name);
    } else {
        $("#fileName").val("");
    }

});

/* accodian button */
$(document).ready(function () {

    $("#collapse1").on("show.bs.collapse", function () {
        $("#accBtn1 .acc-icon").html("-");
    });

    $("#collapse1").on("hide.bs.collapse", function () {
        $("#accBtn1 .acc-icon").html("+");
    });

    

     // ITEM 2
    $("#collapse2").on("show.bs.collapse", function () {
        $("#accBtn2 .acc-icon").html("-");
    });

    $("#collapse2").on("hide.bs.collapse", function () {
        $("#accBtn2 .acc-icon").html("+");
    });

    // ITEM 3
    $("#collapse3").on("show.bs.collapse", function () {
        $("#accBtn3 .acc-icon").html("-");
    });

    $("#collapse3").on("hide.bs.collapse", function () {
        $("#accBtn3 .acc-icon").html("+");
    });

});






/* garph logic */


$(document).ready(function () {

    const chartElement = document.querySelector("#engagementChart");

    if (chartElement) {

        var options = {
            series: [40, 30, 20, 15, 25],

            chart: {
                type: "radialBar",
                height: 150,
                width: "100%",
                redrawOnWindowResize: true
            },

            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "20%"
                    }
                }
            },

            labels: ['Push', 'Email', 'SMS', 'Web', 'In-App']
        };

        var chart = new ApexCharts(chartElement, options);
        chart.render();
    }

});





$(document).ready(function () {

    // Page load par height set karo
    updateTableHeight();

    // Window resize hone par dobara set karo
    $(window).on("resize", function () {
      updateTableHeight();
    });

    // Height calculate karne wala function
    function updateTableHeight() {
      $(".table-responsive").attr(
        "style",
        "height: " + (window.innerHeight - 262) + "px !important;"
      );
    }

  });
/* table 
$(function () {

  function updateTableHeight() {
    var h = $(window).height();
    var tableHeight = h - 350;

    console.log("Height:", tableHeight);

    $(".table-responsive").css({
      "max-height": tableHeight + "px",
      "overflow-y": "auto",
      "display": "block"
    });
  }

  updateTableHeight();
  $(window).on("resize", updateTableHeight);

});

*/



/* tabs */

$(".nav-link").on("click", function () {

  let text = $(this).text().trim().toLowerCase();

  $("tbody tr").each(function () {

    let type = $(this).attr("data-type");

    // ALL tab
    if (text === "all") {
      $(this).show();
    }
    else {
      if (type === text) {
        $(this).show();
      } else {
        $(this).hide();
      }
    }

  });

});