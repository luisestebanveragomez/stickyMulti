Configuration plugin

add css:

.stickyFixed{
  position: fixed;
  top: 0;
}
.stickyFixed.stickyFinish{
  position: absolute;
  bottom: 0;
  top: initial;
}
.boxFixed{
  position: relative;
  width: 100%;
  height: 1px;
}


settings js:
  $(element).stickyMulti({
    parentEl: '',  //Mandatory parameter
    classFixed: '', default 'stickyFixed'
 	  classFinish: '' default 'stickyFinish'
  });
