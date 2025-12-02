export const init = () => {
  const jsiExterns = {
    _print_hello_world: globalThis.testingFFIGen._print_hello_world,
  };

  const print_hello_world = () => {
    jsiExterns._print_hello_world();
  };
  return { print_hello_world };
};
