cmake_minimum_required(VERSION 3.20)
project(SDL3Test C)

# Use C17 for modern syntax and warnings
set(CMAKE_C_STANDARD 17)
set(CMAKE_C_STANDARD_REQUIRED ON)

# For Helix / clangd to work well
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

# Let CMake know where Homebrew installs packages
set(CMAKE_PREFIX_PATH "/opt/homebrew")

# Try to find the SDL3 package installed by Homebrew
find_package(SDL3 REQUIRED CONFIG)

# Create an executable from main.c
add_executable(sdl3_test main.c)

# Link SDL3 to your executable
target_link_libraries(sdl3_test PRIVATE SDL3::SDL3)
