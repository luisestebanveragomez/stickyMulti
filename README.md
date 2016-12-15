<h1>Configuration plugin</h1>

<h2>add css:</h2>
<pre>
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
</pre>


<h2>settings js:</h2>
<pre>
  $(element).stickyMulti({
    parentEl: '',  //Mandatory parameter
    classFixed: '', default 'stickyFixed'
    classFinish: '' default 'stickyFinish'
  });
</pre>