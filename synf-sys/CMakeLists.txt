CMAKE_MINIMUM_REQUIRED(VERSION 3.10)

# set the project name
PROJECT(synf)

# add the executable
ADD_EXECUTABLE(main
    source/main.c
    source/lib/osx/cpu.c
)

target_include_directories(main PRIVATE source/lib/osx)
