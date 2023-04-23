{ pkgs }: {
	deps = [
		pkgs.import Message from './Message';
  pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
	];
}