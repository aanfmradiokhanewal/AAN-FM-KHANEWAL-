.slider{
height:80vh;
position:relative;
overflow:hidden;
}

.slide{
position:absolute;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
background:linear-gradient(135deg,#8B0000,#111);
opacity:0;
transition:1s;
padding:20px;
}

.slide.active{
opacity:1;
}

.slide h1{
font-size:55px;
margin-bottom:20px;
}

.slide p{
font-size:24px;
  }
