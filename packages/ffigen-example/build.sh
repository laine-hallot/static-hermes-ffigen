mkdir -p ./dist/c
clang -c -o dist/c/js_externs_cwrap.o bindgen-out/js_externs_cwrap.c -fPIC
clang -c -o dist/c/hello-world.o src/hello-world.c -fPIC
ar r dist/c/libffigenexample-temp.a dist/c/js_externs_cwrap.o dist/c/hello-world.o

npx shermes -typed -c --exported-unit=ffigenexample bindgen-out/js_externs.js src/helper.js \
-Xes6-block-scoping -Xline-directives \
-o dist/c/libffigenexample.o \
-l dist/c/libffigenexample-temp.a


ar r dist/c/libffigenexample.a dist/c/libffigenexample.o dist/c/js_externs_cwrap.o dist/c/hello-world.o
rm dist/c/libffigenexample.o dist/c/js_externs_cwrap.o dist/c/hello-world.o dist/c/libffigenexample-temp.a