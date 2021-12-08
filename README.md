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

[Cariari Painting](https://painting-cariari.vercel.app)

## Inspiration and Snippets

- [Image zoom on hover](https://svelte.dev/repl/069614fef2034ef4b6e1c2593b9b7a63?version=3.44.0)
- [secrtion separations](https://codepen.io/secretgspot/pen/WpxwMo)
- [perspective on scroll](https://codepen.io/secretgspot/pen/dZyQGZ?editors=1100)
- [dynamic use:css](https://svelte.dev/repl/6773e036dab3420d8495c11e37e93ede?version=3.44.2)
- [parallax](https://svelte.dev/repl/37c8d458c312411894110131a6d60c3b?version=3.44.2)
- [Inputs](https://codepen.io/oliviale/pen/wZWywj)

## Tasks

- [ ] lang settings in localStorage?
- [ ] Would parallax be too heavy? [kalso](https://www.kalso.com)
- [ ] Rethink into anim?
- [ ] Rethink Booking section anim?
- [ ] meta lock for zoom of some elements
- [ ] Look into $locales en vs en-US
- [ ] Add imageCompare & Details section on >= Laptop screen

## Lessons

Google sheet form was failing with CORS and not posting data to Sheet because

- formDataNameOrder Column names weren't JSON.stringified(['name', 'phone'])
- fetch Content-type was set to 'application/json' instead of 'Content-Type': 'application/x-www-form-urlencoded'
