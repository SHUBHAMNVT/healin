// toggle-btn-js
$("button.toggle-button").click(function(){
  $(this).toggleClass('navbar-closed');
  $("html").toggleClass("myClass");
  $("#side_bar").toggleClass('hide-sidebar');
  $("header").toggleClass('full-width');
  $("section").toggleClass('full-width');
});

// sidebar-link-js
$(function () {
    $('.sidebar-list ul li a').each(function () {         
        if (window.location.pathname.indexOf($(this).attr('href')) > -1) {
            $(this).closest('li').addClass('active');
            return false;
        }
    });
});
// sidebar-link-js


// round-chart-js
$(function() {
  $('#chart_1').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 30,
    lineCap: '', //Can be butt
    barColor: '#FF6A1B',
    trackColor: "rgba(255, 91, 91, 0.15)",
    size: 150,
    rotate: 0,    
    animate: 1000,

    onStep: function(value) {
  this.$el.find('span').text(Math.round(value));
},
onStop: function(value, to) {
  this.$el.find('span').text(Math.round(to));
}    
  });

  $('#chart_2').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 30,
    lineCap: '', //Can be butt
    barColor: '#00B074',
    trackColor: "rgba(0, 176, 116, 0.15)",
    size: 150,
    rotate: 0,    
    animate: 1000,

    onStep: function(value) {
  this.$el.find('span').text(Math.round(value));
},
onStop: function(value, to) {
  this.$el.find('span').text(Math.round(to));
}    
  });

  $('#chart_3').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 30,
    lineCap: '', //Can be butt
    barColor: '#2D9CDB',
    trackColor: " rgba(45, 156, 219, 0.15)",
    size: 150,
    rotate: 0,    
    animate: 1000,

    onStep: function(value) {
  this.$el.find('span').text(Math.round(value));
},
onStop: function(value, to) {
  this.$el.find('span').text(Math.round(to));
}    
  });
});

// bar-chart-js
$(document).ready(function() {

    var ctx = $("#mybarChart")[0].getContext("2d");

    var mybarChart = new Chart(ctx, {
      type: 'bar',
    rows: dataDaily,
      data: {

        display:false,
        labels: ['0', '1' ,'2', '3' , '4' ],
        datasets: [{
          label: 'Candidate A Votes',
          backgroundColor: "#FD3939",
          data: [60,40,60,60],
          setPercentage: [5, 5, 5, 5], // Here is the magic !!!
        }, {
          label: 'Candidate B Votes2',
          backgroundColor: "#6654D4",
          data: [80,65, 25 ],
          setPercentage: [5, 5, 5, 5], // Here is the magic !!!
        }]
      },

      options: {
        legend: {
          display: false,
          position: 'top',
          labels: {
            fontColor: "#000080",
          }
        },
        


     scales: {
        xAxes: [{
             categoryPercentage: 1,
              barPercentage: 0.4,
            display:false,
          grid: {
            display: false,
            drawBorder: true,
            color: "#F3F2F7",
          },
          ticks: {
            // barThickness : 5,
             padding: 0
          }
        }],
        yAxes: [{
          grid: {
          display: true,
          color: "#F3F2F7",
          drawBorder: false,
        },
        gridLines: {
        color: "#F3F2F7",
      },
          ticks: {
            beginAtZero: true,
            // maxTicksLimit: 100,
            barThickness : 5,
            padding: 0,
            categoryPercentage: 0.6,
            fontSize: 12,
              min: 0,
              max: 80,
              stepSize: 20
          }
        }]
      }
      },
    });






var dataDaily = [
 [60,40,60,60]
];

var dataWeekly = [
      [60,40,60,60]
];

var dataMonthly = [
       [60,40,60,60]
];

$(function () {
    
    // Initial chart
    var mybarChart = c3.generate({
        data: {
            rows: dataDaily,
            type: 'bar'
        }
    });
    
    // Redraw chart depending on which option is selected
    $("#DataType").change(function (evt) {
        var timeSelection = eval( $("#DataType").val() );
        var mybarChart = c3.generate({
            data: {
                rows: timeSelection,
                type: 'bar' 
            }
        });
    });

    
});


    });



// line-graph-js
var config = {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sept','Oct','Nov','Dec'],
      datasets: [{
        label: '2020',        
        borderColor: window.chartColors.blue,
        fill:false,
        data: [
          9000,
          18000,
          17000,
          22000,
          32000,
          38000,
          30000,
          20000,
          19000,
          21000,
          23000,
          22000
        ],
      }, {
        label: '2023',
        borderColor: window.chartColors.orange,
        fill: false,
        data: [
          24000,
          23000,
          10000,
          31000,
          32000,
          20000,
          30000,
          37000,
          28000,
          15000,
          30000,
          32000
        ],
    
      }]
    },
    options: {
      responsive: true,
      title: {
        display: false,       
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
          },           
           
        }],
        yAxes: [{
          display: true,          
          //type: 'logarithmic',                 
            ticks: {
              min: 0,
              max: 40000,
              stepSize: 10000
            },           
          grid: {
            display: true,
            drawBorder: true,
            color: "#F3F2F7",
          },
          gridLines: {
            display: false,
            color:"#F3F2F7",
          },
        }]
      }
    }
  };

  window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
  };

   
   
// area-chart-js
let ctx = document.getElementById("chart").getContext('2d');

var gradientStroke = ctx.createLinearGradient(102,84,212, 0);
gradientStroke.addColorStop(0, "#6654d4");
gradientStroke.addColorStop(1, "#6654d4");

var gradientBkgrd = ctx.createLinearGradient(102,84,212, 400);
gradientBkgrd.addColorStop(0, "rgba(102,84,212,.5)");
gradientBkgrd.addColorStop(1, "rgba(255,255,255,.5)");

let draw = Chart.controllers.line.prototype.draw;
Chart.controllers.line = Chart.controllers.line.extend({
    draw: function() {
        draw.apply(this, arguments);
        let ctx = this.chart.chart.ctx;
        let _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            //ctx.shadowColor = 'rgba(244,94,132,0.8)';
            ctx.shadowBlur = 8;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 6;
            _stroke.apply(this, arguments)
            ctx.restore();
        }
    }
});




var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "friday", "saturday" ],
        datasets: [{
            label: "Income",
            backgroundColor: gradientBkgrd,
            borderColor: gradientStroke,
            data: [5500, 7500,1000, 10000, 6000, 14000, 1500, 7000,20000],
            pointBorderColor: "(102,84,212, 0)",
            pointBackgroundColor: "(102,84,212, 0)",
            pointBorderWidth: 0,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: "(102,84,212, 0)",
            pointHoverBorderWidth: 4,
            pointRadius: 1,
            borderWidth: 5,
            pointHitRadius: 16,
        }]
    },

    // Configuration options go here
    options: {
      tooltips: {
        backgroundColor:'#fff',
        displayColors:false,
           titleFontColor: '#000',
        bodyFontColor: '#000'
        
        },      
      legend: {
            display: false
      },
        scales: {
            xAxes: [{
              
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
              display: false, 
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return (value / 1000) + 'K';
                    }
                }
            }],
        }
    }
});