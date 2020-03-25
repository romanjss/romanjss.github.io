##adfree
wget http://winhelp2002.mvps.org/hosts.txt -O /tmp/adfree-tmp
sed 's/^\(.*\).$/\1/' adfree-tmp > /tmp/adfree
rm -f /tmp/adfree-tmp

## dns restart to update
/etc/init.d/dnsmasq restart