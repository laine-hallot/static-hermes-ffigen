{
  inputs = {
    nixpkgs.url = "nixpkgs/nixos-25.11";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, flake-utils, ... }@inputs:
    # Now eachDefaultSystem is only using ["x86_64-linux"], but this list can also
    # further be changed by users of your flake.
    flake-utils.lib.eachDefaultSystem (system: let pkgs = (import (inputs.nixpkgs) { inherit system; }); in {
      devShell = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs_24
          clang_18
          cmake
          ninja
          python315
          icu77
          tzdata
          readline
          zip
        ];
      };
    });
}
