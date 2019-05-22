import React from "react";

const TAGS = [
  "food",
  "lol",
  "wtf",
  "cursed",
  "tech",
  "news",
  "wtf",
  "cursed",
  "tech",
  "politics",
  "mildlyinteresting",
  "todayilearned",
  "oddlysatisfying",
  "rarepuppers"
];
export default ({ example }) => {
  if (example === 4) {
    return (
      <div
        style={{
          background: "blue",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginBottom: "-0.5em"
          }}
        >
          {TAGS.map((tag, i) => (
            <div
              key={i}
              style={{
                background: "tomato",
                display: "inline-block",
                padding: "0.2em 1em",
                border: "2px solid rgba(0, 0, 0, 0.3)",
                borderRadius: "15px",
                marginRight: "0.5em",
                marginBottom: "0.5em"
              }}
            >
              #{tag}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (example === 3) {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          background: "blue",
          position: "relative"
        }}
      >
        {TAGS.map((tag, i) => (
          <div
            key={i}
            style={{
              background: "tomato",
              display: "inline-block",
              padding: "0.2em 1em",
              border: "2px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "15px",
              marginRight: "0.5em",
              marginBottom: "0.5em"
            }}
          >
            #{tag}
          </div>
        ))}
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            height: "0.5em",
            width: "100%",
            background: `
            repeating-linear-gradient(
              45deg,
              red,
              red 10px,
              white 10px,
              white 20px
            )
            `
          }}
        />
      </div>
    );
  }
  if (example === 2) {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          background: "blue"
        }}
      >
        {TAGS.map((tag, i) => (
          <div
            key={i}
            style={{
              background: "tomato",
              display: "inline-block",
              padding: "0.2em 1em",
              border: "2px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "15px",
              marginRight: "0.5em",
              marginBottom: "0.5em"
            }}
          >
            #{tag}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        background: "blue"
      }}
    >
      {TAGS.map((tag, i) => (
        <div
          key={i}
          style={{
            background: "tomato",
            display: "inline-block",
            borderRadius: "15px",
            padding: "0.2em 1em",
            border: "2px solid rgba(0, 0, 0, 0.3)"
          }}
        >
          #{tag}
        </div>
      ))}
    </div>
  );
};
