"use client";

import { IconButton, Skeleton, chakra } from "@chakra-ui/react";
import { ThemeProvider, useTheme } from "next-themes";

import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";

// Theme Provider Component
export function ColorModeProvider(props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
      {...props}
    />
  );
}

// Custom Hook for Color Mode
export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return {
    colorMode: resolvedTheme || "light", // Default to light
    setColorMode: setTheme,
    toggleColorMode,
  };
}

// Hook for Light/Dark Mode Values
export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

// Icon Component for Dark/Light Mode
export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? <LuMoon /> : <LuSun />;
}

// Toggle Button for Theme Switch
export const ColorModeButton = React.forwardRef(function ColorModeButton(
  props,
  ref
) {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      variant="ghost"
      aria-label="Toggle color mode"
      size="sm"
      ref={ref}
      icon={<ColorModeIcon />}
      {...props}
    />
  );
});

// Light Mode Wrapper
export const LightMode = React.forwardRef(function LightMode(props, ref) {
  return (
    <chakra.span
      color="black"
      bg="white"
      display="contents"
      ref={ref}
      {...props}
    />
  );
});

// Dark Mode Wrapper
export const DarkMode = React.forwardRef(function DarkMode(props, ref) {
  return (
    <chakra.span
      color="white"
      bg="black"
      display="contents"
      ref={ref}
      {...props}
    />
  );
});


