function aveg(arr)
{
    sumo=0;
    for(var i=0;i<arr.length;i++)
    {
        sumo+=arr[i];
    }
    avg=sumo/arr.length;
    avg=Math.round(avg);
    console.log(avg);
}

s1=[1,1,1,1,1,1];
aveg(s1);
s2=[4,4,4,4,4,4,4,4];
aveg(s2);
s3=[1,235,2,5,4];
aveg(s3);