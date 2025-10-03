import express from "express";
import { prismaClient } from "store/client";
import { AuthInput } from "./types";
import jwt from "jsonwebtoken";
import { authMiddleware } from "./middleware";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());

app.post("/website", authMiddleware, async (req, res) => {
  if (!req.body.url) {
    res.status(411).json({});
    return;
  }
  const website = await prismaClient.website.create({
    data: {
      url: req.body.url,
      time_added: new Date(),
      user_id: req.userId!,
    },
  });

  res.json({
    id: website.id,
  });
});

app.get("/status/:websiteId", authMiddleware, async (req, res) => {
  const website = await prismaClient.website.findFirst({
    where: {
      user_id: req.userId!,
      id: req.params.websiteId,
    },
    include: {
      ticks: {
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
        take: 1,
      },
    },
  });

  if (!website) {
    res.status(409).json({
      message: "Not Found",
    });
    return;
  }

  res.json({
    url: website.url,
    id: website.id,
    user_id: website.user_id,
  });
});


app.post("/user/signup", async (req, res) => {
  const data = AuthInput.safeParse(req.body);
  if (!data.success) {
    res.status(403).send("");
    return;
  }

  try {
   
    const hashedPassword = await bcrypt.hash(data.data.password, 10);

    let user = await prismaClient.user.create({
      data: {
        username: data.data.username,
        password: hashedPassword,
      },
    });
    res.json({
      id: user.id,
    });
  } catch (e) {
    res.status(403).send("");
  }
});


app.post("/user/signin", async (req, res) => {
  const data = AuthInput.safeParse(req.body);
  if (!data.success) {
    res.status(403).send("");
    return;
  }

  let user = await prismaClient.user.findFirst({
    where: {
      username: data.data.username,
    },
  });

  if (!user) {
    res.status(403).send("");
    return;
  }


  const isPasswordValid = await bcrypt.compare(
    data.data.password,
    user.password
  );

  if (!isPasswordValid) {
    res.status(403).send("");
    return;
  }

  let token = jwt.sign(
    {
      sub: user.id,
    },
    process.env.JWT_SECRET!
  );

  res.json({
    jwt: token,
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running on port 3001");
});
