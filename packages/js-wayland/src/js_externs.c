#include <wayland-client.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/socket.h>
#include <sys/un.h>
#include <limits.h>

#include "js_externs.h"

int connect_to_env() {
    char *wayland_socket = getenv("WAYLAND_SOCKET");
    int fd;
    
    if (wayland_socket != NULL) {
        fd = atoi(wayland_socket);
        unsetenv("WAYLAND_SOCKET");
        
        int flags = fcntl(fd, F_GETFD);
        fcntl(fd, F_SETFD, flags | FD_CLOEXEC);
    } else {
        char *wayland_display = getenv("WAYLAND_DISPLAY");
        char socket_path[PATH_MAX];
        
        if (wayland_display[0] == '/') {
            strcpy(socket_path, wayland_display);
        } else {
            char *xdg_runtime_dir = getenv("XDG_RUNTIME_DIR");
            sprintf(socket_path, "%s/%s", xdg_runtime_dir, wayland_display);
        }
        
        fd = socket(AF_UNIX, SOCK_STREAM, 0);
        
        struct sockaddr_un addr;
        memset(&addr, 0, sizeof(addr));
        addr.sun_family = AF_UNIX;
        strcpy(addr.sun_path, socket_path);
        
        connect(fd, (struct sockaddr *)&addr, sizeof(addr));
    }
    
    return fd;
}
