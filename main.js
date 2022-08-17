// Method one 
// document.getElementById ('orangediv').style.background="black"

//ES 5
// var seconddiv = document.getElementById ('orangediv')

// seconddiv.addEventListener('click', function() {
//      alert('Orange div is clicked')})

var seconddiv = document.getElementById ('orangediv')

// popping an alert when clicked
seconddiv.addEventListener('click', function() {
    alert('Orange div is clicked')})

    // Changing the element background
seconddiv.style.background= "blue"

