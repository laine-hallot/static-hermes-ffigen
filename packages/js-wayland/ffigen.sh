set -e

castxml --castxml-gccxml -o - ./src/js_externs.c | ./fix-castxml-out.ts > bindgen-out/js_externs.xml 


npx ffigen js ./bindgen-out/js_externs.xml  ./src/js_externs.h,/usr/include/wayland-client.h,/usr/include/wayland-client-core.h,/usr/include/wayland-client-protocol.h > ./bindgen-out/js_externs.js

npx ffigen cwrap ./bindgen-out/js_externs.xml ./src/js_externs.h,/usr/include/wayland-client.h,/usr/include/wayland-client-core.h,/usr/include/wayland-client-protocol.h > ./bindgen-out/tmp-js_externs_cwrap.c

cat << "EOF" - ./bindgen-out/tmp-js_externs_cwrap.c > ./bindgen-out/js_externs_cwrap.c
#include <wayland-client.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/socket.h>
#include <sys/un.h>
#include <limits.h>
EOF

rm ./bindgen-out/tmp-js_externs_cwrap.c
