# Painting Cariari 2022

```txt
                   .,=rt;.       .::.
                 ,;==rrrrrt,     :::;
              .,"^===".^lrr===,  :::;
          .,,;:;"=`      ,^====";::`;
     . .,;=="::;    JdMJ,  ..'^";:::;
    .,crr===:    JdMMMMMMMm,    ::::;=z,.
  ,vsszrr=:   JdM ?@MMMM@E WMb,    .;=zlli,
,ttvss+'   ,qMNMMbJ      JdMMMMMn,   ,=lsttlc
zztl+   ,JMMM+  ;?#Mb..dM09+  JNMMMm,   =vttt
zztt  ,MMMMMMMMb,          ,dMMMMMMMMM,  lvzt
zztt  JMMMMMMMMMMb,      ,JMMMMMMMMMMM=  ltzt
zztt  JMMMMMMMMMMMMp    JMMMMMMMMMMMMM=  ltzt
zztt  JMMMMMMMMMMMC      ?NMMMMMMMMMMM=  ltzt
zztt  JMMMMMMMMME          ?NMMMMMMMMM=  ltzt
zztt  JMMMMMMT+    ,JwmJ,    ^?NMMMMMM=  ltzt
zztt  JMMMMMMQJgdMMMMMMMMMMMmJdMMMMMMM+  ltzt
zztt                                     ltzt
zztt  JMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM=  ltzr
rztt  JMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM;  ltzz
lztt  JNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM'  lvzt
;ztvi  .?999999999@MMMMMMM@999999999T.  Jttz+
 =zvlt,,           JMMMMME           .,lsvt=
  ;llszrr==="::;;  JMMMMM=  ===";:::;=rsst+
    ,^+tr==="::;:  JMMMMML  ;=^";:::;=++:
                   dMMMMM$
                  ,MMMMMMM,
                  JMMMMMMML
                  dMMT 7NM$
                  WMF   JMM
                  JMW. ,dME
                   J@MMM0+.
```

[Responsive Props]<https://svelte.dev/repl/dc1e33271aeb4e3c93ffb91948dd7960?version=3.44.0>
[Confeti onClic]<https://svelte.dev/repl/f5ac6c420a7e4143886b20d0d7ecb768?version=3.44.0>
[Text input]<https://svelte.dev/repl/2638aabb4b1e468cb2d6f92801b8684d?version=3.44.0>
[Jumbotron Slides]<https://svelte.dev/repl/d9d2a1714f8c4d39b0695bc49d452d40?version=3.44.0>
[CSS Image compare]<https://svelte.dev/repl/4af1593a6abe4bf4a7b2da33788e9390?version=3.44.0>
[Image zoom on hover]<https://svelte.dev/repl/069614fef2034ef4b6e1c2593b9b7a63?version=3.44.0>
[Checkboxes and Radios]<https://svelte.dev/repl/282adc0305b84213bf9d1fc2a2a0cf33?version=3.44.0>
[svg lines]<https://codepen.io/andyfitz/pen/OJjmYrG>
[secrtion separations]<https://codepen.io/secretgspot/pen/WpxwMo>
[perspective on scroll]<https://codepen.io/secretgspot/pen/dZyQGZ?editors=1100>
[dynamic use:css]<https://svelte.dev/repl/6773e036dab3420d8495c11e37e93ede?version=3.44.2>
[image compare]<https://svelte.dev/repl/4af1593a6abe4bf4a7b2da33788e9390?version=3.44.2>
[parallax]<https://svelte.dev/repl/37c8d458c312411894110131a6d60c3b?version=3.44.2>

[tmp]<https://codepen.io/oscarsaharoy/pen/eYggrme?editors=0010> - custom dropdown class, slider, button
[tmp]<https://codepen.io/mo-ro/pen/MWabWKY> - mouseover reveal
[tmp]<https://codepen.io/oliviale/pen/wZWywj> - form inputs

## Tasks

[ ] on:click for Top/Bottom Logo?
[ ] lang settings in localStorange?

[ ] Find better way to control intersection observer <https://www.kalso.com/>
[ ] think about intro animation and maybe house should slide in from left and slide out to right, work with colors too
[ ] Maybe not have wave animation on BookNow form?

## Lessons

Google sheet form was failing with CORS and not posting data to Sheet because

* formDataNameOrder Column names weren't JSON.stringified(['name', 'phone'])
* fetch Content-type was set to 'application/json' instead of 'Content-Type': 'application/x-www-form-urlencoded'
