exports.FinishResister = function (
  Name,
  Descript,
  StartDay,
  StartTime,
  RecieveTime
) {
  var message = {
    type: "flex",
    altText: "this is a flex message",
    contents: {
      type: "bubble",
      size: "giga",
      direction: "ltr",
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: Name + "さん",
            margin: "none",
            size: "lg",
          },
          {
            type: "separator",
            margin: "xs",
          },
          {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "box",
                layout: "vertical",
                contents: [],
              },
            ],
            spacing: "none",
            margin: "md",
          },
          {
            type: "text",
            text: "会議参加登録完了のお知らせ",
            align: "center",
            wrap: true,
            weight: "bold",
            size: "lg",
            margin: "none",
          },
          {
            type: "text",
            text: Descript,
            margin: "md",
          },
          {
            type: "separator",
            margin: "md",
          },
          {
            type: "box",
            layout: "baseline",
            contents: [
              {
                type: "text",
                text: "開催日",
                align: "center",
              },
              {
                type: "text",
                text: StartDay,
                align: "center",
              },
            ],
            margin: "lg",
          },
          {
            type: "box",
            layout: "baseline",
            contents: [
              {
                type: "text",
                text: "開催日時",
                align: "center",
              },
              {
                type: "text",
                text: StartTime,
                align: "center",
              },
            ],
            margin: "lg",
          },
          {
            type: "separator",
            margin: "md",
          },
          {
            type: "box",
            layout: "baseline",
            contents: [
              {
                type: "text",
                text:
                  "参加URLやパスワードについては，開催時間15分前までにお知らせします．",
                wrap: true,
              },
            ],
            margin: "lg",
          },
          {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "separator",
                margin: "md",
              },
              {
                type: "text",
                text: RecieveTime,
                align: "end",
              },
            ],
          },
        ],
        spacing: "none",
        margin: "none",
        paddingAll: "xxl",
        offsetTop: "none",
      },
    },
  };
  return message;
};
