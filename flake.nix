{
  description = "Library monorepo for @rae-hill/* NPM packages";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-26.05";

    flake-parts.url = "github:hercules-ci/flake-parts";

    devshell.url = "github:numtide/devshell";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-parts,
      devshell,
      ...
    }@inputs:
    flake-parts.lib.mkFlake { inherit inputs; } (
      { config, ... }:
      {
        imports = [
          inputs.devshell.flakeModule
        ];

        perSystem =
          { pkgs, system, ... }:
          let
            dprintPlugins = with pkgs.dprint-plugins; [
              dprint-plugin-typescript
              dprint-plugin-json
              dprint-plugin-markdown
              dprint-plugin-toml
              g-plane-malva
              g-plane-markup_fmt
              g-plane-pretty_yaml
            ];
            pluginPaths = map (p: "${p}/plugin.wasm") dprintPlugins;
            pluginArgs = builtins.concatStringsSep " " pluginPaths;
          in
          {
            formatter = pkgs.dprint;

            devshells.default = {
              packages = with pkgs; [
                gitmoji-cli
                # TypeScript/Node development
                dprint
                yarn-berry
                nodejs_26
                typescript
                typescript-language-server
                python3
              ];
              env = [
                {
                  name = "EDITOR";
                  value = "nvim";
                }
                {
                  name = "DPRINT_CACHE_DIR";
                  value = "/home/jacob/.cache/dprint";
                }
              ];
              commands = [
                {
                  name = "fmt";
                  help = "Format code with dprint using Nix store plugins";
                  command = "${pkgs.dprint}/bin/dprint fmt --plugins ${pluginArgs}";
                }
              ];
            };
          };

        systems = [
          "x86_64-linux"
          "aarch64-darwin"
        ];
      }
    );
}
