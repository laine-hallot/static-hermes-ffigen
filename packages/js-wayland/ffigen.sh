npx ffigen js ./src/js_externs.c ./src/js_externs.h,/usr/include/wayland-client.h,/usr/include/wayland-client-core.h,/usr/include/wayland-client-protocol.h > ./bindgen-out/js_externs.js

npx ffigen cwrap ./src/js_externs.c ./src/js_externs.h,/usr/include/wayland-client.h,/usr/include/wayland-client-core.h,/usr/include/wayland-client-protocol.h > ./bindgen-out/tmp-js_externs_cwrap.c

cat << "EOF" - ./bindgen-out/tmp-js_externs_cwrap.c > ./bindgen-out/js_externs_cwrap.c

EOF

rm ./bindgen-out/tmp-js_externs_cwrap.c
