import path from 'path';

export default {
  webpack: {
    alias: {
      "~": path.join(path.resolve(__dirname, "./src")),
    },
  },
};
