var name;var pass;
var m=0;
function tip()
{
	alert("由于无法连接到数据库，账号和密码依旧是admin");
}
function b()
{
	window.location="sign in.html";
}
function check()
{
	var m=document.getElementById('name').value;
	var n=document.getElementById('password').value;
	
		
	if(m=="")
	{
		document.getElementById('remind_1').innerHTML="请输入用户名";
	}
	if(n=="")
	{
		document.getElementById('remind_2').innerHTML="请输入密码";
	}
	if(m!="" && n!="")
	{
		if(m=="admin" && n=="admin")
		{
			window.location="wel.html";
		}
		else
		{
			lostfocus1();
			lostfocus2();
		}
	}
	
}
function add()
{
	name=document.getElementById('addname').value;
	pass=document.getElementById('addpassword').value;
	if(name!="" && pass!="")
	{
		window.location="sign in.html";
	}
}
function addlostfocus1()
{
	var m=document.getElementById('addname').value;
	if(m=="")
	{
		document.getElementById('remind_1').innerHTML="请输入用户名";
		document.getElementById('addname').style.marginBottom=document.getElementById('addname').style.marginBottom-20+"px";
	}
	else
	{
		document.getElementById('remind_1').innerHTML="";
//		document.getElementById('addname').style.marginBottom=document.getElementById('addname').style.marginBottom-20+"px";
	}
}
function addlostfocus2()
{
	var n=document.getElementById('addpassword').value;
	if(n=="")
	{
		document.getElementById('remind_2').innerHTML="请输入密码";
		document.getElementById('addpassword').style.marginBottom=document.getElementById('addpassword').style.marginBottom-20+"px";
	}
	else
	{
		document.getElementById('remind_2').innerHTML="";
//		document.getElementById('addpassword').style.marginBottom=document.getElementById('addpassword').style.marginBottom-20+"px";
	}
}
function lostfocus1()
{
	var m=document.getElementById('name').value;
	if(m=="admin")
	{
		document.getElementById('remind_1').innerHTML="";
		document.getElementById('name').style.marginBottom=document.getElementById('name').style.marginBottom-20+"px";
	}
	else
	{
		document.getElementById('remind_1').innerHTML="用户名错误";
		document.getElementById('name').style.marginBottom=document.getElementById('name').style.marginBottom-20+"px";
	}
}
function lostfocus2()
{
	var m=document.getElementById('password').value;
	if(m=="admin")
	{
		document.getElementById('remind_2').innerHTML="";
		document.getElementById('password').style.marginBottom=document.getElementById('password').style.marginBottom-20+"px";
	}
	else
	{
		document.getElementById('remind_2').innerHTML="密码错误";
		document.getElementById('password').style.marginBottom=document.getElementById('password').style.marginBottom-20+"px";
	}
}
function getfocus1()
{
	document.getElementById('remind_1').innerHTML="";
}
function getfocus2()
{
	document.getElementById('remind_2').innerHTML="";
}
function welgoto()
{
	var a=setInterval("goto()",1000);
}
function goto()
{
	m=m+1;
	if(m==2)
	{
		window.location="index.html";
	}
}

