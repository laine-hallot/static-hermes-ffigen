#include <wayland-client.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/socket.h>
#include <sys/un.h>
#include <limits.h>
#include <stdbool.h>

/* void imaxdiv_cwrap(struct * a0, long int a1, long int a2){
  *a0 = imaxdiv(a1, a2);
}
struct _IO_FILE* fopencookie_cwrap(void* a0, char* a1, struct _IO_cookie_io_functions_t* a2){
  return fopencookie(a0, a1, *a2);
}
void div_cwrap(struct * a0, int a1, int a2){
  *a0 = div(a1, a2);
}
void ldiv_cwrap(struct * a0, long int a1, long int a2){
  *a0 = ldiv(a1, a2);
}
void lldiv_cwrap(struct * a0, long long int a1, long long int a2){
  *a0 = lldiv(a1, a2);
}
 */