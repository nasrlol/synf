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

float cpu_frequency(void);
char* cpu_name(void);

float cpu_frequency(void)
{
    uint64_t freq = 0;
    size_t size = sizeof(freq);

    if (sysctlbyname("hw.cpufrequency", &freq, &size, NULL, 0) < 0)
    {
        perror("sysctl");
    }
    return freq;
}

char* cpu_name(void){

    size_t size = 0;

    if (sysctlbyname("machdep.cpu.brand_string", NULL, &size, NULL, 0) < 0)
        perror("sysctl"); 


    char *name = malloc(size);

    if(sysctlbyname("machdep.cpu.brand_string", &name, &size, NULL, 0) < 0){
        perror("sysctl");
        free(name);
        return NULL;
    }

   return name;  
}

#endif

