#include <SDL3/SDL.h>
#include <stdatomic.h>
#include <stdio.h>

int main(void) {
  // Init returns true on success, false on failure (SDL3)
  if (!SDL_Init(SDL_INIT_VIDEO)) {
    const char *err = SDL_GetError();
    fprintf(stderr, "SDL_Init failed: %s\n",
            err && *err ? err : "(no message)");
    return 1;
  }

  SDL_Window *win =
      SDL_CreateWindow("SDL3 test", 640, 480, SDL_WINDOW_RESIZABLE);
  if (!win) {
    const char *err = SDL_GetError();
    fprintf(stderr, "SDL_CreateWindow Error: %s\n",
            err && *err ? err : "(no message)");
    SDL_Quit();
    return 1;
  }

  SDL_Delay(2000);
  SDL_DestroyWindow(win);
  SDL_Quit();
  return 0;
}
