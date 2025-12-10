declare global {
  namespace globalThis {
    function _connect_to_env(): c_int;
    var JsWayland: {
      _connect_to_env: () => void;
    };
  }
}

export {};
