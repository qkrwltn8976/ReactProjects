import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/api/users", async (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get("page");
    return res(
      ctx.json([
        {
          id: `1 ${pageIndex}`,
          name: `jimmy 1-${pageIndex}`,
        },
        {
          id: `2 ${pageIndex}`,
          name: `jimmy 2-${pageIndex}`,
        },
        {
          id: `3 ${pageIndex}`,
          name: `jimmy 3-${pageIndex}`,
        },
        {
          id: `4 ${pageIndex}`,
          name: `jimmy 4-${pageIndex}`,
        },
        {
          id: `5 ${pageIndex}`,
          name: `jimmy 5-${pageIndex}`,
        },
      ])
    );
  }),
  rest.get("http://localhost:3000/api/user/:userId", async (req, res, ctx) => {
    const { userId } = req.params;
    return res(
      ctx.json({
        name: `jimmy (${userId})`,
      })
    );
  }),
  rest.get("/login", async (req, res, ctx) => {
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),
  rest.get(
    "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json",
    async (req, res, ctx) => {
      const id = req.url.searchParams.get("id");

      const originalResponse = await ctx.fetch(req);
      const originalResponseData = await originalResponse.json();

      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Data not found",
        })
      );
      // ctx.json({
      //   data: {
      //     people: [
      //       ...originalResponseData.data.people,
      //       {
      //         name: id,
      //         age: 135,
      //       },
      //       //   {
      //       //     name: "timmy",
      //       //     age: 13,
      //       //   },
      //       //   {
      //       //     name: "cindy",
      //       //     age: 15,
      //       //   },
      //       //   {
      //       //     name: "judy",
      //       //     age: 25,
      //       //   },
      //       //   {
      //       //     name: "marry",
      //       //     age: 64,
      //       //   },
      //       //   {
      //       //     name: "tommy",
      //       //     age: 109,
      //       //   },
      //     ],
      //   },
      // })
    }
  ),
];
