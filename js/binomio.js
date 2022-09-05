//Valores por defecto:
var n=2;
var t1="a";
var t2="b";
var sig="+";
var nucom=new Array()			 

function Salida(){ 
    Ventana13=open("","ventana13","titlebar=no,resizable,scrollbars,height=300,width=800,screenX=100, screenY=200"); 
    Ventana13.document.write("<p> Resultado: ("+t1+sig+t2+")<sup>"+n+"</sup> = ");
    if (t1.length > 1) {t1="("+t1+")"};
    if (t2.length > 1) {t2="("+t2+")"};
    for (var i=0; i <= n; i++) 
      { 	k = n-i;
        Ventana13.document.write("(<sup>"+n+"</sup><sub>"+i+"</sub>)");
        Ventana13.document.write(t1+"<sup>"+k+"</sup>"+t2+"<sup>"+i+"</sup> ");
        if (i<n)
         { if ((i%2) == 0)
            {Ventana13.document.write(sig)}
            else
            {Ventana13.document.write("+")}
          }
      }

    Ventana13.document.write("<BR> ............   = ");

    for (var i=0; i <= n; i++) 
      { 	k = n-i;
        Ventana13.document.write(nucom[i]);
        Ventana13.document.write(t1+"<sup>"+k+"</sup>"+t2+"<sup>"+i+"</sup> ");
        if (i<n)
          {if ((i%2) == 0)
            {Ventana13.document.write(sig)}
            else
            {Ventana13.document.write("+")}
          }
      }

    Ventana13.document.write("<br>");
    Ventana13.focus(); 
}

function Cierraventana13(){ 
Ventana13.close(); 
} 



function calcnucom()	
{
for (var i=0; i < n; i++)  {nucom[i]=0}
nucom[n]=1
for (var i=0; i < n; i++)  
    { for (var j=0; j < n; j++)  
        { nucom[j]+=nucom[j+1]}
    }
}

function potenbi(form)
{
// Controlando la entrada
 
  n=eval(form.expo.value)
  t1=form.term1.value;
  t2=form.term2.value;
  sig=form.signo.value;

  if ((sig != "+") && (sig != "-"))
    {alert("el signo sólo puede ser + o -") }
    else {if (n<2 || n>20)
          {alert("el exponente ha de estar entre 2 y 20") }
          else 
            {
//	 alert("la entrada es correcta")
             calcnucom()	
//			alert("los números combinat. son "+nucom.join("-"))
            
            Salida()


              }
        }
}