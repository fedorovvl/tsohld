function FindProxyForURL(url, host)
{
    var proxy_yes = "PROXY 127.0.0.1:8080";
    var proxy_no  = "DIRECT";

    if (shExpMatch(host, "mitm.it") || 
        shExpMatch(host, "static.cdn.ubi.com") || 
        shExpMatch(host, "static10.cdn.ubi.com") || 
        shExpMatch(host, "static13.cdn.ubi.com") || 
        shExpMatch(host, "static14.cdn.ubi.com") || 
        shExpMatch(host, "ubistatic-a.akamaihd.net")) { return proxy_yes; }

    return proxy_no;
}
