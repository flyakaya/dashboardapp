import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Automatic memoization (babel-plugin-react-compiler); see the React Compiler docs.
  reactCompiler: true,
};

export default nextConfig;
