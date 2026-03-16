import type { Meta, StoryObj } from "@storybook/nextjs";

type PaletteToken = {
  name: string;
  value: string;
};

type PaletteSection = {
  title: string;
  tokens: PaletteToken[];
};

const sections: PaletteSection[] = [
  {
    title: "gray",
    tokens: [
      { name: "gray 900", value: "#0F0F0F" },
      { name: "gray 850", value: "#181818" },
      { name: "gray 800", value: "#212121" },
      { name: "gray 750", value: "#2F3032" },
      { name: "gray 700", value: "#494C4E" },
      { name: "gray 600", value: "#686C70" },
      { name: "gray 500", value: "#707579" },
      { name: "gray 400", value: "#7B8085" },
      { name: "gray 300", value: "#8A8F94" },
      { name: "gray 200", value: "#AAAAAA" },
      { name: "gray 150", value: "#C7C7C7" },
      { name: "gray 100", value: "#DCDCDC" },
      { name: "gray 50", value: "#EAEAEA" },
      { name: "gray 0", value: "#F4F4F4" },
    ],
  },
  {
    title: "black",
    tokens: [{ name: "black 1000", value: "#000000" }],
  },
  {
    title: "white",
    tokens: [{ name: "white 0", value: "#FFFFFF" }],
  },
  {
    title: "blue",
    tokens: [
      { name: "blue 900", value: "#010912" },
      { name: "blue 850", value: "#031E3A" },
      { name: "blue 800", value: "#043161" },
      { name: "blue 750", value: "#054589" },
      { name: "blue 700", value: "#0759B0" },
      { name: "blue 600", value: "#096DDB" },
      { name: "blue 500", value: "#007AFF" },
      { name: "blue 400", value: "#2990FF" },
      { name: "blue 300", value: "#57A7FC" },
      { name: "blue 200", value: "#7DBAFB" },
      { name: "blue 150", value: "#A3CDF9" },
      { name: "blue 100", value: "#CADFFB" },
      { name: "blue 50", value: "#DDEAF7" },
      { name: "blue 0", value: "#EFEFF4" },
    ],
  },
  {
    title: "green",
    tokens: [
      { name: "green 900", value: "#001409" },
      { name: "green 850", value: "#082D18" },
      { name: "green 800", value: "#0B3D21" },
      { name: "green 750", value: "#10542E" },
      { name: "green 700", value: "#177541" },
      { name: "green 600", value: "#1C8E4F" },
      { name: "green 500", value: "#20A458" },
      { name: "green 400", value: "#44AA6B" },
      { name: "green 300", value: "#5BB079" },
      { name: "green 200", value: "#89CFA0" },
      { name: "green 150", value: "#B6DBC1" },
      { name: "green 100", value: "#DBEDDE" },
      { name: "green 50", value: "#E9F5EB" },
      { name: "green 0", value: "#F2F5F3" },
    ],
  },
  {
    title: "red",
    tokens: [
      { name: "red 900", value: "#270D0D" },
      { name: "red 850", value: "#3E1414" },
      { name: "red 800", value: "#551A1A" },
      { name: "red 750", value: "#6C2020" },
      { name: "red 700", value: "#832626" },
      { name: "red 600", value: "#B13232" },
      { name: "red 500", value: "#E53935" },
      { name: "red 400", value: "#ED4949" },
      { name: "red 300", value: "#F65353" },
      { name: "red 200", value: "#F67C7C" },
      { name: "red 150", value: "#F0A4A4" },
      { name: "red 100", value: "#F6CBD0" },
      { name: "red 50", value: "#F7E1E1" },
      { name: "red 0", value: "#FAF5F5" },
    ],
  },
  {
    title: "orange",
    tokens: [
      { name: "orange 900", value: "#2F1C07" },
      { name: "orange 850", value: "#472909" },
      { name: "orange 800", value: "#5E360B" },
      { name: "orange 750", value: "#8D500E" },
      { name: "orange 700", value: "#B96A11" },
      { name: "orange 600", value: "#D37713" },
      { name: "orange 500", value: "#EA8314" },
      { name: "orange 400", value: "#EC9231" },
      { name: "orange 300", value: "#EEA04D" },
      { name: "orange 200", value: "#F0AF69" },
      { name: "orange 150", value: "#F2BD85" },
      { name: "orange 100", value: "#F6DABD" },
      { name: "orange 50", value: "#F8E9D9" },
      { name: "orange 0", value: "#FAF7F5" },
    ],
  },
];

const meta: Meta = {
  title: "UI Kit/Palette",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const pageStyle = {
  minHeight: "100vh",
  padding: "24px",
  background: "#f3f3f3",
  fontFamily: '"SF Pro Display", "SF Pro Text", Arial, sans-serif',
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(124px, 1fr))",
  gap: "8px",
};

const getTextColor = (value: string) => {
  const normalized = value.replace("#", "");
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.67 ? "#111111" : "#FFFFFF";
};

export const Showcase: StoryObj = {
  render: () => (
    <div style={pageStyle}>
      {sections.map((section) => (
        <section key={section.title} style={{ marginBottom: "40px" }}>
          <h2
            style={{
              margin: "0 0 12px",
              fontSize: "28px",
              lineHeight: 1.1,
              fontWeight: 500,
              color: "#111111",
            }}
          >
            {section.title}
          </h2>
          <div style={gridStyle}>
            {section.tokens.map((token) => {
              const textColor = getTextColor(token.value);
              return (
                <div
                  key={token.name}
                  style={{
                    minHeight: "92px",
                    padding: "12px",
                    borderRadius: "10px",
                    background: token.value,
                    color: textColor,
                    border: token.value === "#FFFFFF" ? "1px solid rgba(17, 17, 17, 0.24)" : "none",
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{ fontSize: "14px", lineHeight: 1.2, marginBottom: "24px" }}>
                    {token.name}
                  </div>
                  <div style={{ fontSize: "12px", lineHeight: 1.2, opacity: 0.9 }}>
                    {token.value}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  ),
};
