import type { Meta, StoryObj } from "@storybook/nextjs";

type ThemeToken = {
  name: string;
  value: string;
};

type ThemeGroup = {
  title: string;
  light: ThemeToken[];
  dark: ThemeToken[];
};

const groups: ThemeGroup[] = [
  {
    title: "text",
    light: [
      { name: "light/text/primary", value: "#212121" },
      { name: "light/text/secondary", value: "#707579" },
      { name: "light/text/brandMain", value: "#007AFF" },
      { name: "light/text/onMain", value: "#FFFFFF" },
      { name: "light/text/error", value: "#E53935" },
    ],
    dark: [
      { name: "dark/text/primary", value: "#FFFFFF" },
      { name: "dark/text/secondary", value: "#AAAAAA" },
      { name: "dark/text/brandMain", value: "#2990FF" },
      { name: "dark/text/onMain", value: "#FFFFFF" },
      { name: "dark/text/error", value: "#E53935" },
    ],
  },
  {
    title: "bg",
    light: [
      { name: "light/bg/tabbar", value: "#FFFFFF" },
      { name: "light/bg/brandLight", value: "#EFEFF4" },
      { name: "light/bg/brandMain", value: "#007AFF" },
    ],
    dark: [
      { name: "dark/bg/tabbar", value: "#181818" },
      { name: "dark/bg/brandLight", value: "#0F0F0F" },
      { name: "dark/bg/brandMain", value: "#2990FF" },
    ],
  },
  {
    title: "bgSurface",
    light: [{ name: "light/bgSurface/primary", value: "#FFFFFF" }],
    dark: [{ name: "dark/bgSurface/primary", value: "#212121" }],
  },
  {
    title: "bgFill",
    light: [
      { name: "light/bgFill/primary", value: "#FFFFFF" },
      { name: "light/bgFill/brandMain", value: "#007AFF" },
      { name: "light/bgFill/error", value: "#E53935" },
      { name: "light/bgFill/white", value: "#FFFFFF" },
    ],
    dark: [
      { name: "dark/bgFill/primary", value: "#212121" },
      { name: "dark/bgFill/brandMain", value: "#2990FF" },
      { name: "dark/bgFill/error", value: "#E53935" },
      { name: "dark/bgFill/white", value: "#FFFFFF" },
    ],
  },
  {
    title: "border",
    light: [
      { name: "light/border/default", value: "#DCDCDC" },
      { name: "light/border/brandMain", value: "#007AFF" },
      { name: "light/border/error", value: "#E53935" },
    ],
    dark: [
      { name: "dark/border/default", value: "#494C4E" },
      { name: "dark/border/brandMain", value: "#2990FF" },
      { name: "dark/border/error", value: "#E53935" },
    ],
  },
  {
    title: "icon",
    light: [
      { name: "light/icon/default", value: "#8A8F94" },
      { name: "light/icon/brandMain", value: "#007AFF" },
      { name: "light/icon/onMain", value: "#FFFFFF" },
      { name: "light/icon/error", value: "#E53935" },
      { name: "light/icon/success", value: "#20A458" },
      { name: "light/icon/info", value: "#007AFF" },
    ],
    dark: [
      { name: "dark/icon/default", value: "#AAAAAA" },
      { name: "dark/icon/brandMain", value: "#2990FF" },
      { name: "dark/icon/onMain", value: "#FFFFFF" },
      { name: "dark/icon/error", value: "#E53935" },
      { name: "dark/icon/success", value: "#20A458" },
      { name: "dark/icon/info", value: "#2990FF" },
    ],
  },
  {
    title: "extra",
    light: [
      { name: "light/extra/swipeDelete", value: "#F67C7C" },
      { name: "light/extra/swipeComplete", value: "#89CFA0" },
      { name: "light/extra/swipeEdit", value: "#7DBAFB" },
      { name: "light/extra/swipeArchive", value: "#F0AF69" },
    ],
    dark: [
      { name: "dark/extra/swipeDelete", value: "#B13232" },
      { name: "dark/extra/swipeComplete", value: "#177541" },
      { name: "dark/extra/swipeEdit", value: "#0759B0" },
      { name: "dark/extra/swipeArchive", value: "#B96A11" },
    ],
  },
];

const meta: Meta = {
  title: "UI Kit/BlueTheme",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const pageStyle = {
  minHeight: "100vh",
  padding: "24px 20px 40px",
  background: "#f3f3f3",
  fontFamily: '"SF Pro Display", "SF Pro Text", Arial, sans-serif',
};

const headerTitleStyle = {
  margin: 0,
  color: "#1877f2",
  fontSize: "46px",
  lineHeight: 1,
  fontWeight: 700,
};

const headerSubtitleStyle = {
  margin: "12px 0 0",
  color: "#8e8e93",
  fontSize: "18px",
  lineHeight: 1.4,
};

const rowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))",
  gap: "8px",
};

const getTextColor = (hex: string) => {
  const normalized = hex.replace("#", "");
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.7 ? "#111111" : "#FFFFFF";
};

const renderToken = (token: ThemeToken) => {
  const textColor = getTextColor(token.value);

  return (
    <div
      key={token.name}
      style={{
        minHeight: "84px",
        padding: "10px 12px",
        borderRadius: "10px",
        background: token.value,
        color: textColor,
        border:
          token.value === "#FFFFFF"
            ? "1px solid rgba(17, 17, 17, 0.2)"
            : "none",
        boxSizing: "border-box",
      }}
    >
      <div style={{ fontSize: "13px", lineHeight: 1.25, marginBottom: "22px" }}>
        {token.name}
      </div>
      <div style={{ fontSize: "11px", lineHeight: 1.2, opacity: 0.9 }}>
        {token.value}
      </div>
    </div>
  );
};

export const Showcase: StoryObj = {
  render: () => (
    <div style={pageStyle}>
      <header
        style={{
          marginBottom: "28px",
          paddingBottom: "18px",
          borderBottom: "1px solid rgba(17, 17, 17, 0.08)",
        }}
      >
        <h1 style={headerTitleStyle}>blueTheme</h1>
        <p style={headerSubtitleStyle}>Набор цветов синей темы</p>
      </header>

      {groups.map((group) => (
        <section key={group.title} style={{ marginBottom: "28px" }}>
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "28px",
              lineHeight: 1.1,
              fontWeight: 600,
              color: "#111111",
            }}
          >
            {group.title}
          </h2>

          <div style={{ padding: "12px", background: "#f3f3f3" }}>
            <div style={rowStyle}>{group.light.map(renderToken)}</div>
          </div>

          <div
            style={{ marginTop: "8px", padding: "12px", background: "#070707" }}
          >
            <div style={rowStyle}>{group.dark.map(renderToken)}</div>
          </div>
        </section>
      ))}
    </div>
  ),
};
