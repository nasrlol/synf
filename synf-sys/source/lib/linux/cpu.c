#ifdef __gnu_linux__

#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <unistd.h>

#include <stdio.h>
#include <stdint.h>
#include <sys/types.h>

#define MAXC 1024
#define MAXC_CHAR 256

void cpu_name(void);
void cpu_temperature(unsigned short delay);
char* cpu_frequency(void);

void cpu_name(void)
{
    int buffer_size = 256;
    char cpu_name[buffer_size];

    FILE *fp = fopen("/proc/cpuinfo", "r");
    if (!fp)
        printf("can't open /proc/cpuinfo");

    char line[buffer_size];
    while (fgets(line, sizeof(line), fp))
    {
        if (strncmp(line, "model name", 10) == 0)
        {
            char *colon = strchr(line, ':');
            if (colon)
            {
                snprintf(cpu_name, buffer_size, "%s", colon + 2);
                cpu_name[strcspn(cpu_name, "\n")] = 0;
                int err = fclose(fp);
                if (err != 0)
                    printf("error closing /proc/cpuinfo");

            }
        }
    }

    printf("%s", cpu_name);
    snprintf(cpu_name, buffer_size, "%s", cpu_name);
}

void cpu_temperature(unsigned short delay)
{
    while (1)
    {
        sleep(delay);
        FILE *pf = fopen("/sys/class/thermal/thermal_zone0/temp", "r");
        if (!pf)
            printf("error reading /proc/cpuinfo");

        char buffer[MAXC];
        while (fgets(buffer, sizeof(buffer), pf))
        {
            int a = atoi(buffer);
            a /= 1000;
            printf("%dC\n", a);
            fflush(stdout);
        }
        fclose(pf);
    }
}

char* cpu_frequency(void) {
    char* buffer = malloc(MAXC_CHAR);

    FILE *fp = fopen("/proc/cpuinfo", "r");
    if (!fp) {
        printf("can't open /proc/cpuinfo");
        return NULL;
    }

    while (fgets(buffer, MAXC_CHAR, fp)) {
        if (strstr(buffer, "cpu MHz") != NULL)
        {
            char *colon = strchr(buffer, ':');
            if (colon)
            {
                buffer[strcspn(buffer, "\n")] = 0;
                snprintf(buffer, MAXC_CHAR, "%s", colon);
            }
        }

    fclose(fp);
    return buffer;
    }
    return NULL;
}

#endif
