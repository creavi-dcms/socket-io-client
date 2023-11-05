import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
import { io, Socket } from "socket.io-client";

// Module options TypeScript interface definition
export interface ModuleOptions {
  // path to the socket server
  socketServerURL: string;
  // function to handle socket events
  handleSocketEvents: (io: Socket) => void;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@creavi/socket-io-client",
    configKey: "CREAVISocketIO",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    socketServerURL:
      process.env.SOCKET_IO_SERVER_URL || "http://localhost:4000",
    handleSocketEvents: () => null,
  },
  // Nuxt module setup function
  async setup(options, nuxt) {
    // Check if the socket function is provided
    if (!options.handleSocketEvents) {
      // Close the Nuxt app
      await nuxt.close();
      // Throw an error
      throw new Error("Please provide the socket function");
    }

    // Connect to the external server using the configured URL
    const socketInstance = io(options.socketServerURL);

    // Log the connection
    socketInstance.on("connect", () => {
      console.info(`Connected to ${options.socketServerURL}`);
    });

    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin({
      src: resolver.resolve("./runtime/plugin"),
      mode: "client",
    });
  },
});
