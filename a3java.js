land_right = {
    'left': '25em',
    'bottom': '8em'
    }
  land_left = {
    'left': '5em', 
    'bottom': '8em'
  }
  frog_in_air = {
    'left': '15em',
    'bottom': '15em'
  }
  happyfrog_jump_right = function() {
    $('#happyfrog_p1').animate(frog_in_air, 1000, 'linear', happyfrog_land_right)
  }
  happyfrog_land_right = function() {
    $('#happyfrog_p1').animate(land_right, 700, 'linear', happyfrog_jump_left)
  }
  happyfrog_jump_left = function() {
    $('#happyfrog_p1').animate(frog_in_air, 1000, 'linear', happyfrog_land_left)
  }
  happyfrog_land_left = function() {
    $('#happyfrog_p1').animate(land_left, 700, 'linear', happyfrog_jump_right)
  }
  
  sadfrog_close = function() {
    $('#sadfrog_p2').animate({'left': '15em', 'bottom': '8em', 'width': '300px'}, 2000)
    setTimeout(sadfrog_far, 4000)
    }
  sadfrog_far = function() {
    $('#sadfrog_p2').animate({'left': '40em', 'bottom': '100%', 'width': '0'}, 2000, 'linear', sadfrog_reset)
  }
  sadfrog_reset = function() {
    $('#sadfrog_p2').animate({'left': '5em', 'bottom': '100%', 'width': '0'}, 1000, 'linear', sadfrog_close)
  }
  
  sadfrog_peek = function() {
    $('#sadfrog_p3').animate({'right': '83%'}, 2000)
  }
  flyswarm_rightp3 = function() {
    $('#flyswarm_p3').animate({'left': '40em', 'top': '8em'}, 900, 'linear', flyswarm_leftp3)
  }
  flyswarm_leftp3 = function() {
    $('#flyswarm_p3').animate({'left': '0em', 'top': '1em'}, 900, 'linear', flyswarm_rightp3)
  }
  
  to_happyfrog = function() {
    $('#tonguefrog_p4').attr('src', 'frog_happy.svg')
    setTimeout(to_tonguefrog, 1000)
  }
  to_tonguefrog = function() {
    $('#tonguefrog_p4').attr('src', 'frog_tongue.svg')
    setTimeout(to_happyfrog, 2000)
  }
  flyswarm_rightp4 = function() {
    $('#flyswarm_p4').animate({'left': '20em', 'top': '5em'}, 1000, 'linear', flyswarm_leftp4)
  }
  flyswarm_leftp4 = function() {
    $('#flyswarm_p4').animate({'left': '-2em', 'top': '5em'}, 1000, 'linear', flyswarm_rightp4)
  }
    
  to_p2 = function() {
    $('#p1').animate({'left': '100%', 'opacity': '0', 'display': 'none'}, 700)
    $('#p2').show().animate({'opacity': '1', 'display': 'block', 'top': '0'}, 2000)
    $('#continue').off()
    $('#continue').click(to_p3)
    $('#sadfrog_p2').css({'left': '5em', 'bottom': '100%', 'width': '0'})
    setTimeout(sadfrog_close, 2000)
  }
  to_p3 = function() {
    $('#p2').animate({'left': '100%', 'opacity': '0', 'display': 'none'}, 700)
    $('#p3').show().animate({'opacity': '1', 'display': 'block', 'top': '0'}, 2000)
    $('#continue').off()
    $('#continue').click(to_p4)
    $('#sadfrog_p3').css({'right': '100%', 'bottom': '8em', 'width': '200px'})
    setTimeout(sadfrog_peek, 3000)
    flyswarm_rightp3()
  }
  to_p4 = function() {
    $('#p3').animate({'left': '100%', 'opacity': '0', 'display': 'none'}, 700)
    $('#p4').show().animate({'opacity': '1', 'display': 'block', 'top': '0'}, 2000)
    $('#continue').off()
    $('#continue').click(to_p5)
    $('#tonguefrog_p4').css({'left': '15em', 'bottom': '8em'})
    to_tonguefrog()
    flyswarm_rightp4()
  }
  to_p5 = function() {
    $('#p4').animate({'left': '100%', 'opacity': '0', 'display': 'none'}, 700)
    $('#p5').show().animate({'opacity': '1', 'display': 'block', 'top': '0'}, 2000)
  }
  setup = function() {
    $('#continue').click(to_p2)
    $('section').css({'opacity': '0', 'top': '100%'})
    $('#p1').show().animate({'opacity': '1', 'top': '0'}, 2000)
    $('#happyfrog_p1').css({'left': '5em', 'bottom': '8em'})
    happyfrog_jump_right()
  }
  jQuery(document).ready(setup)
  