var proxy = 'PROXY 113.55.13.136:3128; DIRECT';
var direct = 'DIRECT';
var domains = [
  "acm.org",
  "acs.org",
  "aip.org",
  "sciencemag.org",
];

function FindProxyForURL(url, host) {
   // if matched the list , send to a specific proxy.
   var match = false;
   for(var i = 0; i < domains.length; i++) {
     if (host.endsWith(domains[i])) {
        match = true;
        break;
     }
   }
   if(match) {
    return proxy;
   }
   return direct;
}
