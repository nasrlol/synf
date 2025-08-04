#ifdef __APPLE__

#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <stddef.h>

#include <stdio.h>
#include <stdint.h>
#include <sys/types.h>
#include <sys/sysctl.h>

char* hostname();

char* hostname(){

    char* hostname;
    size_t size = sizeof(hostname);

    if (sysctlbyname("kern.hostname", &hostname, &size, NULL, 0) < 0)
    {
        perror("sysctl");
    }
    return hostname;
}

#endif

