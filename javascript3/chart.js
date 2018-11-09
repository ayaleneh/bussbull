'use strict'

let elChartContainer = document.getElementById('chart-container')
let ctx = elChartContainer.getContext('2d')

function displayChart() {
 
  let elChart = new Chart(ctx, {
    type: 'bar',
    
    data: {
      labels: [funny_image[0].title, funny_image[1].title,
        funny_image[2].title,funny_image[3].title
        ,funny_image[4].title,funny_image[5].title
        ,funny_image[6].title,funny_image[7].title
        ,funny_image[8].title,funny_image[9].title
        ,funny_image[10].title,funny_image[11].title
        ,funny_image[12].title,funny_image[13].title
        ,funny_image[14].title,funny_image[15].title
        ,funny_image[16].title,funny_image[17].title
        ,funny_image[18].title,funny_image[19].title
        ,funny_image[20].title],
      datasets: [{
        label: '# of clicks',
        data: [funny_image[0].clicked, funny_image[1].clicked,
          funny_image[2].clicked,funny_image[3].clicked
          ,funny_image[4].clicked,funny_image[5].clicked
          ,funny_image[6].clicked,funny_image[7].clicked
          ,funny_image[8].clicked,funny_image[9].clicked
          ,funny_image[10].clicked,funny_image[11].clicked
          ,funny_image[12].clicked,funny_image[13].clicked
          ,funny_image[14].clicked,funny_image[15].clicked
          ,funny_image[16].clicked,funny_image[17].clicked
          ,funny_image[18].clicked,funny_image[19].clicked
          ,funny_image[20].clicked],
          backgroundColor: 'red',
          borderColor: 'red',
          borderWidth: 0.5   
      },{
      label: '# of shown',
      data: [funny_image[0].shown, funny_image[1].shown,
        funny_image[2].shown,funny_image[3].shown
        ,funny_image[4].shown,funny_image[5].shown
        ,funny_image[6].shown,funny_image[7].shown
        ,funny_image[8].shown,funny_image[9].shown
        ,funny_image[10].shown,funny_image[11].shown
        ,funny_image[12].shown,funny_image[13].shown
        ,funny_image[14].shown,funny_image[15].shown
        ,funny_image[16].shown,funny_image[17].shown
        ,funny_image[18].shown,funny_image[19].shown
        ,funny_image[20].shown],  
      backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 0.5}]
      
    

    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  })
}