export const init = () => {
  const jsiExterns = {
    connect_to_env: globalThis.JsWayland._connect_to_env,
  };

  const print_hello_world = () => {
    jsiExterns.connect_to_env();
  };
  return { print_hello_world };
};
