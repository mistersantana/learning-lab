#include <SDL3/SDL.h>
#include <stdio.h>

int main(void) {
  if (SDL_Init(SDL_INIT_VIDEO) != 0) {
    printf("SDL Init Error: %s\n", SDL_GetError());
    return 1;
  }

  SDL_Window *win = SDL_CreateWindow("Hello SDL3", 640, 480, 0);
  if (!win) {
    printf("SDL CreateWindow Error: %s\n", SDL_GetError());
    SDL_Quit();
    return 1;
  }

  SDL_Delay(2000);
  SDL_DestroyWindow(win);
  SDL_Quit();
  return 0;
}
