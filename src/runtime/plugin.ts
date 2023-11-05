import { defineNuxtPlugin } from "#app";
import socket from "socket.io-client";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("Plugin injected by @creavi/socket-io!");
  // path of backend server socket
  const URL = process.env.SOCKET_IO_SERVER_URL || "http://localhost:4000";
  const socketServerURL = URL;

  // connect to socket server
  const socketInstance = socket(socketServerURL);

  // access socket instance from anywhere in the app with this.$io
  nuxtApp.provide("io", socketInstance);
});
