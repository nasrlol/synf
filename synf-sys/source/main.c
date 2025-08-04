#include <stdio.h>
#include "cpu.h"

int main(int argc, char* argv[]) {

    if (argc > 0)
    {
        switch (*argv[1]){
            
            case "name":
                char *name = cpu_name(void);
                printf("%s", &name);
                break;
            case "frequency": 
                float frequency = cpu_freq(void);
                printf("%f", frequency);
                break;
            default: 
                return 1;
        }
        return 1;
    }

    return 0;
}
