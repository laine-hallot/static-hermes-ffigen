mkdir -p ./dist/c
clang -c -o dist/c/js_externs_cwrap.o bindgen-out/js_externs_cwrap.c -fPIC
clang -c -o dist/c/js_externs.o src/js_externs.c -fPIC
ar r dist/c/libjswayland.a dist/c/js_externs_cwrap.o dist/c/js_externs.o

# npx shermes -typed -c --exported-unit=libjswayland bindgen-out/js_externs.js src/helper.js \
# -Xes6-block-scoping -Xline-directives \
# -o dist/c/libjswayland.o \
# -l dist/c/js_externs_cwrap.a

#ar r dist/c/libjswayland.a dist/c/libjswayland.o dist/c/js_externs_cwrap.o

npx shermes run.ts bindgen-out/js_externs.js src/helper.js -typed  \
-Xes6-block-scoping \
-o run.o \
-Ldist/c \
-ljswayland


#rm dist/c/libjswayland.o dist/c/js_externs_cwrap.o dist/c/hello-world.o dist/c/libjswayland-temp.a