import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NativeBaseProvider, extendTheme } from "native-base";
import React from "react";

const queryClient = new QueryClient();

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        _pressed: {
          outlineWidth: 0,
        },
      },
    },
  },
  config: {
    suppressColorAccessibilityWarning: true,
  },
});

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <Stack />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
