#include <SDL3/SDL.h>
#include <stdio.h>

int main(void) {
  // List available video drivers (SDL3)
  int n = SDL_GetNumVideoDrivers();
  printf("Video drivers available (%d): ", n);
  for (int i = 0; i < n; ++i) {
    printf("%s%s", SDL_GetVideoDriver(i), (i + 1 < n) ? ", " : "\n");
  }

  if (SDL_Init(SDL_INIT_VIDEO) != 0) {
    fprintf(stderr, "SDL_Init error: %s\n", SDL_GetError());
    return 1;
  }

  printf("Current video driver: %s\n", SDL_GetCurrentVideoDriver());

  SDL_Window *win = SDL_CreateWindow("SDL3 test", 640, 480, 0);
  if (!win) {
    fprintf(stderr, "SDL_CreateWindow error: %s\n", SDL_GetError());
    SDL_Quit();
    return 1;
  }

  // tiny event loop so the window stays up ~3s or until closed
  Uint64 start = SDL_GetTicks();
  SDL_Event e;
  while (SDL_GetTicks() - start < 3000) {
    while (SDL_PollEvent(&e)) {
      if (e.type == SDL_EVENT_QUIT) {
        start = 0;
        break;
      }
    }
    SDL_Delay(16);
  }

  SDL_DestroyWindow(win);
  SDL_Quit();
  return 0;
}
