#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include "../src/hello-world.h"

void print_hello_world_cwrap() {
    print_hello_world();
}