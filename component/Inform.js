exports.FinishResister = function (
  Name,
  Subject,
  Descript,
  StartDay,
  StartTime
) {
  var message = {
    type: "flex",
    altText: "this is a flex message",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "会議の参加登録が完了しました",
            weight: "bold",
            size: "lg",
            align: "center",
          },
          {
            type: "text",
            size: "sm",
            wrap: true,
            text: Descript,
            margin: "md",
          },
          {
            type: "separator",
            margin: "xxl",
          },
          {
            type: "box",
            layout: "vertical",
            margin: "xxl",
            spacing: "sm",
            contents: [
              {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "text",
                    text: "議題",
                    size: "md",
                    color: "#555555",
                    flex: 1,
                    align: "center",
                  },
                  {
                    type: "text",
                    text: Subject,
                    size: "md",
                    color: "#111111",
                    align: "center",
                    flex: 1,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "text",
                    text: "開催日",
                    size: "md",
                    color: "#555555",
                    flex: 1,
                    align: "center",
                  },
                  {
                    type: "text",
                    text: StartDay,
                    size: "md",
                    color: "#111111",
                    align: "center",
                    flex: 1,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "text",
                    text: "開始時間",
                    size: "md",
                    color: "#555555",
                    flex: 1,
                    align: "center",
                  },
                  {
                    type: "text",
                    text: StartTime,
                    size: "md",
                    color: "#111111",
                    align: "center",
                    flex: 1,
                  },
                ],
              },
            ],
          },
          {
            type: "separator",
            margin: "xxl",
          },
          {
            type: "text",
            size: "sm",
            wrap: true,
            text: "参加URLについては，開始15分前までに配信いたします．",
            margin: "md",
          },
          {
            type: "box",
            layout: "horizontal",
            margin: "md",
            contents: [
              {
                type: "text",
                text: "@管理者",
                color: "#aaaaaa",
                size: "md",
                align: "end",
              },
            ],
          },
        ],
        offsetTop: "sm",
      },
      styles: {
        footer: {
          separator: true,
        },
      },
    },
  };
  return message;
};
