#include <wayland-client.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/socket.h>
#include <sys/un.h>
#include <limits.h>


#ifndef JS_EXTERNS_H_   
#define JS_EXTERNS_H_

int connect_to_env();
int draw_window();

#endif // JS_EXTERNS_H_
