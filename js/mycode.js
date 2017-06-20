var m=0;
function code()
{
	var a=document.getElementById('font1');
	var b=document.getElementById('font2');
	var c=document.getElementById('font3');
	a.style.display='none';
	b.style.display='none';
	c.style.display='none';
	var m=0;
//	var n=setInterval("
//		m=m+1;
//	",1000);
//	if(m==10)
//	{
//		clock();
//		window.clearInterval(n);
//		
//	}
	var n=window.setInterval("scr()",3000);
}
function scr()
{
	m=m+1;
	if(m%2==1)
	{clock1();}
	else
	{
		clock2();
	}
	
	
}
function clock1()
{
	var a=document.getElementById('font1');
	var b=document.getElementById('font2');
	var c=document.getElementById('font3');
	var d=document.getElementById('code1');
	var e=document.getElementById('code2');
	var f=document.getElementById('code3');
	a.style.display='block';
	b.style.display='block';
	c.style.display='block';
	d.style.visibility='hidden';
	e.style.visibility='hidden';
	f.style.visibility='hidden';
	
}
function clock2()
{
	var a=document.getElementById('font1');
	var b=document.getElementById('font2');
	var c=document.getElementById('font3');
	var d=document.getElementById('code1');
	var e=document.getElementById('code2');
	var f=document.getElementById('code3');
	a.style.display='none';
	b.style.display='none';
	c.style.display='none';
	d.style.visibility='visible';
	e.style.visibility='visible';
	f.style.visibility='visible';
	
}
