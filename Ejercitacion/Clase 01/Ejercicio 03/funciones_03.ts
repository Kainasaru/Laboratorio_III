let miFuncion = function (param1 : number , param2? : string ) : void
{
  if(param2 !== undefined )
  {
    for(let i = 0 ; i < param1 ; i++)
    {
      console.log(`${param2} (${i+1})`);
    }
  }
  else
  {
    console.log(`1 / ${param1} = ${1 / param1}`);
  }
}
