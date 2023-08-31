CREATE TABLE "koalas_info" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (250) NOT NULL,
	"author" VARCHAR (100) NOT NULL,
	"published" DATE,
  "isRead" BOOLEAN DEFAULT FALSE
);
